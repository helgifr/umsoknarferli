import _ from 'lodash';
import { hyphenFormat, chunk } from './format';

export function calcSankey(data) {
  const uniqCompanys = _.uniqBy(data, el => el.company);

  const companyPosLinks = _
    .chain(uniqCompanys)
    .map(entry => {
      const source = entry.company;
      let targets = _.countBy(data, ({ company, posName }) => {
        return company === entry.company ? posName : null;
      });
      delete targets.null;
      return { source, targets };
    })
    .map(entry =>
      _.map(entry.targets, (value, key) => {
        const source = hyphenFormat(entry.source);
        const target = hyphenFormat(key);
        return { source, target, value };
      })
    )
    .flatten()
    .value();

  const posNodes = _
    .chain(data)
    .map(({ posName }) => posName)
    .union()
    .map(label => ({ id: hyphenFormat(label), name: hyphenFormat(label), label }))
    .value();

  const posProcessLink = _
    .chain(data)
    .map(({ posName, process }) => [posName, process[0]])
    .countBy()
    .map((value, key) => {
      const nodes = key.split(',');
      const source = hyphenFormat(nodes[0]);
      const target = hyphenFormat(nodes[1]);
      return { source, target, value };
    })
    .value();

  const processLinks = _
    .chain(data)
    .filter(({ process }) => process.length > 1)
    .map(({ process }) => chunk(process))
    .flatten()
    .countBy()
    .map((value, key) => {
      const nodes = key.split(',');
      const source = hyphenFormat(nodes[0]);
      const target = hyphenFormat(nodes[1]);
      return { source, target, value };
    })
    .value();

  const processNodes = _
    .chain(data)
    .map(({ process }) => process)
    .flatten()
    .union()
    .map(el => ({ id: hyphenFormat(el), name: hyphenFormat(el), label: el }))
    .value();

  const companyNodes = _.map(uniqCompanys, ({ company }) => ({ id: hyphenFormat(company), name: hyphenFormat(company), label: company }));

  /*
  const applications = { id: 'Umsóknir', name: 'Umsóknir', label: 'Umsóknir' };
  const applicationsLinks = _
    .chain(data)
    .map(el => el.company)
    .countBy()
    .map((value, key) => ({ source: 'Umsóknir', target: hyphenFormat(key), value }))
    .value();
  */

  const nodes = _.concat(companyNodes, posNodes, processNodes);
  const links = _.concat(companyPosLinks, posProcessLink, processLinks);

  /* Notað ef ekki er notað Nivo Sankey
  const nApplicationsLinks = links.map(el => {
    const source = nodes.findIndex(e => e.name === el.source);
    const target = nodes.findIndex(e => e.name === el.target);
    return { source, target, value: el.value };
  });
  */

  return { nodes, links };
}
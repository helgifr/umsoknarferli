import React from 'react';
import { shallow } from 'enzyme';

import Diagram from './Diagram';

const data = [
  {
      "company": "Vettvangur",
      "posName": "Vefforritari",
      "date": "2018-11-10",
      "process": [
          "Bið athugun"
      ]
  },
  {
      "company": "Advania",
      "posName": "Framendaforritari",
      "date": "2018-11-16",
      "process": [
          "Viðtal",
          "Annað viðtal",
          "Neitun"
      ]
  },
  {
      "company": "Origo",
      "posName": "Vefforritari",
      "date": "2018-11-16",
      "process": [
          "Viðtal"
      ]
  }
];

describe('Diagram component', () => {
  it('matches the snapshot without data', () => {
    const component = shallow(<Diagram />);
    expect(component).toMatchSnapshot();
  });

  it('matches the snapshot with data', () => {
    const component = shallow(<Diagram data={data} />);
    expect(component).toMatchSnapshot();
  });
});
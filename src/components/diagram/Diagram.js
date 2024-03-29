import React, { Component } from 'react';

import { ResponsiveSankey } from '@nivo/sankey';
import { calcSankey } from '../../utils/calc';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';

import Loading from '../../components/loading';

import './Diagram.css';

const DateRange = props => {
  const { selectionRange, minDate, maxDate, handler } = props;
  return (
    <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
        onChange={handler}
        months={2}
        direction="horizontal"
      />
);
}

class Diagram extends Component {

  state = {
    selectionRange: null,
    minDate: null,
    maxDate: null,
  }

  componentDidMount() {
    const { data = [] } = this.props;
    const dates = data.map(el => new Date(el.date));
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));
    const selectionRange = {
      startDate: minDate,
      endDate: maxDate,
      key: 'selectionRange',
    }
    this.setState({ minDate, maxDate, selectionRange });
  }

  handler = (ranges) => {
    const { selectionRange } = ranges;
    this.setState({ selectionRange });
  }

  noApplications(selectionRange) {
    return (
      <div className="diagram-wrapper">
        <h2 className="diagram__no-data">Engar umsóknir</h2>
        <DateRange selectionRange={selectionRange} />
      </div>
    );
  }

  dateRangePicker(selectionRange) {
    return (
        <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date(this.state.minDate)}
            maxDate={new Date(this.state.maxDate)}
            onChange={this.handler}
            months={2}
            direction="horizontal"
          />
    );
  }

  render() {
    const { selectionRange, maxDate, minDate } = this.state;

    if (!selectionRange) return (<Loading />);

    const { data = [] } = this.props;
    const { startDate, endDate } = selectionRange;

    const filteredData = data.filter(el => new Date(el.date) >= startDate && new Date(el.date) <= endDate);

    if (filteredData.length === 0) {
      return (
        <div className="diagram-wrapper">
          <h2 className="diagram__no-data">Engar umsóknir</h2>
          <DateRange
            selectionRange={selectionRange}
            minDate={minDate}
            maxDate={maxDate}
            handler={this.handler}
          />
        </div>
      );
    }

    const { nodes, links } = calcSankey(filteredData);

    return (
      <div className="diagram-component">
        <div className="diagram-wrapper">
          <ResponsiveSankey
            data={{ nodes, links }}
            margin={{
              "top": 40,
              "right": 60,
              "bottom": 40,
              "left": 60
            }}
            align="justify"
            colors="category10"
            nodeOpacity={1}
            nodeWidth={18}
            linkHoverOpacity={0.5}
            nodeBorderColor="inherit:darker(0.8)"
            labelPosition="outside"
            labelOrientation="vertical"
            labelPadding={16}
            labelTextColor="inherit:darker(1)"
            enableLabels
            labelFormat={(id) => { // Skilar label í stað id
              const { label } = nodes.find(el => el.id === id);
              return label;
            }}
            motionStiffness={120}
            motionDamping={11}
          />
        </div>
        <DateRange
          selectionRange={selectionRange}
          minDate={minDate}
          maxDate={maxDate}
          handler={this.handler}
        />
      </div>
    );
  }
}

export default Diagram;
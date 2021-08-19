import { Link, useParams } from 'react-router-dom';
import { DeviceMenu as Menu } from '../../components/DeviceMenu';
import { Breadcrumb } from 'antd';
import TsiClient from 'tsiclient';
import '../../../node_modules/tsiclient/tsiclient.css';

export const AboutDevice = () => {
  type paramsType = {
    deviceId: string;
  };

  const handleClick = () => {
    console.log('Il valore di `this` è: ', this);
    var data = [];
    var from = new Date(
      Math.floor(new Date().valueOf() / (1000 * 60 * 60)) * (1000 * 60 * 60),
    );
    var to: Date;
    for (var i = 0; i < 3; i++) {
      var lines: { [key: string]: {} } = {};
      data.push({ [`Factory${i}`]: lines });
      for (var j = 0; j < 5; j++) {
        var values: { [key: string]: {} } = {};
        lines[`Station${j}`] = values;
        for (var k = 0; k < 60; k++) {
          if (!(k % 2 && k % 3)) {
            var to = new Date(from.valueOf() + 1000 * 60 * k);
            var val = Math.random();
            var val2 = Math.random();
            var val3 = Math.random();
            var val4 = Math.random();
            values[to.toISOString()] = { avg: val, x: val2, y: val3, r: val4 };
          }
        }
      }
    }

    var tsiClient = new TsiClient();
    var lineChart = new tsiClient.ux.LineChart(
      document.getElementById('chart1') as HTMLElement,
    );
    lineChart.render(data, { theme: 'light' }, null);

    var barChart = new tsiClient.ux.BarChart(
      document.getElementById('chart2') as HTMLElement,
    );
    barChart.render(
      data,
      { theme: 'dark', grid: true, tooltip: true, legend: 'compact' },
      null,
    );

    var pieChart = new tsiClient.ux.PieChart(
      document.getElementById('chart3') as HTMLElement,
    );
    pieChart.render(
      data,
      { theme: 'light', grid: true, tooltip: true, legend: 'compact' },
      null,
    );

    var heatmap = new tsiClient.ux.Heatmap(
      document.getElementById('chart4') as HTMLElement,
    );
    heatmap.render(
      data,
      { theme: 'dark' },
      data.map((d) => {
        return {
          measureTypes: ['avg'],
          searchSpan: {
            from: from.toISOString(),
            to: to.toISOString(),
            bucketSize: '1m',
          },
        };
      }),
    );

    var scatterplot = new tsiClient.ux.ScatterPlot(
      document.getElementById('chart5') as HTMLElement,
    );
    scatterplot.render(
      data,
      {
        theme: 'light',
        legend: 'compact',
        tooltip: true,
        spMeasures: ['x', 'y', 'r'],
      },
      null,
    );
  };
  let params: paramsType = useParams();

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Dispositivi</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/alldevices">Tutti i Dispositivi</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{params.deviceId}</Breadcrumb.Item>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <Menu deviceID={params.deviceId} />
      <h4>Nothing to show in About page</h4>
      <button id="showChart" onClick={handleClick}>
        Clicca qui per visualizzare i dati
      </button>
      <div id="chart1"></div>
      <div id="chart2"></div>
      <div id="chart3"></div>
      <div id="chart4"></div>
      <div id="chart5"></div>
    </>
  );
};

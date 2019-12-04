/* Chart */
Highcharts.chart('chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Percentage of Individuals Growing Herbs Indoors'
    },
    subtitle: {
        text: 'Source: <a href="https://gardenresearch.com/">Garden Research</a>'
    },
    xAxis: {
        categories: [
            'Generation'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Millennials',
        data: [37]

    }, {
        name: 'Baby Boomers',
        data: [28]

    }]
});
/* End chart */

const clicker = document.querySelector('.button');
const myText = document.querySelector('#airqualityinfo');

// hide the P
myText.style.display = 'none';

// make button work
clicker.onclick = showAndHide;

// this function runs each time button is clicked
function showAndHide() {
  if (myText.classList.contains('showing')) {
    // hide it
    myText.style.display = 'none';
    // remove class
    myText.classList.remove('showing');
  } else {
    // show it
    myText.style.display = 'block';
    // add class
    myText.classList.add('showing');
  }
}

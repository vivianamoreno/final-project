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


// air quality button //
const image = document.querySelector('#button1');
const text = document.querySelector('#airqualityinfo');
// hide the text
text.style.display = 'none';
// event handler
image.onclick = () => {
   text.style.display = 'block';
   div.style.display = 'none';
};

// another event handler
text.onclick = () => {
   text.style.display = 'none';
   div.style.display = 'block';
};

// mood button //
const image2 = document.querySelector('#button2');
const text2 = document.querySelector('#moodinfo');
// hide the text
text2.style.display = 'none';
// event handler
image2.onclick = () => {
   text2.style.display = 'block';
   div.style.display = 'none';
};

// another event handler
text2.onclick = () => {
   text2.style.display = 'none';
   div.style.display = 'block';
};

// productivity button //
const image3 = document.querySelector('#button3');
const text3 = document.querySelector('#productivityinfo');
// hide the text
text3.style.display = 'none';
// event handler
image3.onclick = () => {
   text3.style.display = 'block';
   div.style.display = 'none';
};

// another event handler
text3.onclick = () => {
   text3.style.display = 'none';
   div.style.display = 'block';
};

// aloe vera plant info hover //
let aloeverainfo = document.querySelector('#aloe-vera');


aloeverainfo.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'images/aloe-vera-info.png');
};

aloeverainfo.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'images/aloevera.jpg');
};

// snake plant info hover //
let snakeplantinfo = document.querySelector('#snake-plant');


snakeplantinfo.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'images/snake-plant-info.png');
};

snakeplantinfo.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'images/snakeplant.jpg');
};

// rubber tree info hover //
let rubbertreeinfo = document.querySelector('#rubber-tree');


rubbertreeinfo.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'images/rubber-tree-info.png');
};

rubbertreeinfo.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'images/rubbertree.jpg');
};

// fiddle leaf tree info //
let fiddleleafinfo = document.querySelector('#fiddle-leaf');


fiddleleafinfo.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'images/fiddle-leaf-info.png');
};

fiddleleafinfo.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'images/fiddleleaftree.jpg');
};

// fun fact button //
// get elements from DOM, make variables
const factclicker = document.querySelector('#funfact');
const factmyText = document.querySelector('#funfactinfo');

// hide the P
factmyText.style.display = 'none';

// make button work
factclicker.onclick = showAndHide;

// this function runs each time button is clicked
function showAndHide() {
  if (factmyText.classList.contains('showing')) {
    // hide it
    factmyText.style.display = 'none';
    // remove class
    factmyText.classList.remove('showing');
  } else {
    // show it
    factmyText.style.display = 'block';
    // add class
    factmyText.classList.add('showing');
  }
}

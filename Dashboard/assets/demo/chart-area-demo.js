// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 7", "Oct 8", "Oct 9", "Oct 10", "Oct 11", "Oct 12",
         "Oct 14", "Oct 15", "Oct 16", "Oct 17", "Oct 18", "Oct 19", "Oct 21", "Oct 22", "Oct 23", "Oct 24", "Oct 25", 
         "Oct 26", "Oct 28", "Oct 29", "Oct 30", "Oct 31"],
    datasets: [{
      label: "Sessions",
      lineTension: 0,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [27103.5, 15601.5, 19701.25, 10547.75, 11044.75, 26113.5, 28614.51, 24214.5, 9840.25, 18175.2, 8944.51, 5126, 16622.75, 13598, 8565, 19134, 20218, 8768, 3802, 14032, 5049, 7697.2, 30783, 9370, 13306, 17771.25, 17065],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

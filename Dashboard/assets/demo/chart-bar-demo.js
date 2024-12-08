// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['August 2024', 'September 2024', 'October 2024'],  // Months
      datasets: [{
          label: 'Total Sales',
          data: [469430.25, 378942.52, 410808.42],  // Total Sales values
          backgroundColor: 'rgba(255, 159, 64, 0.7)',  // Orange for Total Sales
      },
      {
          label: 'Gross Income',
          data: [211244.00, 170524.00, 184864.00],  // Gross Income values
          backgroundColor: 'rgba(54, 162, 235, 0.7)',  // Blue for Gross Income
      },
      {
          label: 'Expenses',
          data: [99365.70, 99881.00, 81483.49],  // Expenses values
          backgroundColor: 'rgba(255, 99, 132, 0.7)',  // Red for Expenses
      },
      {
          label: 'Net Income',
          data: [111878.80, 70643.00, 103380.51],  // Net Income values
          backgroundColor: 'rgba(75, 192, 192, 0.7)',  // Green for Net Income
      }]
  },
  options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
          tooltip: {
              callbacks: {
                  label: function(tooltipItem) {
                      return tooltipItem.dataset.label + ': ₱' + tooltipItem.raw.toLocaleString();
                  }
              }
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  callback: function(value) {
                      return '₱' + value.toLocaleString();  // Format Y-axis values with currency
                  }
              }
          }
      },
      elements: {
          bar: {
              borderWidth: 1
          }
      },
      indexAxis: 'x',  // Stacked bar chart along the x-axis
      layout: {
          padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20
          }
      },
      stacked: true  // Enable stacking of bars
  }
});
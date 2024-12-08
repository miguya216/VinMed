const csvFileUrl = './csv/Book(Items).csv';

function fetchCSV() {
    fetch(csvFileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('CSV file fetched successfully');
            return response.text();
        })
        .then(csvData => {
            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: function (results) {
                    console.log('Parsed data:', results.data);
                    populateDataTable(results.data);
                },
                error: function (err) {
                    console.error('Error parsing CSV:', err);
                }
            });
        })
        .catch(error => console.error('Error fetching CSV file:', error));
}

function populateDataTable(data) {
    const datatablesSimple = document.getElementById('datatablesSimple');

    if (datatablesSimple) {
        // Convert data to a format that simpleDatatables expects (2D array)
        const formattedData = data.map(row => Object.values(row));

        // Initialize the DataTable if it hasn't been already initialized
        if (!datatablesSimple._datatable) {
            new simpleDatatables.DataTable(datatablesSimple, {
                data: {
                    headings: Object.keys(data[0]), // Table headings from the CSV header
                    data: formattedData
                }
            });
        } else {
            // For reloading data, simply update the data in the table
            datatablesSimple._datatable.updateConfig({
                data: {
                    headings: Object.keys(data[0]),
                    data: formattedData
                }
            }).reload();
        }
    }
}

window.addEventListener('DOMContentLoaded', event => {
    fetchCSV();
});

// Example: Dynamically generate rows for the table with dynamic page breaks

var data = [
    { name: 'John Doe', age: 30, country: 'USA' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    // Add more data objects as needed
  ];
  
  var tbody = document.querySelector('tbody');
  var pageHeight = 297; // Height of A4 page in millimeters
  var availableHeight = pageHeight - 40; // Adjust for margins and padding
  
  var currentPage = 1;
  var currentHeight = 0;
  
  data.forEach(function(item, index) {
    var row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.country}</td>
    `;
    tbody.appendChild(row);
  
    // Calculate the height of the content dynamically
    var contentHeight = row.offsetHeight;
  
    // Check if the content exceeds the available space on the current page
    if (currentHeight + contentHeight > availableHeight) {
      var pageBreak = document.createElement('div');
      pageBreak.classList.add('page-break');
      document.body.appendChild(pageBreak);
  
      currentPage++;
      currentHeight = 0;
    }
  
    currentHeight += contentHeight;
  });
  
  // Add click event listener to the download button
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', function() {
    var report = document.getElementById('report');
  
    // Create a new window or tab for printing the report
    var printWindow = window.open('', '_blank');
  
    // Write the report content to the new window or tab
    printWindow.document.open();
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Print Report</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
  
          #report {
            width: 210mm; /* A4 page width */
            margin: 0 auto;
            padding: 20px;
          }
  
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
  
          table th, table td {
            padding: 8px;
            border: 1px solid #000;
          }
  
          table th {
            background-color: #f0f0f0;
          }
  
          .page-break {
            page-break-after: always;
          }
        </style>
      </head>
      <body>
        ${report.innerHTML}
      </body>
      </html>
    `);
    printWindow.document.close();
  
    // Wait for the window or tab to finish loading
    printWindow.addEventListener('load', function() {
      // Trigger the print functionality
      printWindow.print();
    });
  });
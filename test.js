

export default function json2html(data) {
  // Start the table with the specified data-user attribute
  let html = '<table data-user="pawankumar7261048458@gmail.com">';
  
  // Extract unique headers from the data array
  const headers = Array.from(new Set(data.flatMap(Object.keys)));
  
  // Build the header row
  html += '<thead><tr>' + headers.map(header => <th>${header}</th>).join('') + '</tr></thead>';
  
  // Build the body rows
  html += '<tbody>';
  for (const row of data) {
    html += '<tr>';
    for (const header of headers) {
      html += <td>${row[header] !== undefined ? row[header] : ''}</td>;
    }
    html += '</tr>';
  }
  html += '</tbody>';
  html += '</table>';

  return html;
}

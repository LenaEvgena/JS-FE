// 1. Create a table 100x100. Compare performance in adding listener to each cell click and event delegation.
function createTable(rows, cells) {
  let table = document.createElement('table');
  table.style.border = '1px solid black';

  for (let i = 0; i < rows; ++i) {
    let row = document.createElement('tr');
    for (let j = 0; j < cells; ++j) {
      let td = document.createElement('td');
      td.style.border = '1px solid black';
      td.style.textAlign = 'center';
      td.style.minWidth = '50px';
      td.style.height = '30px';
      td.style.cursor = 'pointer';
      row.appendChild(td);
      row.cells[j].appendChild(document.createTextNode((i + 1) + ':' + (j + 1)));
    }
    table.appendChild(row);
  }
  return table;
}

document.querySelector('.wrapper').appendChild( createTable(100, 100) );

// add event listeners to each cell
let cell = Array.from(document.querySelectorAll('td'));
cell.forEach(cell => {
  cell.addEventListener('click', (e) => {
    console.log(`${e.target.textContent} cell clicked!`);
  });
})


// 2. Apply drag&drop functionality to each cell.

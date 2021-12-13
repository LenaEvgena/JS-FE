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
let cells = Array.from(document.querySelectorAll('td'));
// cells.forEach(cell => {
//   cell.addEventListener('click', () => {
//     console.log(`${cell.textContent} cell clicked!`);
//   });
// })
/* за 5 сек
130 ms Scripting
202 ms Rendering
49 ms Painting
124 ms System
608 ms Idle

141 ms Scripting
224 ms Rendering
48 ms Painting
145 ms System
707 ms Idle
*/


// add event listeners to the container
let table = document.querySelector('table');
table.addEventListener('click', (e) => {
  console.log(`${e.target.textContent} cell of the table clicked!`);
});
/* за 5 сек
126 ms Scripting
201 ms Rendering
46 ms Painting
128 ms System
613 ms Idle

120 ms Scripting
202 ms Rendering
47 ms Painting
125 ms System
806 ms Idle
*/


// 2. Apply drag&drop functionality to each cell.

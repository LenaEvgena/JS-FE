// 1. Create a table 100x100. Compare performance in adding listener to each cell click and event delegation.

function createTable(rows, cells) {
  let table = document.createElement('table');
  table.style.border = '1px solid black';

  for (let i = 0; i < rows; ++i) {
    let row = document.createElement('tr');
    for (let j = 0; j < cells; ++j) {
      let td = document.createElement('td');
      td.id = `${i + 1}:${j + 1}`;
      td.style.border = '1px solid black';
      td.style.textAlign = 'center';
      td.style.minWidth = '50px';
      td.style.height = '30px';
      td.style.cursor = 'pointer';
      row.appendChild(td);
      row.cells[j].appendChild(document.createTextNode(td.id));
    }
    table.appendChild(row);
  }
  return table;
}

document.querySelector('.wrapper').appendChild( createTable(100, 100) );

// add event listeners to each cell
let cells = Array.from(document.getElementsByTagName('td'));
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    console.log(`${cell.id} cell clicked!`);
  });
})
// + исключает необходимость обработки клика вне ячейки


// add event listeners to the container
let table = document.querySelector('table');
table.addEventListener('click', (e) => {
  console.log(`${e.target.id} cell of the table clicked!`);
});
// + меньше строк кода
// + не нужно вешать много обработчиков
// + можно динамически изменять количество ячеек и все они все равно будут с обработчиками
// - не исключает необходимость обработки клика вне ячейки



// 2. Apply drag&drop functionality to each cell.
cells.forEach(cell => {
  cell.setAttribute('draggable', 'true');

  cell.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('id', e.target.id);
    // console.log(e);
  });

  cell.addEventListener('dragover', (e) => {
    e.preventDefault();
    cell.style.backgroundColor = 'lightgrey';
  });

  cell.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = '';
  });

  cell.addEventListener('drop', (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = '';
    let data = e.dataTransfer.getData('id');
    console.log(data, 'dropped');
    e.target.append(document.getElementById(data));
  });
});



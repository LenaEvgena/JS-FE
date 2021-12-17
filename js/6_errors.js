// 1. Create your custom error and trigger it.

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
    this.message = message || 'Ошибка';
  }
}

try {
  throw new MyError();
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}


// 2. Choose 3 sites and analyze it using DevTools console:
// 1 -- Do they have memory leaks?
// 2 -- What functions are taking more time for execution?
// 3 -- What time does it take for rendering first meaningful page?


/*
https://www.onliner.by/

1 -- да (вкладка Perfomance, aнализ Memory, просматривается увеличение размера кучи JS и количества узлов (DOM-элементы создаются, но не удаляются) (потенциальная утечка памяти)
  -- да (вкладка Memory, в Snapshot есть упоминания о detached элементах (удаленных из дерева DOM, но некоторый JavaScript все еще ссылается на них))
2 -- (вкладка Perfomance, раздел Main --> Long Task):
    -HTTP-запросы
    -выполнение функций с результатами запросов
3 -- 0.6 - 0.7s (вкладка Lighthouse -> First Contentful Paint)


https://learn.javascript.ru/

1 -- да (вкладка Perfomance, aнализ Memory, просматривается увеличение размера кучи JS и количества узлов (DOM-элементы создаются, но не удаляются) (потенциальная утечка памяти)
  -- да (вкладка Memory, в Snapshot есть упоминания о detached элементах (удаленных из дерева DOM, но некоторый JavaScript все еще ссылается на них))
2 --  (вкладка Perfomance, раздел Main --> Long Task):
    -загрузка HTML-страницы (событие DOMContentLoaded)
    -работа с функциями по выделению и разметке текста
3 -- 0.5s (вкладка Lighthouse -> First Contentful Paint)


http://bgs.by/

1 -- да (вкладка Perfomance, aнализ Memory, просматривается увеличение размера кучи JS и количества узлов (DOM-элементы создаются, но не удаляются) (потенциальная утечка памяти)
  -- да (вкладка Memory, в Snapshot есть упоминания о detached элементах (удаленных из дерева DOM, но некоторый JavaScript все еще ссылается на них))
2 -- (вкладка Perfomance, раздел Main --> Long Task):
    -загрузка HTML-страницы
    -работа с библиотекой JQuery
    -компиляция кода
3 -- 0.6 - 0.7s (вкладка Lighthouse -> First Contentful Paint)


*/

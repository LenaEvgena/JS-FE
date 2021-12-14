// 1. Create your custom error and trigger it.

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
    this.message = message || 'Сообщение по умолчанию';
  }
}

try {
  throw new MyError('Ошибка');
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}


// 2. Choose 3 sites and analyze it using DevTools console:
// - Do they have memory leaks?
// - What functions are taking more time for execution?
// - What time does it take for rendering first meaningful page?

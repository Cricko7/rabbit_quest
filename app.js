const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

// Порт берём из env, или по умолчанию 3000
const port = process.env.PORT || 3000;

// Создаём поток для записи логов в файл access.log (в режиме дозаписи)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Логируем HTTP-запросы в файл
app.use(morgan('combined', { stream: accessLogStream }));

// Если хочешь одновременно логировать в консоль - можно добавить в два разных вызова, например:
app.use(morgan('dev'));  // логи в консоль с цветом (для разработки)

// Подключаем отдачу статичных файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://217.198.13.234:${port}`);
});

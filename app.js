const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Логирование в файл access.log
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Отдача статических файлов из ./public
app.use(express.static(path.join(__dirname, 'public')));

// Простой маршрут
app.get('/', (req, res) => {
  res.send('Hello from Express on Debian 12!');
});

// Слушаем все IP
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

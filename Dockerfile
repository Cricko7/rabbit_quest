# Используем легковесный официальный образ Node.js (альпийский)
FROM node:18-alpine

# Рабочая директория внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем только production-зависимости
RUN npm ci --only=production

# Копируем исходные файлы приложения в контейнер
COPY . .

# Открываем порт, на котором слушает Express
EXPOSE 3000

# Запускаем приложение
CMD ["node", "app.js"]


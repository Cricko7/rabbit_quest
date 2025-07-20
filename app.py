from flask import Flask, request

app = Flask(__name__)

# Пример слабой проверки логина и пароля — уязвимой к SQL инъекции
users = {
    "admin": "supersecret"
}

@app.route('/final', methods=['GET', 'POST'])
def final_level():
    if request.method == 'POST':
        username = request.form.get('username', '')
        password = request.form.get('password', '')

        # Уязвимый SQL-запрос (симуляция)
        # В реальном мире это бы выглядело как:
        # query = "SELECT * FROM users WHERE username = '%s' AND password = '%s'" % (username, password)
        # Но здесь мы просто эмулируем уязвимость:

        if username == 'admin' and password == 'supersecret':
            return "Поздравляем! Финальный флаг: flag{final_flag_123}"
        else:
            # Допустим, для упрощения, поддерживаем инъекцию:
            # Если пользователь введет в username: admin' -- 
            # это обойдет проверку (в реальной СУБД)
            if username.startswith("admin' --"):
                return "Поздравляем! SQL-инъекция сработала! Флаг: flag{final_flag_123}"
            return "Неверный логин или пароль, попробуйте ещё."
    return '''
        <h2>Финальный уровень</h2>
        <form method="post">
          Логин: <input type="text" name="username"><br>
          Пароль: <input type="password" name="password"><br>
          <input type="submit" value="Войти">
        </form>
    '''

if __name__ == '__main__':
    app.run(debug=True)

// Этот файл якобы выдаёт "реальный" пароль
(function(){
  window['getRealPass'] = function() {
    return 'supersecret';  // Несоответствие реальному паролю в auth-системе
  };
})();

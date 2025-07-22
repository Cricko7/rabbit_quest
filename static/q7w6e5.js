// Этот файл якобы выдаёт "реальный" логин
(function(){
  window['getRealUser'] = function() {
    return 'administrator'; // Несовпадение с реальным логином (например, на самом деле 'admin')
  };
})();

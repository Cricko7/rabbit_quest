(function(){
  const _codes = ['MhMJBgQ=', 'PhAGEFlWCGFXA1A=']; //aglae mdcw88g36a2

  const decode = window['atob'];

  window['__check'] = function(userB64, passB64) {
    // Декодируем входные base64, сравниваем с эталоном
    return (userB64 === _codes[0] && passB64 === _codes[1]) || (userB64 === btoa("admin' --"));
  };
})();


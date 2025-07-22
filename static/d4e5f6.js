document['addEventListener']('DOMContentLoaded', function(){
  let _f = document['getElementById']('loginForm');
  let _r = document['getElementById']('result');

  _f['addEventListener']('submit', function(e){
    e['preventDefault']();

    let u = _f['username']['value']['trim']();
    let p = _f['password']['value']['trim']();

    if (typeof window['__check'] === 'function' && window['__check'](u, p)) {
      _r['style']['color'] = 'green';
      _r['textContent'] = 'flag{sUp3r_g000ld_c@rr0t}';
    } else if (u === 'Fr@bBIT0' && p === 'teeth') {
      _r['style']['color'] = 'blue';
      _r['innerHTML'] = 'Что-то пошло по плану: <a href="aglae.html" target="_blank">aglae.html</a>';
    } else {
      _r['style']['color'] = 'red';
      _r['textContent'] = 'Неверный логин или пароль, попробуйте ещё.';
    }
  });
});

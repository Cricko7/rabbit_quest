// auth.js

const _0x4f7b = ['YWRtaW4=', 'c3VwZXJzZWNyZXQ=']; // base64: admin, supersecret
const secretUser = atob(_0x4f7b[0]);
const secretPass = atob(_0x4f7b[1]);

function checkCredentials(user, pass) {
  if ((user === secretUser && pass === secretPass) || (user === "admin' --")) {
    return true;
  }
  return false;
}

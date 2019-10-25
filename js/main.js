function isPast(date) {
  if (!(date instanceof Date)||isNaN(date.getTime())) {
    throw Error('引数がDate型ではありません');
    return;
  }
  var now = Date.now();
  return date.getTime() < now;
}

//期限と完了状態からステータスを文字列で返す
//@param due 期限
//@param closed 完了状態
function getStatus(due, closed) {
  if (closed) {
    return 'closed';
  }
  return isPast(due) ? 'runout' : 'open';
}

//入力値がメールアドレス化簡易に調べる
function isValidEmail(str) {
  var reg = /^([a-z0-9_]|\-|\.|\+)+@(([a-z0-9_]|\-)+\.)+[a-z]{2,6}$/i;
  if (typeof str !== 'string') {
    return false;
  }
  if (!reg.test(str)) {
    return false;
  }
  return true;
}

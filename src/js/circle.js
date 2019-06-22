// named exports : 여러개 사용 가능
// 개별 모듈화 => named export
export var area = function(r) {
  return Math.PI * r * r;
};

export var circumference = function (r) {
  return 2 * Math.PI * r;
};

//export {area, circumference};
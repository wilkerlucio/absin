(function() {
  var int;
  module("Lexer Rules Integer");
  int = new Absin.LexerRules.Integer();
  test("invalid integers", function() {
    ok(!int.tokenize("abc"));
    ok(!int.tokenize("'123'"));
    ok(!int.tokenize('"123"'));
    return ok(!int.tokenize("_321"));
  });
  test("basic integers", function() {
    deepEqual(int.tokenize("0"), [[1, 0], ["INTEGER", 0]]);
    deepEqual(int.tokenize("123"), [[3, 0], ["INTEGER", 123]]);
    deepEqual(int.tokenize("5"), [[1, 0], ["INTEGER", 5]]);
    return deepEqual(int.tokenize("1234567890"), [[10, 0], ["INTEGER", 1234567890]]);
  });
  test("integers with underscore", function() {
    deepEqual(int.tokenize("123_456_789"), [[11, 0], ["INTEGER", 123456789]]);
    return deepEqual(int.tokenize("123__321"), [[8, 0], ["INTEGER", 123321]]);
  });
  test("hexadecimal numbers", function() {
    deepEqual(int.tokenize("0x"), [[2, 0], ["INTEGER", 0]]);
    deepEqual(int.tokenize("0x0"), [[3, 0], ["INTEGER", 0]]);
    deepEqual(int.tokenize("0xFF"), [[4, 0], ["INTEGER", 255]]);
    return deepEqual(int.tokenize("0x156"), [[5, 0], ["INTEGER", 342]]);
  });
  test("octal numbers", function() {
    deepEqual(int.tokenize("054"), [[3, 0], ["INTEGER", 44]]);
    return deepEqual(int.tokenize("0777"), [[4, 0], ["INTEGER", 511]]);
  });
}).call(this);

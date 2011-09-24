(function() {
  var float;
  module("Lexer Rules Float");
  float = new Absin.LexerRules.Float();
  test("invalid floats", function() {
    ok(!float.tokenize("213.aa"));
    return ok(!float.tokenize("abc"));
  });
  test("extracting regular floats", function() {
    deepEqual(float.tokenize("123.321"), [[7, 0], ["FLOAT", 123.321]], "match 123.321");
    return deepEqual(float.tokenize("04.3"), [[4, 0], ["FLOAT", 4.3]], "match 04.3");
  });
  test("extracting floats without first number", function() {
    deepEqual(float.tokenize(".5"), [[2, 0], ["FLOAT", .5]], "match .5");
    return deepEqual(float.tokenize(".05"), [[3, 0], ["FLOAT", .05]], "match .05");
  });
}).call(this);

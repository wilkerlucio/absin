(function() {
  var whitespacer;
  module("Lexer Rules Whitespace");
  whitespacer = new Absin.LexerRules.Whitespace();
  test("whitespace detection", function() {
    ok(whitespacer.isValid("  "));
    ok(whitespacer.isValid("\r\n"));
    ok(whitespacer.isValid("\t"));
    return ok(whitespacer.isValid("\n"));
  });
  test("whitespace invalid detection", function() {
    ok(!whitespacer.isValid("hey"));
    return ok(!whitespacer.isValid("(  )"));
  });
  test("whitespace parsing", function() {
    deepEqual(whitespacer.tokenize("  "), [[2, 0], null]);
    deepEqual(whitespacer.tokenize(" \n "), [[3, 1], null]);
    deepEqual(whitespacer.tokenize(" \r\n "), [[4, 1], null]);
    return deepEqual(whitespacer.tokenize("\t\r\n\n "), [[5, 2], null]);
  });
}).call(this);

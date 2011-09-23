(function() {
  var whitespacer;
  module("Lexer Rules Whitespace");
  whitespacer = new Absin.LexerRules.Whitespace();
  test("whitespace invalid detection", function() {
    ok(!whitespacer.tokenize("hey"));
    return ok(!whitespacer.tokenize("(  )"));
  });
  test("whitespace parsing", function() {
    deepEqual(whitespacer.tokenize("  "), [[2, 0], null]);
    deepEqual(whitespacer.tokenize(" \n "), [[3, 1], null]);
    deepEqual(whitespacer.tokenize(" \r\n "), [[4, 1], null]);
    return deepEqual(whitespacer.tokenize("\t\r\n\n "), [[5, 2], null]);
  });
}).call(this);

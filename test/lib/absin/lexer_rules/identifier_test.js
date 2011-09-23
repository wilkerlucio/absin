(function() {
  var ident;
  module("Lexer Rules Identifier");
  ident = new Absin.LexerRules.Identifier();
  test("is valid for identifiers", function() {
    ok(ident.isValid("identifier"));
    ok(ident.isValid("crazy+ident"));
    ok(ident.isValid("hello?"));
    return ok(ident.isValid("+"));
  });
  test("is not valid for special cases by default", function() {
    ok(!ident.isValid("(hello)"));
    ok(!ident.isValid("[list]"));
    ok(!ident.isValid(" hy"));
    ok(!ident.isValid("\nhy"));
    ok(!ident.isValid("\thy"));
    return ok(!ident.isValid("\rhy"));
  });
  test("extract and return correct char count", function() {
    deepEqual(ident.tokenize("hello", 0), [[5, 0], ["IDENTIFIER", "hello"]]);
    return deepEqual(ident.tokenize("hi+a(thing)", 1), [[4, 1], ["IDENTIFIER", "hi+a"]]);
  });
}).call(this);

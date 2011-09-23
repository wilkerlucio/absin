(function() {
  var ident;
  module("Lexer Rules Identifier");
  ident = new Absin.LexerRules.Identifier();
  test("is not valid for special cases by default", function() {
    ok(!ident.tokenize("(hello)"));
    ok(!ident.tokenize("[list]"));
    ok(!ident.tokenize(" hy"));
    ok(!ident.tokenize("\nhy"));
    ok(!ident.tokenize("\thy"));
    return ok(!ident.tokenize("\rhy"));
  });
  test("extract and return correct char count", function() {
    deepEqual(ident.tokenize("hello"), [[5, 0], ["IDENTIFIER", "hello"]]);
    return deepEqual(ident.tokenize("hi+a(thing)"), [[4, 0], ["IDENTIFIER", "hi+a"]]);
  });
}).call(this);

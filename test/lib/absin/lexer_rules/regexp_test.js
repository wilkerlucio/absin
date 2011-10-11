(function() {
  var r;
  module("Lexer Rules RegExp");
  r = new Absin.LexerRules.RegExp();
  test("invalid regexp", function() {
    ok(!r.tokenize("'testing'"));
    ok(!r.tokenize("testing"));
    ok(!r.tokenize("/testing"));
    ok(!r.tokenize('"testing"'));
    return ok(!r.tokenize('"testing"\n#"test"'));
  });
  test("parsing simple expression", function() {
    return deepEqual(r.tokenize('#"hello"'), [[8, 0], ["REGEXP", "/hello/"]]);
  });
  test("parsing expression with modifiers", function() {
    return deepEqual(r.tokenize('#"(?i)hello"'), [[12, 0], ["REGEXP", "/hello/i"]]);
  });
  test("parsing expression with escapes", function() {
    return deepEqual(r.tokenize('#"(?i)hel\\"lo"'), [[14, 0], ["REGEXP", "/hel\"lo/i"]]);
  });
}).call(this);

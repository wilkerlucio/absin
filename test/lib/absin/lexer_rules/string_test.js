(function() {
  var s;
  module("Lexer Rules String");
  s = new Absin.LexerRules.String();
  test("invalid strings", function() {
    ok(!s.tokenize("'invalid'"));
    return ok(!s.tokenize("12334"));
  });
  test("parsing simple string", function() {
    return deepEqual(s.tokenize('"hello world"'), [[13, 0], ["STRING", "hello world"]]);
  });
  test("parsing a blank string", function() {
    return deepEqual(s.tokenize('""'), [[2, 0], ["STRING", ""]]);
  });
  test("parsing multiline string", function() {
    deepEqual(s.tokenize('"hello\r\nfriend"'), [[15, 1], ["STRING", "hello\nfriend"]]);
    deepEqual(s.tokenize('"hello\nfriend"'), [[14, 1], ["STRING", "hello\nfriend"]]);
    return deepEqual(s.tokenize('"hello\rfriend"'), [[14, 1], ["STRING", "hello\nfriend"]]);
  });
  test("parsing string with double quote escape", function() {
    return deepEqual(s.tokenize('"hi \\"dude\\""'), [[13, 0], ["STRING", 'hi "dude"']]);
  });
  test("parsing string with newline escape", function() {
    return deepEqual(s.tokenize('"hi\\nthere"'), [[11, 0], ["STRING", "hi\nthere"]]);
  });
  test("parsing string with carrier return escape", function() {
    return deepEqual(s.tokenize('"hi\\rthere"'), [[11, 0], ["STRING", "hi\rthere"]]);
  });
  test("parsing string with tabulation escape", function() {
    return deepEqual(s.tokenize('"hi\\tthere"'), [[11, 0], ["STRING", "hi\tthere"]]);
  });
  test("parsing string with escape itself", function() {
    return deepEqual(s.tokenize('"hi\\\\there"'), [[11, 0], ["STRING", "hi\\there"]]);
  });
  test("parsing string with invalid escape", function() {
    return deepEqual(s.tokenize('"hi\\sthere"'), [[11, 0], ["STRING", "hi\\sthere"]]);
  });
  test("throw exception when find unterminated string", function() {
    raises((function() {
      return s.tokenize('"unfinished');
    }));
    return raises((function() {
      return s.tokenize('"unfinished\\');
    }));
  });
}).call(this);

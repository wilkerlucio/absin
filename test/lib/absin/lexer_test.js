(function() {
  var TokenizeFixed, abLexer;
  TokenizeFixed = (function() {
    function TokenizeFixed(code, token) {
      this.code = code;
      this.token = token != null ? token : "FIXED";
    }
    TokenizeFixed.prototype.tokenize = function(code) {
      if (code.slice(0, this.code.length) === this.code) {
        return [[this.code.length, 0], [this.token, this.code]];
      }
    };
    return TokenizeFixed;
  })();
  abLexer = function() {
    return new Absin.Lexer({
      rules: [[null, new TokenizeFixed("a")], [null, new TokenizeFixed("b")]]
    });
  };
  module("Lexer");
  test("walking through lex rules", function() {
    var lexer, result;
    lexer = abLexer();
    result = lexer.tokenize("aab");
    deepEqual(result[0], ["FIXED", "a"]);
    deepEqual(result[1], ["FIXED", "a"]);
    return deepEqual(result[2], ["FIXED", "b"]);
  });
}).call(this);

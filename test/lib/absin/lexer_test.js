(function() {
  var TokenizeFixed, TokenizeFixedNil, abLexer;
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
  TokenizeFixedNil = (function() {
    function TokenizeFixedNil(code, token) {
      this.code = code;
      this.token = token != null ? token : "FIXED";
    }
    TokenizeFixedNil.prototype.tokenize = function(code) {
      if (code.slice(0, this.code.length) === this.code) {
        return [[this.code.length, 0], null];
      }
    };
    return TokenizeFixedNil;
  })();
  abLexer = function() {
    return new Absin.Lexer({
      rules: [[null, new TokenizeFixed("a")], [null, new TokenizeFixed("b")], [null, new TokenizeFixedNil("c")]]
    });
  };
  module("Lexer");
  test("walking through lex rules", function() {
    var lexer, result;
    lexer = abLexer();
    result = lexer.tokenize("acab");
    deepEqual(result[0], ["FIXED", "a"]);
    deepEqual(result[1], ["FIXED", "a"]);
    return deepEqual(result[2], ["FIXED", "b"]);
  });
}).call(this);

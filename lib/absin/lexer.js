(function() {
  var Lexer;
  Lexer = (function() {
    Lexer.defaultRules = function() {
      return [["grouper", new Absin.LexerRules.Grouper()], ["identifier", new Absin.LexerRules.Identifier()]];
    };
    function Lexer(opts) {
      if (opts == null) {
        opts = {};
      }
      this.rules = opts.rules || Lexer.defaultRules();
    }
    Lexer.prototype.tokenize = function(code, opts) {
      if (opts == null) {
        opts = {};
      }
      return [];
    };
    return Lexer;
  })();
  if (typeof require !== "undefined" && require !== null) {
    module.exports.Lexer = Lexer;
  } else {
    window.Absin.Lexer = Lexer;
  }
}).call(this);

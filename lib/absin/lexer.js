(function() {
  var Lexer;
  Lexer = (function() {
    Lexer.defaultRules = function() {
      return [["whitespace", new Absin.LexerRules.Whitespace()], ["list", new Absin.LexerRules.Grouper("[", "]", "LIST_OPEN", "LIST_CLOSE")], ["group", new Absin.LexerRules.Grouper()], ["string", new Absin.LexerRules.String()], ["regexp", new Absin.LexerRules.RegExp()], ["specials", new Absin.LexerRules.Specials()], ["identifier", new Absin.LexerRules.Identifier()]];
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

(function() {
  var Lexer;
  Lexer = (function() {
    Lexer.defaultRules = function() {
      return [["whitespace", new Absin.LexerRules.Whitespace()], ["list", new Absin.LexerRules.Grouper("[", "]", "LIST_OPEN", "LIST_CLOSE")], ["hash", new Absin.LexerRules.Grouper("{", "}", "HASH_OPEN", "HASH_CLOSE")], ["group", new Absin.LexerRules.Grouper()], ["integer", new Absin.LexerRules.Integer()], ["float", new Absin.LexerRules.Float()], ["regexp", new Absin.LexerRules.RegExp()], ["string", new Absin.LexerRules.String()], ["specials", new Absin.LexerRules.Specials()], ["identifier", new Absin.LexerRules.Identifier()]];
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

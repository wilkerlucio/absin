(function() {
  var Lexer;
  Lexer = (function() {
    Lexer.defaultRules = function() {
      return [["whitespace", new Absin.LexerRules.Whitespace()], ["list", new Absin.LexerRules.Grouper("[", "]", "LIST_OPEN", "LIST_CLOSE")], ["hash", new Absin.LexerRules.Grouper("{", "}", "HASH_OPEN", "HASH_CLOSE")], ["group", new Absin.LexerRules.Grouper()], ["integer", new Absin.LexerRules.Integer()], ["float", new Absin.LexerRules.Float()], ["regexp", new Absin.LexerRules.RegExp()], ["string", new Absin.LexerRules.String()], ["specials", new Absin.LexerRules.Special()], ["identifier", new Absin.LexerRules.Identifier()]];
    };
    function Lexer(opts) {
      if (opts == null) {
        opts = {};
      }
      this.rules = opts.rules || Lexer.defaultRules();
    }
    Lexer.prototype.tokenize = function(code, opts) {
      var current, i, name, token, tokenizer, tokens, _i, _len, _ref, _ref2;
      if (opts == null) {
        opts = {};
      }
      tokens = [];
      i = 0;
      while (i < code.length) {
        current = code.slice(i);
        token = null;
        _ref = this.rules;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          _ref2 = _ref[_i], name = _ref2[0], tokenizer = _ref2[1];
          if (token = tokenizer.tokenize(current)) {
            break;
          }
        }
        if (token) {
          i += token[0][0];
          if (token[1]) {
            tokens.push(token[1]);
          }
        } else {
          raise("invalid token " + current);
        }
      }
      return tokens;
    };
    return Lexer;
  })();
  if (typeof require !== "undefined" && require !== null) {
    module.exports.Lexer = Lexer;
  } else {
    window.Absin.Lexer = Lexer;
  }
}).call(this);

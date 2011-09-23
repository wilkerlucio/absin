(function() {
  var Identifier;
  window.Absin.LexerRules.Identifier = Identifier = (function() {
    function Identifier(syntax) {
      this.syntax = syntax != null ? syntax : /^[^\r\n\s\t()[\]]+/;
    }
    Identifier.prototype.isValid = function(code) {
      return !!(code.match(this.syntax));
    };
    Identifier.prototype.tokenize = function(code, line) {
      var matched;
      matched = code.match(this.syntax)[0];
      return [[matched.length, line], ["IDENTIFIER", matched]];
    };
    return Identifier;
  })();
}).call(this);
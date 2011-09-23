(function() {
  var Identifier;
  window.Absin.LexerRules.Identifier = Identifier = (function() {
    function Identifier(syntax) {
      this.syntax = syntax != null ? syntax : /^[^\r\n\s\t()[\]]+/;
    }
    Identifier.prototype.tokenize = function(code) {
      var match, matched;
      if (match = code.match(this.syntax)) {
        matched = match[0];
        return [[matched.length, 0], ["IDENTIFIER", matched]];
      }
    };
    return Identifier;
  })();
}).call(this);

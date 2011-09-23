(function() {
  var Whitespace;
  window.Absin.LexerRules.Whitespace = Whitespace = (function() {
    function Whitespace(matcher) {
      this.matcher = matcher != null ? matcher : /^(\r\n|\r|\n|\s)+/;
      this.lineMatcher = /\r\n|\r|\n/;
    }
    Whitespace.prototype.tokenize = function(code) {
      var lines, match, result;
      if (match = code.match(this.matcher)) {
        result = match[0];
        lines = result.split(this.lineMatcher);
        return [[result.length, lines.length - 1], null];
      }
    };
    return Whitespace;
  })();
}).call(this);

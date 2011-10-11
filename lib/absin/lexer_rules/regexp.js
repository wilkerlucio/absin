(function() {
  var RegExp;
  Absin.LexerRules.RegExp = RegExp = (function() {
    function RegExp() {
      this.delim = '/';
      this.stringTokenizer = new Absin.LexerRules.String();
    }
    RegExp.prototype.tokenize = function(code) {
      var string;
      if (code.match(/^#"/)) {
        string = this.stringTokenizer.tokenize(code.slice(1));
        string[0][0] += 1;
        string[1][0] = "REGEXP";
        string[1][1] = this.parseRegexp(string[1][1]);
        return string;
      }
    };
    RegExp.prototype.parseRegexp = function(expression) {
      var match, modifiers;
      if (match = expression.match(/^\(\?([a-z]+)\)/)) {
        expression = expression.slice(match[0].length);
        modifiers = match[1];
      }
      return "/" + expression + "/" + (modifiers || "");
    };
    return RegExp;
  })();
}).call(this);

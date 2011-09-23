(function() {
  var Grouper;
  window.Absin.LexerRules.Grouper = Grouper = (function() {
    function Grouper(opener, closer) {
      this.opener = opener != null ? opener : "(";
      this.closer = closer != null ? closer : ")";
    }
    Grouper.prototype.isValid = function(code) {
      return code === this.opener || code === this.closer;
    };
    Grouper.prototype.tokenize = function(code, line) {
      var c, token;
      c = code.charAt(0);
      token = null;
      if (c === this.opener) {
        token = ["GROUP_OPEN", this.opener];
      }
      if (c === this.closer) {
        token = ["GROUP_CLOSE", this.closer];
      }
      return [[1, line], token];
    };
    return Grouper;
  })();
}).call(this);

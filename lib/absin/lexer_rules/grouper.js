(function() {
  var Grouper;
  window.Absin.LexerRules.Grouper = Grouper = (function() {
    function Grouper(opener, closer) {
      this.opener = opener != null ? opener : "(";
      this.closer = closer != null ? closer : ")";
    }
    Grouper.prototype.tokenize = function(code) {
      var c, token;
      c = code.charAt(0);
      if (c === this.opener || c === this.closer) {
        token = null;
        if (c === this.opener) {
          token = ["GROUP_OPEN", this.opener];
        }
        if (c === this.closer) {
          token = ["GROUP_CLOSE", this.closer];
        }
        return [[1, 0], token];
      }
    };
    return Grouper;
  })();
}).call(this);

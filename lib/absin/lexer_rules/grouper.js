(function() {
  var Grouper;
  window.Absin.LexerRules.Grouper = Grouper = (function() {
    function Grouper(opener, closer, openToken, closeToken) {
      this.opener = opener != null ? opener : "(";
      this.closer = closer != null ? closer : ")";
      this.openToken = openToken != null ? openToken : "GROUP_OPEN";
      this.closeToken = closeToken != null ? closeToken : "GROUP_CLOSE";
    }
    Grouper.prototype.tokenize = function(code) {
      var c, token;
      c = code.charAt(0);
      if (c === this.opener || c === this.closer) {
        if (c === this.opener) {
          token = [this.openToken, this.opener];
        }
        if (c === this.closer) {
          token = [this.closeToken, this.closer];
        }
        return [[1, 0], token];
      }
    };
    return Grouper;
  })();
}).call(this);

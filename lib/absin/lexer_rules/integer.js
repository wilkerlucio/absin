(function() {
  var Integer;
  Absin.LexerRules.Integer = Integer = (function() {
    function Integer() {
      this.hexa = /^0x([a-f0-9]*)/i;
      this.octal = /^0(\d+)/;
      this.simple = /^\d[0-9_]*/;
      this.token = "INTEGER";
    }
    Integer.prototype.tokenize = function(code) {
      var hexCode, match, number, octalCode;
      if (match = code.match(this.hexa)) {
        hexCode = match[1];
        return [[match[0].length, 0], [this.token, parseInt(hexCode || "0", 16)]];
      } else if (match = code.match(this.octal)) {
        octalCode = match[1];
        return [[match[0].length, 0], [this.token, parseInt(octalCode, 8)]];
      } else if (match = code.match(this.simple)) {
        number = match[0].replace(/_/g, "");
        return [[match[0].length, 0], [this.token, parseInt(number)]];
      }
    };
    return Integer;
  })();
}).call(this);

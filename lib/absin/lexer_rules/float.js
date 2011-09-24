(function() {
  var Float;
  Absin.LexerRules.Float = Float = (function() {
    function Float() {
      this.matcher = /^\d*\.\d+/;
    }
    Float.prototype.tokenize = function(code) {
      var match, number;
      if (match = code.match(this.matcher)) {
        number = match[0];
        return [[number.length, 0], ["FLOAT", parseFloat(number)]];
      }
    };
    return Float;
  })();
}).call(this);

(function() {
  var String;
  Absin.LexerRules.String = String = (function() {
    function String() {
      this.delim = '"';
      this.lineMatcher = /^(\r\n|\n|\r)/;
    }
    String.prototype.tokenize = function(code) {
      var c, line, match, pos, rest, string;
      if (code.charAt(0) === this.delim) {
        line = 0;
        pos = 1;
        rest = code.slice(1);
        string = "";
        while (rest.length > 0) {
          if (match = rest.match(this.lineMatcher)) {
            string += "\n";
            line += 1;
            pos += match[0].length;
            rest = rest.slice(match[0].length);
            continue;
          }
          c = rest.charAt(0);
          pos += 1;
          if (c === this.delim) {
            return [[pos, line], ["STRING", string]];
          } else if (c === "\\") {
            string += this.escape(rest.charAt(1));
            pos += 1;
            rest = rest.slice(2);
          } else {
            string += c;
            rest = rest.slice(1);
          }
        }
        throw "unterminated string";
      }
    };
    String.prototype.escape = function(char) {
      var table;
      table = {
        "n": "\n",
        "t": "\t",
        "r": "\r",
        "\\": "\\"
      };
      table[this.delim] = this.delim;
      return table[char] || "\\" + char;
    };
    return String;
  })();
}).call(this);

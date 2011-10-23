prettyPrint = function(tokens) {
  string = ""

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    string += "[ " + token[0] + ", " + token[1] + " ] ";
  }

  return string;
};

window.onload = function() {
  var sourceArea = document.getElementById("source");
  var tokensArea = document.getElementById("tokens");
  var triggerButton = document.getElementById("generate");

  var lexer = new Absin.Lexer();

  triggerButton.onclick = function() {
    try {
      tokens = lexer.tokenize(sourceArea.value);
      tokensArea.value = prettyPrint(tokens);
    } catch(e) {
      tokensArea.value = "Error tokenizing: " + e;
      throw e;
    }
  };
};

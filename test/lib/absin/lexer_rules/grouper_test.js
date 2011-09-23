(function() {
  var grouper;
  module("Lexer Rules Grouper");
  grouper = new Absin.LexerRules.Grouper();
  test("return invalid for other chars", function() {
    ok(!grouper.tokenize("abc"));
    return ok(!grouper.tokenize("'"));
  });
  test("group opener", function() {
    return deepEqual(grouper.tokenize("(thing)"), [[1, 0], ["GROUP_OPEN", "("]]);
  });
  test("group closer", function() {
    return deepEqual(grouper.tokenize(")thing"), [[1, 0], ["GROUP_CLOSE", ")"]]);
  });
}).call(this);

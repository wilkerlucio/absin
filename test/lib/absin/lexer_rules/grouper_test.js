(function() {
  var grouper;
  module("Lexer Rules Grouper");
  grouper = new Absin.LexerRules.Grouper();
  test("return valid for opener or closer", function() {
    ok(grouper.isValid("("));
    return ok(grouper.isValid(")"));
  });
  test("return invalid for other chars", function() {
    ok(!grouper.isValid("a"));
    return ok(!grouper.isValid("'"));
  });
  test("group opener", function() {
    return deepEqual(grouper.tokenize("(thing)", 0), [[1, 0], ["GROUP_OPEN", "("]]);
  });
  test("group closer", function() {
    return deepEqual(grouper.tokenize(")thing", 2), [[1, 0], ["GROUP_CLOSE", ")"]]);
  });
}).call(this);

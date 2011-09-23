(function() {
  var customGroup, grouper;
  module("Lexer Rules Grouper");
  grouper = new Absin.LexerRules.Grouper();
  test("return invalid for other chars", function() {
    ok(!grouper.tokenize("abc"));
    return ok(!grouper.tokenize("[]'"));
  });
  test("group opener", function() {
    return deepEqual(grouper.tokenize("(thing)"), [[1, 0], ["GROUP_OPEN", "("]]);
  });
  test("group closer", function() {
    return deepEqual(grouper.tokenize(")thing"), [[1, 0], ["GROUP_CLOSE", ")"]]);
  });
  customGroup = new Absin.LexerRules.Grouper("[", "]", "LIST_OPEN", "LIST_CLOSE");
  test("custom return invalid for other chars", function() {
    ok(!customGroup.tokenize("abc"));
    return ok(!customGroup.tokenize("()'"));
  });
  test("custom group opener", function() {
    return deepEqual(customGroup.tokenize("[thing]"), [[1, 0], ["LIST_OPEN", "["]]);
  });
  test("custom group closer", function() {
    return deepEqual(customGroup.tokenize("]thing"), [[1, 0], ["LIST_CLOSE", "]"]]);
  });
}).call(this);

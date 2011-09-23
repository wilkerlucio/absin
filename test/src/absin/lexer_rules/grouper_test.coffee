# Copyright (c) 2011 Wilker Lúcio
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

module "Lexer Rules Grouper"

grouper = new Absin.LexerRules.Grouper()

test "return valid for opener or closer", ->
  ok grouper.isValid("(")
  ok grouper.isValid(")")

test "return invalid for other chars", ->
  ok !grouper.isValid("a")
  ok !grouper.isValid("'")

test "group opener", ->
  deepEqual grouper.tokenize("(thing)", 0), [[1, 0], ["GROUP_OPEN", "("]]

test "group closer", ->
  deepEqual grouper.tokenize(")thing", 2), [[1, 0], ["GROUP_CLOSE", ")"]]

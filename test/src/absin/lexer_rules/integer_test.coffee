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

module "Lexer Rules Integer"

int = new Absin.LexerRules.Integer()

test "invalid integers", ->
  ok !int.tokenize("abc")
  ok !int.tokenize("'123'")
  ok !int.tokenize('"123"')
  ok !int.tokenize("_321")

test "basic integers", ->
  deepEqual int.tokenize("0"), [[1, 0], ["INTEGER", 0]]
  deepEqual int.tokenize("123"), [[3, 0], ["INTEGER", 123]]
  deepEqual int.tokenize("5"), [[1, 0], ["INTEGER", 5]]
  deepEqual int.tokenize("1234567890"), [[10, 0], ["INTEGER", 1234567890]]

test "integers with underscore", ->
  deepEqual int.tokenize("123_456_789"), [[11, 0], ["INTEGER", 123456789]]
  deepEqual int.tokenize("123__321"), [[8, 0], ["INTEGER", 123321]]

test "hexadecimal numbers", ->
  deepEqual int.tokenize("0x"), [[2, 0], ["INTEGER", 0]]
  deepEqual int.tokenize("0x0"), [[3, 0], ["INTEGER", 0]]
  deepEqual int.tokenize("0xFF"), [[4, 0], ["INTEGER", 255]]
  deepEqual int.tokenize("0x156"), [[5, 0], ["INTEGER", 342]]

test "octal numbers", ->
  deepEqual int.tokenize("054"), [[3, 0], ["INTEGER", 44]]
  deepEqual int.tokenize("0777"), [[4, 0], ["INTEGER", 511]]

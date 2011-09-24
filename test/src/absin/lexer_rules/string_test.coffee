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

module "Lexer Rules String"

s = new Absin.LexerRules.String()

test "invalid strings", ->
  ok !s.tokenize("'invalid'")
  ok !s.tokenize("12334")

test "parsing simple string", ->
  deepEqual s.tokenize('"hello world"'), [[13, 0], ["STRING", "hello world"]]

test "parsing a blank string", ->
  deepEqual s.tokenize('""'), [[2, 0], ["STRING", ""]]

test "parsing multiline string", ->
  deepEqual s.tokenize('"hello\r\nfriend"'), [[15, 1], ["STRING", "hello\nfriend"]]
  deepEqual s.tokenize('"hello\nfriend"'), [[14, 1], ["STRING", "hello\nfriend"]]
  deepEqual s.tokenize('"hello\rfriend"'), [[14, 1], ["STRING", "hello\nfriend"]]

test "parsing string with double quote escape", ->
  deepEqual s.tokenize('"hi \\"dude\\""'), [[13, 0], ["STRING", 'hi "dude"']]

test "parsing string with newline escape", ->
  deepEqual s.tokenize('"hi\\nthere"'), [[11, 0], ["STRING", "hi\nthere"]]

test "parsing string with carrier return escape", ->
  deepEqual s.tokenize('"hi\\rthere"'), [[11, 0], ["STRING", "hi\rthere"]]

test "parsing string with tabulation escape", ->
  deepEqual s.tokenize('"hi\\tthere"'), [[11, 0], ["STRING", "hi\tthere"]]

test "parsing string with escape itself", ->
  deepEqual s.tokenize('"hi\\\\there"'), [[11, 0], ["STRING", "hi\\there"]]

test "parsing string with invalid escape", ->
  deepEqual s.tokenize('"hi\\sthere"'), [[11, 0], ["STRING", "hi\\sthere"]]

test "throw exception when find unterminated string", ->
  raises (-> s.tokenize('"unfinished'))
  raises (-> s.tokenize('"unfinished\\'))

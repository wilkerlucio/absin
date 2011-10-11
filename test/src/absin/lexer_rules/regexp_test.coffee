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

module "Lexer Rules RegExp"

r = new Absin.LexerRules.RegExp()

test "invalid regexp", ->
  ok !r.tokenize("'testing'")
  ok !r.tokenize("testing")
  ok !r.tokenize("/testing")
  ok !r.tokenize('"testing"')
  ok !r.tokenize('"testing"\n#"test"')

test "parsing simple expression", ->
  deepEqual r.tokenize('#"hello"'), [[8, 0], ["REGEXP", "/hello/"]]

test "parsing expression with modifiers", ->
  deepEqual r.tokenize('#"(?i)hello"'), [[12, 0], ["REGEXP", "/hello/i"]]

test "parsing expression with escapes", ->
  deepEqual r.tokenize('#"(?i)hel\\"lo"'), [[14, 0], ["REGEXP", "/hel\"lo/i"]]

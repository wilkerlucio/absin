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

# simple tokenizer class for testing the lexer itself
class TokenizeFixed
  constructor: (@code, @token = "FIXED") ->

  tokenize: (code) ->
    if code.slice(0, @code.length) == @code
      [[@code.length, 0], [@token, @code]]

class TokenizeFixedNil
  constructor: (@code, @token = "FIXED") ->

  tokenize: (code) ->
    if code.slice(0, @code.length) == @code
      [[@code.length, 0], null]

abLexer = -> new Absin.Lexer(rules: [[null, new TokenizeFixed("a")], [null, new TokenizeFixed("b")], [null, new TokenizeFixedNil("c")]])

module "Lexer"

test "walking through lex rules", ->
  lexer = abLexer()
  result = lexer.tokenize("acab")

  deepEqual result[0], ["FIXED", "a"]
  deepEqual result[1], ["FIXED", "a"]
  deepEqual result[2], ["FIXED", "b"]

# test "general lexing", ->
#   lexer = new Absin.Lexer()
#   result = lexer.tokenize('(puts "hello world")')
#   deepEqual result[0], ["(", "(", 0]
#   deepEqual result[1], ["IDENTIFIER", "puts", 0]
#   deepEqual result[2], ["STRING", "hello world", 0]
#   deepEqual result[3], [")", ")", 0]

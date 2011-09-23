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

class Lexer
  @defaultRules = ->
    [
      ["whitespace", new Absin.LexerRules.Whitespace()]
      ["list",       new Absin.LexerRules.List()]
      ["group",      new Absin.LexerRules.Grouper()]
      ["string",     new Absin.LexerRules.String()]
      ["regexp",     new Absin.LexerRules.RegExp()]
      ["specials",   new Absin.LexerRules.Specials()]
      ["identifier", new Absin.LexerRules.Identifier()]
    ]

  constructor: (opts = {}) ->
    @rules = opts.rules || Lexer.defaultRules()

  tokenize: (code, opts = {}) ->
    []

if require?
  module.exports.Lexer = Lexer
else
  window.Absin.Lexer = Lexer

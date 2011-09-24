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

Absin.LexerRules.String = class String
  constructor: ->
    @delim = '"'
    @lineMatcher = /^(\r\n|\n|\r)/

  tokenize: (code) ->
    if code.charAt(0) == @delim
      line   = 0
      pos    = 1
      rest   = code.slice(1)
      string = ""

      while rest.length > 0
        if match = rest.match(@lineMatcher)
          string += "\n"
          line += 1
          pos += match[0].length
          rest = rest.slice(match[0].length)
          continue

        c = rest.charAt(0)
        pos += 1

        if c == @delim
          return [[pos, line], ["STRING", string]]
        else if c == "\\"
          string += @escape(rest.charAt(1))
          pos += 1
          rest = rest.slice(2)
        else
          string += c
          rest = rest.slice(1)

      throw "unterminated string" # TODO: raise a proper exception

  escape: (char) ->
    table =
      "n": "\n"
      "t": "\t"
      "r": "\r"
      "\\": "\\"

    table[@delim] = @delim # add delimitator itself as a escapable char

    table[char] || "\\" + char

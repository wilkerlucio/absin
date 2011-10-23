# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', :input => 'src', :output => 'lib'
guard 'coffeescript', :input => 'test/src', :output => 'test/lib'
guard "js-static-require", :libs => ["lib", "test/lib"], :updates => "test/index.html"
guard "js-static-require", :libs => ["lib"], :updates => "examples/browser/lexer/index.html"

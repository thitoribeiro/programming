def foo(name, &block)
 @name = name
 block.call
end
 
foo('Thito') { puts "Hellow #{@name}" }
def foo
 if block_given?
   # Call the block
   yield
 else
   puts "Without parameter block"
 end
end
 
foo
foo { puts "With parameter block"}
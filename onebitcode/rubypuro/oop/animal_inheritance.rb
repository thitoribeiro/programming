class Animal 
 def jump
   puts 'Toing! tóim! bóim! póim!'
 end
 
 def sleep
   puts 'ZzZzzz!'
 end
end
 
class Dog < Animal
 def bark
   puts 'Au Au Au'
 end
end
 
dog = Dog.new
dog.jump
dog.sleep
dog.bark
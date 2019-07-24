require_relative 'animal'
require_relative 'dog'
require_relative 'cat'
require_relative 'rabit'

puts '--Animal--'
animal = Animal.new
animal.jump
animal.sleep
 
puts '--Dog--'
dog = Dog.new
dog.jump
dog.bark
dog.sleep

puts '--Cat--'
cat = Cat.new
cat.jump
cat.meow
cat.sleep

puts '--Rabit--'
rabit = Rabit.new
rabit.jump
rabit.gnaw
rabit.sleep
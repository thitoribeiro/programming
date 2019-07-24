print "Type the first integer number: "
# .to_i become the string in integer
number1 = gets.chomp.to_i

print "Type the second integer number: "


number2 = gets.chomp.to_i

puts 'Result of the calculation options'
result = number1 + number2
puts "Addition = #{result}"

result = number1 - number2
puts "Subtraction = #{result}"

result = number1 * number2
puts "Multiplication = #{result}"

result = number1 / number2
puts "Division = #{result}"

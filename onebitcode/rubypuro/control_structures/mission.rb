result = ''
loop do
 puts result 
 puts 'Select one of the option below'
 puts '1- Add'
 puts '2- Subtract'
 puts '3- Multiply'
 puts '4- Divide'
 puts '0- Leave'
 print 'Option: '
 
 option = gets.chomp.to_i
 
 case option 
 when 1..4
   print 'Type the first number: '
   number1 = gets.chomp.to_i
   
   print 'Type the second number: '
   number2 = gets.chomp.to_i
   case option 
   when 1
     result = "#{number1} + #{number2} = #{number1 + number2}"
   when 2
     result = "#{number1} - #{number2} = #{number1 - number2}"
   when 3
     result = "#{number1} * #{number2} = #{number1 * number2}"
   when 4
     result = "#{number1} / #{number2} = #{number1 / number2}"
   end
 when 0
   break
 else 
   result = 'Invalid option'
 end
 
 system "clear"
end
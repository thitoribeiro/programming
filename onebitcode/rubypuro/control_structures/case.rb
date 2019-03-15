puts 'Type the number of your birthday month: '
 
month = gets.chomp.to_i
 
case month 
when 1..3
  puts 'You were born in the begning of the year'
when 9..12
  puts 'You were born in the final of the year'
when 4..6
  puts 'You were born in the first half of the year'
when 7..9
  puts 'You were born in the second half of the year!'
else 
  puts 'Could not identify'
end
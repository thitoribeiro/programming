result = ''
loop do
  puts result 
  puts 'Select one of options below'
  puts '1- Describe the people age'
  puts '0- Leave'
  print 'Option: '
  
  option = gets.chomp.to_i
  
  if option == 1
    print 'Type de year of birthday: '
    year_of_birth = gets.chomp.to_i
    print 'Type the current year: '
    current_year = gets.chomp.to_i
    age = current_year - year_of_birth
    result = "Who was born in #{year_of_birth}, is #{age} years old in #{current_year}"
  elsif option == 0 
    break if option == 0
  else
    result = 'Option not found'
  end
  
  system "clear"
end
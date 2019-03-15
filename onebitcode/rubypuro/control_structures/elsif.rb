    puts "Type the day of week: "
day = gets.chomp

if day == 'Sunday' 
  lunch = 'special'
elsif day == 'Saturday'
    lunch = 'Barbecue'
elsif day == 'Monday'
    lunch = 'Fried rice'
elsif day == 'Tuesday'
    lunch = 'Kebab'
elsif day == 'Wednesday'
    lunch = 'Fish and chips'
elsif day == 'Thursday'
    lunch = 'Mc Donalds'
else
  lunch = 'Noodles'
end
 
puts "Lunch is #{lunch} today"
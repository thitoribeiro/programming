array = [1, 2, 3, 4]
 

puts "\n Executing .map multiplying each item for 2"

new_array = array.map do |a| 
             a * 2
           end
 
puts "\n Original array"
puts " #{array}"
 
puts "\n New Array"
puts " #{new_array}"
 
puts "\n Executing .map! multiplying each item por 2"

array.map! do |a| 
 a * 2
end
 
puts "\n Original array"
puts " #{array}"
puts ''
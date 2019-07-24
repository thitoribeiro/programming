puts '--Shopping List--'

file = File.open('shopping-list.txt')

file.each do |line|
    puts line
end
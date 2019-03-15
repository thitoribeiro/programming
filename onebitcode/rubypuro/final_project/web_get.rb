require 'net/http'

example = Net::HTTP.get('example.com', '/index.html')

File.open('exmple.html', 'w') do |line|
    line.puts(example)
end
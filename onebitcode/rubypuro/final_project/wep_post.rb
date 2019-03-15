require 'net/http'

req = Net::HTTP::Post.new("/api/users")
# https calls
req.set_form_data({name:'Mario', job:'Plumber'})

response = Net::HTTP.start('reqres.in', use_ssl: true) do |https|
    https.request(req)
end

puts response.code
puts response.body
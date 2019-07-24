require 'net/http'

https = Net::HTTP.new('reqres.in', 443)
# https calls
https.use_ssl = true

response = https.get("/api/users")
# status code
puts response.code
# status message
puts response.message
# body (json)
puts response.body
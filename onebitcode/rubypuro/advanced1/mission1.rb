def capitalize_name(lambda_capitalize)
 lambda_capitalize.call('Thito')
 lambda_capitalize.call('Rodrigo')
end
 
lambda_capitalize = -> (name) { puts name.capitalize }
 
capitalize_name(lambda_capitalize)
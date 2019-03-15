require_relative 'product'
require_relative 'supermarket'
 
product = Product.new
product.name = 'Tomato'
product.price = 2.50
 
Supermarket.new(product.name, product.price).buy
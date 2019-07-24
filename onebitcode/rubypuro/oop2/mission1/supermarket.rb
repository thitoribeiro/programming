class Supermarket
 def initialize(product, price)
   @product = product
   @price = price
 end
 
 def buy
   puts "You bought the product #{@product} costing #{@price}"
 end
end
require 'os'
 
def my_os
 if OS.windows?
 
   "Windows"
 
 elsif OS.linux?
 
   "Linux"
 
 elsif OS.mac?
 
   "Osx"
 
 else
 
   "Not found" 
 end
 
end
 
puts "My device has #{OS.cpu_count} color, is #{OS.bits} bits and the OS is #{my_os}"
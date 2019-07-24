class Instrument
    def write
      puts 'Writing'
    end
  end
   
  class Pencil < Instrument
    def write
      puts 'Writing with pencil'
    end
  end
   
  class Pen < Instrument
    def write
      puts 'Writing with pen'
    end
  end
   
   
  instruments = [Pencil.new, Pen.new]
  # Calling write method for all classes
  instruments.each do |instrument|
    instrument.write
  end
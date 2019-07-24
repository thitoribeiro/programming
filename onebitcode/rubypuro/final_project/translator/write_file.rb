class WriteFile
    def initialize(traduzir)
      @traduzir = traduzir
    end
  
    def save
      time = Time.now
      
      file = File.open('traducao.txt', 'a')
      file.puts "---------------------------------"
      file.puts ''
      file.puts "    Data: #{time.rfc2822}"
      file.puts "    De: #{@traduzir.idioma_origem}, Para: #{@traduzir.idioma_traducao}."
      file.puts "    Frase original: #{@traduzir.frase_origem}"
      file.puts "    Tradução: #{@traduzir.frase_traducao}"
      file.puts ''
    end
  end
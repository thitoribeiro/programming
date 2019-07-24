require_relative 'translate'
require_relative 'write_file'

def menu 
  traduzir = Translate.new
  
  puts "Digite a frase que deseja traduzir."
  traduzir.frase_origem = gets.chomp
  puts "Digite o idioma original. (pt, en, es, ja, de, la)"
  traduzir.idioma_origem = gets.chomp
  puts "Selecione o idioma para tradução. (pt, en, es, ja, de, la)"
  traduzir.idioma_traducao = gets.chomp

  traduzir.frase_traducao = traduzir.translate
  puts traduzir.frase_traducao

  WriteFile.new(traduzir).save
end

menu
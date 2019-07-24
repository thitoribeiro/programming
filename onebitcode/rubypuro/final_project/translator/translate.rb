require 'rest-client'

class Translate
  attr_accessor :frase_origem, :frase_traducao, :idioma_origem, :idioma_traducao

  def translate
    response = RestClient.get('https://translate.yandex.net/api/v1.5/tr.json/translate', params: {
      key: '<trnsl.1.1.20190222T154035Z.2cff5fbef09f2795.2fdd4d67d43e91e2b4733cdfc05bb92eb2ac6d6d>',
      text: frase_origem,
      lang: "#{idioma_origem}-#{idioma_traducao}"
    })

    frase_traducao = eval(response.body)[:text].join.to_s
  end
end
class SalutationController < ApplicationController
    def main
        soma_temp = 0
        contador = 0
        ultimo_registro = entrada['measurements'][contador]

        for entrada['measurements'] in entrada['measurements'] do
            registro_atual = entrada['measurements'][contador]

            soma_temp += registro_atual['temperature']
            contador += 1
            temp_med = soma_temp / contador

            if ultimo_registro['date_hour'] < registro_atual['date_hour']
                ultimo_registro = registro_atual
            end
        end

        if ultimo_registro['temperature'] > entrada['temperature_min'] && ultimo_registro['temperature'] > entrada['temperature_min']
            @dentro_faixa = 'Dentro da faixa'
        else
            @dentro_faixa = 'Fora da faixa'
        end

        @ultimo_registro = ultimo_registro['temperature']
        @temp_med = temp_med.round(1)
        @nome = entrada['label']
        @temp_max = entrada['temperature_max']
        @temp_min = entrada['temperature_min']
    end

    def entrada
    require 'json'
    file = File.read('sensor.json')
    entrada = JSON.parse(file)
    end
end

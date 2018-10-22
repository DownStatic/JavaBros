class Api::V1::PersonasController < ApplicationController

    def index
      @personas = Persona.all
      render json: @personas, status: :ok
    end

    def show
      @persona = Persona.find_by(id: params[:id])
      render json: @persona, status: :ok
    end

    private

    def get_persona
    end

    def persona_params
    end

end

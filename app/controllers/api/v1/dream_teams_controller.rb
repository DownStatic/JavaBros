class Api::V1::DreamTeamsController < ApplicationController

  def index
    @DTs = DreamTeam.all
    render json: @DTs, status: :ok
  end

  def show
    @DT = DreamTeam.find_by(id: params[:id])
    render json: @DT, status: :ok
  end

  private

  def get_dt
  end

  def dt_params
  end

end

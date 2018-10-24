class Api::V1::DreamTeamsController < ApplicationController

  def index
    @DTs = DreamTeam.all
    @DTs = @DTs.map do |team|
      team.overall_power = team.calculatePower
      team
    end
    @DTs.each{|team| team.save}
    render json: @DTs, status: :ok
  end

  def show
    @DT = DreamTeam.find_by(id: params[:id])
    render json: @DT, status: :ok
  end

  def create
    @DT = DreamTeam.new(Name: dt_params[0])
    @leader = Persona.find_by(Name: dt_params[1])
    @member2 = Persona.find_by(Name: dt_params[2])
    @member3 = Persona.find_by(Name: dt_params[3])
    @member4 = Persona.find_by(Name: dt_params[4])
    @member5 = Persona.find_by(Name: dt_params[5])
    @DT.leader = @leader
    @DT.personas << @leader
    @DT.personas << @member2
    @DT.personas << @member3
    @DT.personas << @member4
    @DT.personas << @member5
    @DT.Alignment = @leader.Alignment
    @DT.overall_power = @DT.calculatePower
    if @DT.save
      @DTs = DreamTeam.all
      render json: @DTs, status: :created
    else
      @DTs = DreamTeam.all
      render json: @DTs, status: :rejected
    end
  end

  def update
  end

  def destroy
  end

  private

  def get_dt
  end

  def dt_params
    params.require([:Name,:Leader,:Member2,:Member3,:Member4,:Member5])
  end

end

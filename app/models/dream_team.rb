class DreamTeam < ApplicationRecord
  has_many :rosters, dependent: :destroy
  has_many :personas, through: :rosters
  belongs_to :leader, class_name: "Persona"
  validates :Name, uniqueness: true

  def calculatePower
    self.personas.map{|p| p.Power}.reduce(:+)
  end

end

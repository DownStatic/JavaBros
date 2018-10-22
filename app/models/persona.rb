class Persona < ApplicationRecord
  has_many :rosters
  has_many :dream_teams, through: :rosters
  validates :Name, uniqueness: true
end

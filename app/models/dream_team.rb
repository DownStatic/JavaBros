class DreamTeam < ApplicationRecord
  has_many :rosters
  has_many :personas, through: :rosters
  validates :Name, uniqueness: true
end

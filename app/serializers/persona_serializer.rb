class PersonaSerializer < ActiveModel::Serializer
  has_many :rosters
  has_many :dream_teams, through: :rosters
  attributes :id, :Name, :Origin, :Alignment, :Role, :Image, :Leader, :Power
end

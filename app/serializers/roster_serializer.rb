class RosterSerializer < ActiveModel::Serializer
  belongs_to :persona
  belongs_to :dream_team
end

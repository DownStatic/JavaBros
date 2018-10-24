class DreamTeamSerializer < ActiveModel::Serializer
  has_many :rosters
  has_many :personas, through: :rosters
  belongs_to :leader, class_name: "Persona"
  attributes :id, :Name, :Banner, :Alignment, :overall_power, :leader_id
end

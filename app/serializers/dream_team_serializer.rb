class DreamTeamSerializer < ActiveModel::Serializer
  has_many :rosters
  has_many :personas, through: :rosters
  attributes :id, :Name, :Banner, :Alignment
end

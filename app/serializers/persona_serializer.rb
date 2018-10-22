class PersonaSerializer < ActiveModel::Serializer
  attributes :id, :Name, :Origin, :Alignment, :Role, :Image, :Leader, :Power
end

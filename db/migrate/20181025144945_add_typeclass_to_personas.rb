class AddTypeclassToPersonas < ActiveRecord::Migration[5.2]
  def change
    add_column :personas, :typeclass, :string
  end
end

class CreatePersonas < ActiveRecord::Migration[5.2]
  def change
    create_table :personas do |t|
      t.string :Name
      t.string :Origin
      t.string :Alignment
      t.string :Role
      t.string :Image
      t.boolean :Leader
      t.integer :Power

      t.timestamps
    end
  end
end

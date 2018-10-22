class CreateRosters < ActiveRecord::Migration[5.2]
  def change
    create_table :rosters do |t|
      t.integer :DT_id
      t.integer :P_id

      t.timestamps
    end
  end
end

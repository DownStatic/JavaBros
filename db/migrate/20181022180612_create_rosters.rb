class CreateRosters < ActiveRecord::Migration[5.2]
  def change
    create_table :rosters do |t|
      t.integer :dream_team_id
      t.integer :persona_id

      t.timestamps
    end
  end
end

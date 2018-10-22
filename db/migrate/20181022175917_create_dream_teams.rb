class CreateDreamTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :dream_teams do |t|
      t.string :Name
      t.string :Banner
      t.string :Alignment

      t.timestamps
    end
  end
end

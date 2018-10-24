class AddLeaderIdToDreamTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :dream_teams, :leader_id, :integer
  end
end

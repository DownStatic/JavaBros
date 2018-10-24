class AddOverallPowerToDreamTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :dream_teams, :overall_power, :integer
  end
end

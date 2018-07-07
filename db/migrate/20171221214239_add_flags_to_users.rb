class AddFlagsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :us_based, :boolean
    add_column :users, :accredited, :boolean
  end
end

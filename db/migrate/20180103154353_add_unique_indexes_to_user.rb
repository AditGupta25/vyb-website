class AddUniqueIndexesToUser < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :referral_id, unique: true
    add_index :users, :eth_address, unique: true
  end
end

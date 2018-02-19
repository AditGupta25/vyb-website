class RemoveUniqueConstraintOnEthAddressIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, :eth_address
    add_index :users, :eth_address, unique: false
  end
end

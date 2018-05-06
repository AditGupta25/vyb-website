class AddReferralAttributesToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :referral_id, :string
    add_column :users, :eth_address, :string
    add_column :users, :referrer_id, :string
  end
end

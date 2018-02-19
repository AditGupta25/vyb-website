class AddTermsAgreedToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :terms_agreed, :boolean
    add_column :users, :terms_agreed_at, :timestamp
  end
end

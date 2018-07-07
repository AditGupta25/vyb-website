require 'csv'
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_secure_token :referral_id

  def valid_investor?
    return false unless terms_agreed?
    us_based? ? accredited? : true
  end

  def first_referred_login?
    referrer_id.present? && eth_address.nil? && update(eth_address: '')
  end

  class << self
    def email_csv
      CSV.generate(headers: true) do |csv|
        csv << %w{email}
        all.each do |user|
          csv << user.attributes.values_at(*%w{email})
        end
      end
    end
  end
end

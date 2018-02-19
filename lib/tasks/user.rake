namespace :user do
  task generate_referral_id: :environment do
    ActiveRecord::Base.transaction do
      User.where(referral_id: nil).each(&:regenerate_referral_id)
    end
  end
end
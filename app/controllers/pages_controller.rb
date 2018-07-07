class PagesController < ApplicationController
  before_action :authenticate_user!, :only => [:ico]
  before_action :set_random_guests

  def home
  end

  def privacy
  end

  def road_map
  end

  def faq

  end

  def login
    render layout: 'blank'
  end

  def ico
    # (redirect_to accredited_form_path and return) unless current_user.valid_investor?
    (redirect_to accredited_form_path and return) unless current_user.terms_agreed?
    redirect_to eth_address_form_path if current_user.first_referred_login?
  end

  def accredited_form
  end

  def accredited_form_post
    us_based = params[:us_based] == 'yes'
    accredited = params[:accredited] == 'yes'
    terms = params[:terms] == 'yes'
    current_user.update(us_based: us_based, accredited: accredited, terms_agreed: terms, terms_agreed_at: Time.now)

    # unless current_user.valid_investor?
    unless current_user.terms_agreed?
      flash[:error] = '''
        All investors must accept the terms of service.<br/>
        At this time we are only able to offer the ICO to US based investors if they are accredited.<br/>
        We apologize for this inconvenience.
      '''

      redirect_to accredited_form_path and return
    end

    redirect_to ico_path
  end

  def referrals
    # (redirect_to ico_path and return) unless current_user.valid_investor?
  end

  def retrieve_referral_link
    current_user.update(eth_address: params[:user][:eth_address])
    redirect_to referral_link_path
  end

  def referral_link
  end

  def eth_address_form
  end

  def eth_address_form_submit
    current_user.update(eth_address: params[:user][:eth_address])
    redirect_to ico_path
  end

  def admin
    redirect_to ico_path unless current_user.admin?

    @user_info = User.pluck(:email, :sign_in_count, :last_sign_in_at)
  end

  def email_csv
    if current_user.admin?
      respond_to do |format|
        format.csv { send_data User.email_csv }
      end
    else
      head :forbidden
    end
  end

  def set_random_guests
    if session[:random_guests].nil?
      session[:random_guests] = rand(8..22)
      session[:guests_set_at] = Time.now
    elsif session[:guests_set_at].present?
      if Time.now > session[:guests_set_at].to_datetime + 30.minutes
        session[:random_guests] = rand(8..22)
        session[:guests_set_at] = Time.now
      end
    end
  end

end

class RegistrationsController < Devise::RegistrationsController

  def new
    @referrer_id = params[:ref_id]
    super
  end

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :referrer_id)
  end

end
Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#home'
  get 'privacy', to: 'pages#privacy', as: 'privacy'

  get 'roadmap', to: 'pages#road_map', as: 'road_map'
  get 'faq', to: 'pages#faq', as: 'faq'

  get 'login', to: 'pages#login', as: 'login'
  get 'ico', to: 'pages#ico', as: 'ico'
  get 'accredited_form', to: 'pages#accredited_form', as: 'accredited_form'
  get 'not_accredited', to: 'pages#not_accredited', as: 'not_accredited'
  post 'accredited_form_post', to: 'pages#accredited_form_post', as: 'accredited_form_post'

  get 'referrals', to: 'pages#referrals', as: 'referrals'
  get 'referral_link', to: 'pages#referral_link', as: 'referral_link'
  patch 'retrieve_referral_link', to: 'pages#retrieve_referral_link', as: 'retrieve_referral_link'

  get 'eth_address_form', to: 'pages#eth_address_form', as: 'eth_address_form'
  patch 'eth_address_form_submit', to: 'pages#eth_address_form_submit', as: 'eth_address_form_submit'

  get 'admin', to: 'pages#admin', as: 'admin'
end

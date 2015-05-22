Rails.application.routes.draw do

  root 'application#index'
  
  namespace :api, defaults: {format: 'json'} do
    resources :questions, only: [:index]    
  end

  get '*path' => 'application#index'
  
end

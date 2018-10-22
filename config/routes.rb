Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :dream_teams, only: [:index, :show]
      resources :personas, only: [:index, :show]
    end
  end
end

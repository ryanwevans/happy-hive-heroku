Rails.application.routes.draw do

  namespace :api do
    resources :chores, except: [:new, :edit]

    resources :rewards, except: [:new, :edit]

    resources :achievers, except: [:new, :edit]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

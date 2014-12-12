Rails.application.routes.draw do
  root :to => "static_pages#home"
  
  namespace :api, defaults: { format: :json } do
    resources :shows, only: [:index, :show]
  end

end

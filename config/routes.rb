Rails.application.routes.draw do
  namespace :api do
    resources :pages
  end
end

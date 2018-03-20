Rails.application.routes.draw do
  namespace :api do
    resources :pages
  end

  get '*path', to: 'pages#index'
end

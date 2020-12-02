Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :moods, only: :index
  resources :thoughts

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  put '/moods/:mood_id/thoughts/:id', to: 'thoughts#add_mood'
end

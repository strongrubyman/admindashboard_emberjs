Rails.application.routes.draw do
	devise_for :users, controllers: { sessions: 'sessions' }

	namespace :api, defaults: {format: 'json'} do
		resources :users
		resources :products
		resources :transactions
		resources :inventories

		post 'imports/transactions/:id', to: 'imports#transactions'
		post 'imports/products/:id', to: 'imports#products'
	end

	root 'application#index', as: 'application'
	get '/*path', to: 'application#index'
end

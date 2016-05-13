module Api
	class InventoriesController < ApiController
		include CalculateDatePeriod

		def index
			dates = get_date_period

			user_id = params[:user_id]

			render json: Inventory.between_ship_dates(dates[:wk_begin], dates[:wk_end]).by_user(user_id)
		end
	end
end

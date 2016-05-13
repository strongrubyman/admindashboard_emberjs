module Api
	class TransactionsController < ApiController
		include CalculateDatePeriod

		def index
			dates = get_date_period

			user_id = params[:user_id]

				render json: Transaction.between_ship_dates(dates[:wk_begin], dates[:wk_end]).by_user(user_id)
		end
	end
end

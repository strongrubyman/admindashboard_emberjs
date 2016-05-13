module Api
	class ImportsController < ApiController

		def transactions
			date = Time.zone.now.to_date.beginning_of_week.next_day(4)
			@import = TransactionImport.new(file: params[:imports], date: date, brewery_id: params[:id])
			make_response
		end

		def products
			date = Time.zone.now.to_date.beginning_of_week.next_day(4)
			@import = ProductImport.new(file: params[:imports], date: date, brewery_id: params[:id])
			make_response
		end

		private

		def make_response
			begin
				imported_records = @import.imported_records

				if imported_records.each(&:save)
					render json: {}, status: :created
				else
					logger.info("errors: #{imported_records.errors.full_messages}")

					render json: { errors: imported_records.errors.full_messages }, status: :unprocessable_entity
				end
			rescue Exception => err
				Rails.logger.info(err.backtrace.join("\n"))
				Rails.logger.info("Error!: #{err}")
				render json: { errors: err }, status: :unprocessable_entity
			end
		end

	end
end

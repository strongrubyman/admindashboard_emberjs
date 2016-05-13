module Api
	class UsersController < ApiController
		before_action :set_user, only: [:show, :destroy, :update]

		# GET /users
		def index
			render json: User.users
		end

		# GET /users/1
		def show
			render json: @user
		end

		# POST /users
		def create
			@user = User.new(user_params)

			if @user.save
				render json: @user, status: :created
			else
				render json: { errors: @user.errors }, status: :unprocessable_entity
			end
		end

		def destroy
			if current_user.is_admin
				if @user.destroy
					head :no_content
				else
					render json: { errors: @user.errors }, status: :unprocessable_entity
				end
			end
		end

		def update
			if current_user.is_admin
				if @user.update(user_params)
					respond_with @user, status: :ok
				else
					render json: { errors: @user.errors }, status: :unprocessable_entity
				end
			end
		end

		private

		# Use callbacks to share common setup or constraints between actions.
		def set_user
			@user = User.find(params[:id])
		end

		# Never trust parameters from the scary internet, only allow the white list through.
		def user_params
			params.require(:user).permit(
				:email,
				:role,
				:name,
				:password,
				:phone_number,
				:contact_address1,
				:contact_address2,
				:contact_city,
				:contact_state,
				:contact_zip,
				:parent_id
			)
		end
	end
end

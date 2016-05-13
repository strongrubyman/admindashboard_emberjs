class SessionsController < Devise::SessionsController
  respond_to :json

  # def create
  #   super do |user|
  #     data = {
  #       token:      user.authentication_token,
  #       user_email: user.email
  #     }
  #     render json: data, status: 201 and return
  #   end
  # end

  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    data = {
      token: self.resource.authentication_token,
      email: self.resource.email,
      id: self.resource.id,
      role: self.resource.role,
      parent_id: self.resource.parent_id
    }
    render json: data, status: 201
  end
end

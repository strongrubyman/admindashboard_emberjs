# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  authentication_token   :string
#  role                   :string
#  name                   :string
#  phone_number           :string
#  contact_address1       :string
#  contact_address2       :string
#  contact_city           :string
#  contact_state          :string
#  contact_zip            :string
#  parent_id              :integer
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_save :ensure_authentication_token

  has_many :children, through: :user_relations
  has_one :parent, through: :user_relations

  has_many :breweries, through: :brewery_wholesaler_links
  has_many :wholesalers, through: :brewery_wholesaler_links

  scope :users, -> () { where.not(role: :admin) }

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  def is_admin
    self.role == 'admin'
  end

  def is_manager
    self.role == 'manager'
  end

  def is_brewery
    self.role == 'brewery'
  end

  def is_wholesaler
    self.role == 'wholesaler'
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end
end

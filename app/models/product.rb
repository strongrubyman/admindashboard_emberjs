# == Schema Information
#
# Table name: products
#
#  id                :integer          not null, primary key
#  gpa_id            :integer
#  brand             :string
#  pkg               :string
#  size              :string
#  group             :string
#  brew_id           :string
#  oz                :float
#  pallet_qty        :integer
#  layer_qty         :integer
#  layers_per_pallet :integer
#  status            :string
#  pdcn              :string
#  brewery_id        :integer
#  ship_date         :date
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Product < ActiveRecord::Base
  scope :between_ship_dates, ->(wk_begin, wk_end) { where(ship_date: wk_begin..wk_end) }
  scope :by_user, ->(user_id) { where(brewery_id: user_id) }
end

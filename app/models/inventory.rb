# == Schema Information
#
# Table name: inventories
#
#  id              :integer          not null, primary key
#  gpa_id          :integer
#  pdcn            :string
#  brand           :string
#  size            :string
#  total_inventory :integer
#  brewery_id      :integer
#  ship_date       :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Inventory < ActiveRecord::Base
  scope :between_ship_dates, ->(wk_begin, wk_end) { where(ship_date: wk_begin..wk_end) }
  scope :by_user, ->(user_id) { where(brewery_id: user_id) }
end

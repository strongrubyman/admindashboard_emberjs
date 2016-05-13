# == Schema Information
#
# Table name: transactions
#
#  id                  :integer          not null, primary key
#  wholesaler          :string
#  wholesaler_id       :integer
#  brewery_id          :integer
#  gpa_id              :integer
#  brand               :string
#  size                :string
#  on_hand_begin       :string
#  sales_rate_per_day  :float
#  days_on_hand        :string
#  inbound_units_t0    :integer
#  inbound_units_t1    :integer
#  pallets_shipping_t1 :float
#  days_shipping_t1    :float
#  net_days_t1         :float
#  po_number           :string
#  units_packaging     :integer
#  note                :text
#  ship_date           :date
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Transaction < ActiveRecord::Base
  scope :between_ship_dates, ->(wk_begin, wk_end) { where(ship_date: wk_begin..wk_end) }
  scope :by_user, ->(user_id) { where(brewery_id: user_id) }
end

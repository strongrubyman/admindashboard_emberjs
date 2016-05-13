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

class TransactionSerializer < ActiveModel::Serializer
  attributes :id,
             :wholesaler,
             :gpa_id,
             :brand,
             :size,
             :on_hand_begin,
             :sales_rate_per_day,
             :days_on_hand,
             :inbound_units_t0,
             :inbound_units_t1,
             :pallets_shipping_t1,
             :days_shipping_t1,
             :net_days_t1,
             :po_number,
             :note,
             :ship_date,
             :units_packaging
end

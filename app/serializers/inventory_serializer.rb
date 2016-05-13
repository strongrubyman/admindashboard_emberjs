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

class InventorySerializer < ActiveModel::Serializer
  attributes :id,
             :gpa_id,
             :pdcn,
             :brand,
             :size,
             :total_inventory,
             :brewery_id,
             :ship_date
end

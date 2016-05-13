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

class ProductSerializer < ActiveModel::Serializer
  attributes :id,
             :gpa_id,
             :brand,
             :pkg,
             :size,
             :group,
             :brew_id,
             :oz,
             :pallet_qty,
             :layer_qty,
             :layers_per_pallet,
             :status,
             :pdcn,
             :brewery_id,
             :ship_date
end

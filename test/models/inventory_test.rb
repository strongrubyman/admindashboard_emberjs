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

require 'test_helper'

class InventoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

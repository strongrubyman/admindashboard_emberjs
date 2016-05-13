# == Schema Information
#
# Table name: brewery_wholesaler_links
#
#  id            :integer          not null, primary key
#  brewery_id    :integer
#  wholesaler_id :integer
#

class BreweryWholesalerLink < ActiveRecord::Base
  belongs_to :brewery, foreign_key: :brewery_id, class_name: 'User'
  belongs_to :wholesaler, foreign_key: :wholesaler_id, class_name: 'User'
end

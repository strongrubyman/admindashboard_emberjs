class CreateBreweryWholesalerLinks < ActiveRecord::Migration
  def change
    create_table :brewery_wholesaler_links do |t|
      t.integer :brewery_id, index: true
      t.integer :wholesaler_id, index: true
    end
  end
end

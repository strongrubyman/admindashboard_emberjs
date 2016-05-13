class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :gpa_id
      t.string :brand
      t.string :pkg
      t.string :size
      t.string :group
      t.string :brew_id
      t.float :oz
      t.integer :pallet_qty
      t.integer :layer_qty
      t.integer :layers_per_pallet
      t.string :status
      t.string :pdcn
      t.integer :brewery_id
      t.date :ship_date

      t.timestamps null: false
    end
  end
end

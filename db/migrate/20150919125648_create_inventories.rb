class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.integer :gpa_id
      t.string :pdcn
      t.string :brand
      t.string :size
      t.integer :total_inventory
      t.integer :brewery_id
      t.date :ship_date

      t.timestamps null: false
    end
  end
end

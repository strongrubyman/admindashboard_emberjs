class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.string :wholesaler
      t.integer :wholesaler_id
      t.integer :brewery_id
      t.integer :gpa_id
      t.string :brand
      t.string :size
      t.string :on_hand_begin
      t.float :sales_rate_per_day
      t.string :days_on_hand
      t.integer :inbound_units_t0
      t.integer :inbound_units_t1
      t.float :pallets_shipping_t1
      t.float :days_shipping_t1
      t.float :net_days_t1
      t.string :po_number
      t.integer :units_packaging
      t.text :note
      t.date :ship_date

      t.timestamps null: false
    end
  end
end

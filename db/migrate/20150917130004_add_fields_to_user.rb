class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :role, :string
    add_column :users, :name, :string
    add_column :users, :phone_number, :string
    add_column :users, :contact_address1, :string
    add_column :users, :contact_address2, :string
    add_column :users, :contact_city, :string
    add_column :users, :contact_state, :string
    add_column :users, :contact_zip, :string
  end
end

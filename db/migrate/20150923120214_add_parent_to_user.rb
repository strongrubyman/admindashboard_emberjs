class AddParentToUser < ActiveRecord::Migration
  def change
    add_column :users, :parent_id, :integer, index: true
  end
end

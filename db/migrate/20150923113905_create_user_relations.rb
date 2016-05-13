class CreateUserRelations < ActiveRecord::Migration
  def change
    create_table :user_relations do |t|
      t.integer :parent_id, index: true
      t.integer :child_id, index: true
    end
  end
end

# == Schema Information
#
# Table name: user_relations
#
#  id        :integer          not null, primary key
#  parent_id :integer
#  child_id  :integer
#

class UserRelation < ActiveRecord::Base
  belongs_to :parent, foreign_key: :parent_id, class_name: 'User'
  belongs_to :child, foreign_key: :child_id, class_name: 'User'
end

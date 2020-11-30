class Thought < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :moods
end

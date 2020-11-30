class CreateJoinTableThoughtsMoods < ActiveRecord::Migration[6.0]
  def change
    create_join_table :thoughts, :moods do |t|
      # t.index [:thought_id, :mood_id]
      # t.index [:mood_id, :thought_id]
    end
  end
end

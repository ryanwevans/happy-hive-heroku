class CreateAcheivers < ActiveRecord::Migration[5.2]
  def change
    create_table :acheivers do |t|
      t.string :name
      t.integer :points_earned

      t.timestamps
    end
  end
end

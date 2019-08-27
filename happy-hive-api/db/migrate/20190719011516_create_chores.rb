class CreateChores < ActiveRecord::Migration[5.2]
  def change
    create_table :chores do |t|
      t.string :name
      t.text :description
      t.integer :points_value
      t.string :assigned_to
      t.boolean :complete

      t.timestamps
    end
  end
end

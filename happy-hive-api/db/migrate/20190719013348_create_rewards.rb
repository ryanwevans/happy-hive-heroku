class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string :name
      t.text :description
      t.string :img_url
      t.integer :value
      t.boolean :claimed
      t.string :claimed_by

      t.timestamps
    end
  end
end

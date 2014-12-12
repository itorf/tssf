class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :date, null: :false
      t.string :venue, null: :false
      t.string :city, null: :false
      t.string :state, null: :false
      t.string :tickets_url

      t.timestamps
    end
  end
end

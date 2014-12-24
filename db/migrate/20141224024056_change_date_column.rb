class ChangeDateColumn < ActiveRecord::Migration
  def change
    remove_column :shows, :date
    
    add_column :shows, :date, :date
  end
end

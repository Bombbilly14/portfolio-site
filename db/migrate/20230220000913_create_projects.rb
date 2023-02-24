class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :desc
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end

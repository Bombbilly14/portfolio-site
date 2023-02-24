class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :name
      t.string :desc
      t.string :content

      t.timestamps
    end
  end
end

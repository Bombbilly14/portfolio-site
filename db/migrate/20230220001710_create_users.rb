class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :desc
      t.string :location
      t.string :email
      t.string :phone
      t.string :social

      t.timestamps
    end
  end
end

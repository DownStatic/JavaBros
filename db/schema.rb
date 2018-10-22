# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_22_180612) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dream_teams", force: :cascade do |t|
    t.string "Name"
    t.string "Banner"
    t.string "Alignment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "personas", force: :cascade do |t|
    t.string "Name"
    t.string "Origin"
    t.string "Alignment"
    t.string "Role"
    t.string "Image"
    t.boolean "Leader"
    t.integer "Power"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rosters", force: :cascade do |t|
    t.integer "DT_id"
    t.integer "P_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

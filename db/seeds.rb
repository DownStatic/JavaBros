# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Making teams..."
DreamTeam.create(Name: "The Chosen Ones", Banner: "token_url", Alignment: "LG")
DreamTeam.create(Name: "BigBads", Banner: "scary_url", Alignment: "NE")

puts "Integrating personas..."
Persona.create(Name: "Mario", Origin: "Mario", Alignment: "NG", Role: "Bruiser", Image: "mario_url", Leader: true, Power: 99)
Persona.create(Name: "Luigi", Origin: "Mario", Alignment: "CG", Role: "Bruiser", Image: "luigi_url", Leader: false, Power: 98)
Persona.create(Name: "Cecil", Origin: "Final Fantasy", Alignment: "NG", Role: "Tank", Image: "cecil_url", Leader: true, Power: 123)
Persona.create(Name: "Samus", Origin: "Metroid", Alignment: "TN", Role: "Damage", Image: "samus_url", Leader: false, Power: 173)
Persona.create(Name: "Handsome Jack", Origin: "Borderlands", Alignment: "NE", Role: "Damage", Image: "jack_url", Leader: true, Power: 400)
Persona.create(Name: "Gary Oak", Origin: "Pokemon", Alignment: "CN", Role: "Support", Image: "garyoak_url", Leader: false, Power: 55)
Persona.create(Name: "Dante", Origin: "Devil May Cry", Alignment: "CN", Role: "Bruiser", Image: "dante_url", Leader: false, Power: 275)
Persona.create(Name: "Booker Dewitt", Origin: "BioShock", Alignment: "NG", Role: "Damage", Image: "booker_url", Leader: false, Power: 399)

puts "Assigning teams..."
Roster.create(dream_team_id: 1, persona_id: 1)
Roster.create(dream_team_id: 1, persona_id: 2)
Roster.create(dream_team_id: 1, persona_id: 5)
Roster.create(dream_team_id: 1, persona_id: 6)
Roster.create(dream_team_id: 1, persona_id: 7)
Roster.create(dream_team_id: 2, persona_id: 3)
Roster.create(dream_team_id: 2, persona_id: 8)
Roster.create(dream_team_id: 2, persona_id: 4)
Roster.create(dream_team_id: 2, persona_id: 6)
Roster.create(dream_team_id: 2, persona_id: 7)

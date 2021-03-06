puts "Making teams..."
DreamTeam.create(Name: "The Chosen Ones", Banner: "token_url", Alignment: "LG", leader_id: 1)
DreamTeam.create(Name: "BigBads", Banner: "scary_url", Alignment: "NE", leader_id: 3)
DreamTeam.create(Name: "SNEStle Crunch", Banner: "SNES_logo", Alignment: "TN", leader_id: 24)
DreamTeam.create(Name: "Bad Boys", Banner: "badboys_logo", Alignment: "CN", leader_id: 49)
DreamTeam.create(Name: "Femmes Fatales", Banner: "gaga_url", Alignment: "CG", leader_id: 32)
DreamTeam.create(Name: "Final Fantasy Filtered", Banner: "ff_url", Alignment: "NG", leader_id: 3)
DreamTeam.create(Name: "Best Bros", Banner: "bro_url", Alignment: "CG", leader_id: 29)
DreamTeam.create(Name: "Zero Frame Fighters", Banner: "guilty_gear_url", Alignment: "LN", leader_id: 30)

puts "Integrating personas..."
Persona.create(Name: "Mario", Origin: "Mario", Alignment: "NG", Role: "Bruiser", Image: "https://i.stack.imgur.com/9dc0P.jpg", Leader: true, Power: 399)
Persona.create(Name: "Luigi", Origin: "Mario", Alignment: "CG", Role: "Bruiser", Image: "https://i.kinja-img.com/gawker-media/image/upload/s--pybOtTGX--/c_fit,f_auto,fl_progressive,q_80,w_320/p5onht9mlgdkj0yvnjao.jpg", Leader: false, Power: 398)
Persona.create(Name: "Cecil Harvey", Origin: "Final Fantasy", Alignment: "NG", Role: "Tank", Image: "https://orig00.deviantart.net/4f6a/f/2011/153/e/f/cecil_harvey_dark_knight_01_by_nealbombad-d2yru0y.jpg", Leader: true, Power: 423)
Persona.create(Name: "Samus Aran", Origin: "Metroid", Alignment: "TN", Role: "Damage", Image: "https://files.gamebanana.com/img/ico/sprays/samus_7.png", Leader: false, Power: 373)
Persona.create(Name: "Handsome Jack", Origin: "Borderlands", Alignment: "NE", Role: "Damage", Image: "https://ewedit.files.wordpress.com/2015/06/handsome-jack-02.jpg?w=450", Leader: true, Power: 400)
Persona.create(Name: "Gary Oak", Origin: "Pokemon", Alignment: "CN", Role: "Support", Image: "https://static.comicvine.com/uploads/scale_small/11/114183/5216645-419px-gary_oak_bw.png", Leader: false, Power: 255)
Persona.create(Name: "Dante", Origin: "Devil May Cry", Alignment: "CN", Role: "Bruiser", Image: "https://zombiesruineverything.files.wordpress.com/2013/09/dmc2.jpg?w=450&h=253", Leader: false, Power: 275)
Persona.create(Name: "Booker Dewitt", Origin: "BioShock", Alignment: "NG", Role: "Damage", Image: "https://static.comicvine.com/uploads/scale_small/10/103617/3026588-bioshockinfiniteartworks7.jpg", Leader: false, Power: 399)
Persona.create(Name: "Sephiroth", Origin: "Final Fantasy", Alignment: "NE", Role: "Bruiser", Image: "https://sociorocketnewsen.files.wordpress.com/2016/12/ring-6.png", Leader: false, Power: 510)
Persona.create(Name: "Nina", Origin: "Breath of Fire", Alignment: "LG", Role: "Support", Image: "https://vignette.wikia.nocookie.net/bof/images/f/f6/NinaFire2.jpg/revision/latest?cb=20080228221459", Leader: false, Power: 350)
Persona.create(Name: "Morrigan Aensland", Origin: "Darkstalkers", Alignment: "TN", Role: "Damage", Image: "http://www.tokkoro.com/picsup/1444080-darkstalkers.jpg", Leader: false, Power: 505)
Persona.create(Name: "Sub-Zero", Origin: "Mortal Kombat", Alignment: "LN", Role: "Bruiser", Image: "https://i.pinimg.com/originals/55/a8/3d/55a83db76dab75ed9988988db483146f.jpg", Leader: false, Power: 415)
Persona.create(Name: "Chrom", Origin: "Fire Emblem", Alignment: "LG", Role: "Tank", Image: "https://vignette.wikia.nocookie.net/fireemblem/images/5/57/Chrom_SSBU.png/revision/latest?cb=20180808162001hrom_url", Leader: true, Power: 350)
Persona.create(Name: "KOS-MOS", Origin: "Xenosaga", Alignment: "NG", Role: "Tank", Image: "https://pbs.twimg.com/media/DP4yco1W4AAa_jr.jpg", Leader: false, Power: 600)
Persona.create(Name: "Thrall", Origin: "Warcraft", Alignment: "TN", Role: "Hybrid", Image: "https://i.pinimg.com/originals/ef/6c/b5/ef6cb5b1b2c14b23f1100efbfe4e2a32.jpg", Leader: true, Power: 375)
Persona.create(Name: "Mew", Origin: "Pokemon", Alignment: "TN", Role: "Support", Image: "https://i.pinimg.com/originals/63/9d/80/639d80fc47dc811416bdf72843c45ffd.jpg", Leader: false, Power: 290)
Persona.create(Name: "Garrus Vakarian", Origin: "Mass Effect", Alignment: "CG", Image: "https://pbs.twimg.com/profile_images/742404856804085760/nESaDtmy_400x400.jpg", Role: "Hybrid", Leader: true, Power: 425)
Persona.create(Name: "T-elos", Origin: "Xenosaga", Alignment: "NE", Role: "Bruiser", Image: "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/t-elos-project-x-zone-2.19.jpg", Leader: false, Power: 460)
Persona.create(Name: "Lavos", Origin: "Chrono Trigger", Alignment: "CE", Role: "Tank", Image: "https://www.wallpaperup.com/uploads/wallpapers/2013/09/05/142765/609466ac281cb324e6ae89bc4382d750-700.jpg", Leader: false, Power: 600)
Persona.create(Name: "Spyro", Origin: "Spyro the Dragon", Alignment: "CG", Role: "Damage", Image: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/29790306_955948047898976_3517457385109061632_n.jpg?_nc_cat=103&_nc_ht=scontent-lga3-1.xx&oh=869f2b2e5747c508336a45836ceb88e0&oe=5C4D38F4", Leader: true, Power: 500)
Persona.create(Name: "Ryu", Origin: "Street Fighter", Alignment: "NG", Role: "Bruiser", Image: "https://static.comicvine.com/uploads/scale_small/0/9241/564114-ryu081.jpg", Leader: true, Power: 600)
Persona.create(Name: "Akuma", Origin: "Street Fighter", Alignment: "CE", Role: "Bruiser", Image: "http://vignette2.wikia.nocookie.net/streetfighter/images/5/50/Akuma.JPG/revision/20110725021719", Leader: true, Power: 580)
Persona.create(Name: "Zero", Origin: "Mega Man X", Alignment: "LN", Role: "Damage", Image: "https://vignette.wikia.nocookie.net/celestial-refresh/images/a/a7/X4_zeroslash.jpg/revision/latest/scale-to-width-down/300?cb=20130108043110", Leader: false, Power: 440)
Persona.create(Name: "X", Origin: "Mega Man X", Alignment: "LG", Role: "Tank", Image: "https://nerdbot.com/wp-content/uploads/2017/12/X1armor.jpg", Leader: true, Power: 520)
Persona.create(Name: "Estinien Wyrmblood", Origin: "Final Fantasy", Alignment: "CN", Role: "Damage", Image: "https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/0c5ae23f-bfbf-49e8-a0d4-2c9e9e42d2f6.jpg", Leader: false, Power: 475)
Persona.create(Name: "Deneb Rove", Origin: "Tactics Ogre", Alignment: "TN", Image: "https://vignette.wikia.nocookie.net/ogrebattlesaga/images/8/88/LuCT_PSP_Deneb_Profile.png/revision/latest?cb=20160611143956", Role: "Support", Leader: true, Power: 350)
Persona.create(Name: "Fox McCloud", Origin: "Starfox", Alignment: "NG", Image: "https://i.pinimg.com/originals/ff/f0/1a/fff01a3d7bd7411cd8f6c28da9cd483d.png", Role: "Bruiser", Leader: true, Power: 280)
Persona.create(Name: "Vergil", Origin: "Devil May Cry", Alignment: "LE", Image: "https://orig00.deviantart.net/4d7d/f/2015/131/0/d/devil_may_cry_4_special_edition___vergil_a_by_hazzy5-d8szo5d.jpg", Role: "Bruiser", Leader: false, Power: 280)
Persona.create(Name: "Solaire of Astora", Origin: "Dark Souls", Alignment: "LG", Image: "https://pre00.deviantart.net/537a/th/pre/i/2017/009/6/8/solaire_of_astora_by_emortal982-d8sal2b.jpg", Role: "Tank", Leader: true, Power: 440)
Persona.create(Name: "Siegfried Schtauffen", Origin: "Soul Calibur", Alignment: "NG", Image: "https://vignette.wikia.nocookie.net/soulcalibur-fanon/images/a/a6/Siegfried.jpg/revision/latest/scale-to-width-down/374?cb=20130218203626", Role: "Tank", Leader: true, Power: 305)
Persona.create(Name: "Grimgor Ironhide", Origin: "Warhammer", Alignment: "CE", Image: "https://cdna.artstation.com/p/assets/images/images/009/492/312/large/ruben-perez-gonzalez-final-cropped2.jpg?1519300736", Role: "Bruiser", Leader: true, Power: 700)
Persona.create(Name: "Tyrande Whisperwind", Origin: "Warcraft", Alignment: "LG", Image: "https://images.wallpaperscraft.com/image/warcraft_tyrande_whisperwind_female_face_look_16242_1280x1024.jpg", Role: "Support", Leader: true, Power: 390)
Persona.create(Name: "Solid Snake", Origin: "Metal Gear", Alignment: "CG", Image: "https://banner2.kisspng.com/20180203/zxq/kisspng-metal-gear-2-solid-snake-metal-gear-solid-v-the-solid-snake-png-image-5a7560c9aacaa6.6265573515176419296996.jpg", Role: "Hybrid", Leader: false, Power: 555)
Persona.create(Name: "PaRappa the Rapper", Origin: "PaRappa the Rapper", Alignment: "TN", Image: "https://www.psu.com/app/uploads/2017/11/15-12-10-22-41_0_large_parappasnd425_300x300.jpg", Role: "Support", Leader: false, Power: 452)
Persona.create(Name: "Peppy Hare", Origin: "Starfox", Alignment: "LG", Image: "https://i.pinimg.com/originals/bd/7a/d0/bd7ad0096123c73ab40e7bdea4163b4c.png", Role: "Damage", Leader: false, Power: 200)
Persona.create(Name: "Sonic", Origin: "Sonic the Hedgehod", Alignment: "CG", Image: "https://www.clipartmax.com/png/middle/136-1366901_first-we-have-classic-sonic-sega-sonic-the-hedgehog-3.png", Role: "Damage", Leader: false, Power: 410)
Persona.create(Name: "Aranea Highwind", Origin: "Final Fantasy", Alignment: "LN", Image: "https://cdn.shopify.com/s/files/1/0318/2649/products/51dW_2B1mtBsL_large.jpg?v=1497989177", Role: "Bruiser", Leader: false, Power: 385)
Persona.create(Name: "Q*bert", Origin: "Q*bert", Alignment: "TN", Image: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/2e/Q_bert_by_6gonzalocortez4-d80w6wi.png/revision/latest/scale-to-width-down/226?cb=20160103061403", Role: "Hybrid", Leader: false, Power: 250)
Persona.create(Name: "Geralt of Rivia", Origin: "The Witcher", Alignment: "CG", Image: "https://banner2.kisspng.com/20180404/euq/kisspng-the-witcher-3-wild-hunt-geralt-of-rivia-playstati-the-witcher-5ac5689171f018.0757660215228868014667.jpg", Role: "Hybrid", Leader: false, Power: 380)
Persona.create(Name: "Kerrigan", Origin: "Starcraft", Alignment: "NE", Image: "https://pre00.deviantart.net/4d07/th/pre/f/2013/183/6/9/kerrigan_by_fcbs-d6bobre.png", Role: "Damage", Leader: true, Power: 405)
Persona.create(Name: "Bowser", Origin: "Mario", Alignment: "CE", Image: "https://vignette.wikia.nocookie.net/mario/images/7/75/Bowser_SM64DS.png/revision/latest?cb=20120724001428", Role: "Tank", Leader: true, Power: 320)
Persona.create(Name: "Duke Nukem", Origin: "Duke Nukem", Alignment: "CG", Image: "https://img00.deviantart.net/2df8/i/2014/120/7/4/duke_nukem_remake_cover_by_xermanico-d7gkifs.jpg", Role: "Bruiser", Leader: false, Power: 465)
Persona.create(Name: "Ungrim Ironfist", Origin: "Warhammer", Alignment: "CN", Image: "https://vignette.wikia.nocookie.net/total-war-warhammer/images/1/14/Ungrim_bg.png/revision/latest/scale-to-width-down/220?cb=20171009203942", Role: "Damage", Leader: true, Power: 500)
Persona.create(Name: "Mitsurugi", Origin: "Soul Calibur", Alignment: "TN", Image: "https://www.thetechgame.com/images/news/article/c6cf10a986.jpg", Role: "Tank", Leader: false, Power: 425)
Persona.create(Name: "Karl Franz", Origin: "Warhammer", Alignment: "LG", Image: "https://news-cdn.softpedia.com/images/news2/total-war-warhammer-gives-karl-franz-three-legendary-quests-500757-2.jpg", Role: "Bruiser", Leader: true, Power: 475)
Persona.create(Name: "Nathan Drake", Origin: "Uncharted", Alignment: "CG", Image: "https://vignette.wikia.nocookie.net/uncharted-wyz/images/a/a8/DrakeU4RenderAvatar.png/revision/latest?cb=20170903174418&path-prefix=fr", Role: "Hybrid", Leader: false, Power: 370)
Persona.create(Name: "Lara Croft", Origin: "Tomb Raider", Alignment: "CG", Image: "https://news-cdn.softpedia.com/images/news2/A-Young-and-Dirty-Lara-Croft-Gets-a-Grip-on-Your-Mac-May-31st-2.jpg", Role: "Damage", Leader: false, Power: 340)
Persona.create(Name: "Delita Hyral", Origin: "Final Fantasy", Alignment: "LE", Image: "http://4.bp.blogspot.com/-rCHThqXn4j0/TanNavMeeHI/AAAAAAAAAck/iZ7plXsgjhU/s1600/017.jpg", Role: "Hybrid", Leader: true, Power: 404)
Persona.create(Name: "Andrew Ryan", Origin: "BioShock", Alignment: "LE", Image: "andrewryan_url", Role: "Support", Leader: true, Power: 390)
Persona.create(Name: "Alucard", Origin: "Castlevania", Alignment: "CN", Image: "alucard_url", Role: "Damage", Leader: false, Power: 455)
Persona.create(Name: "Earthworm Jim", Origin: "Earthworm Jim", Alignment: "NG", Image: "jim_url", Role: "Bruiser", Leader: true, Power: 430)



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
Roster.create(dream_team_id: 3, persona_id: 24)
Roster.create(dream_team_id: 3, persona_id: 4)
Roster.create(dream_team_id: 3, persona_id: 10)
Roster.create(dream_team_id: 3, persona_id: 19)
Roster.create(dream_team_id: 3, persona_id: 34)
Roster.create(dream_team_id: 4, persona_id: 49)
Roster.create(dream_team_id: 4, persona_id: 5)
Roster.create(dream_team_id: 4, persona_id: 7)
Roster.create(dream_team_id: 4, persona_id: 9)
Roster.create(dream_team_id: 4, persona_id: 25)
Roster.create(dream_team_id: 5, persona_id: 32)
Roster.create(dream_team_id: 5, persona_id: 4)
Roster.create(dream_team_id: 5, persona_id: 11)
Roster.create(dream_team_id: 5, persona_id: 14)
Roster.create(dream_team_id: 5, persona_id: 37)
Roster.create(dream_team_id: 6, persona_id: 3)
Roster.create(dream_team_id: 6, persona_id: 9)
Roster.create(dream_team_id: 6, persona_id: 25)
Roster.create(dream_team_id: 6, persona_id: 36)
Roster.create(dream_team_id: 6, persona_id: 47)
Roster.create(dream_team_id: 7, persona_id: 29)
Roster.create(dream_team_id: 7, persona_id: 28)
Roster.create(dream_team_id: 7, persona_id: 7)
Roster.create(dream_team_id: 7, persona_id: 24)
Roster.create(dream_team_id: 7, persona_id: 23)
Roster.create(dream_team_id: 8, persona_id: 30)
Roster.create(dream_team_id: 8, persona_id: 11)
Roster.create(dream_team_id: 8, persona_id: 12)
Roster.create(dream_team_id: 8, persona_id: 21)
Roster.create(dream_team_id: 8, persona_id: 22)

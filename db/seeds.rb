# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Thought.destroy_all
Mood.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@mood1 = Mood.create!(name: 'Humor', description: 'It funny! We have fun here.')
@mood2 = Mood.create!(name: 'Joy', description: "I just can't contain the happiness!")
@mood3 = Mood.create!(name: 'Fury', description: 'Let out the RAGE! Vent and move on.')
@mood4 = Mood.create!(name: 'Musing', description: 'Pontificate, wax poetic. Your thoughts are the most interesting thoughts to have ever been thought.')
@mood5 = Mood.create!(name: 'Melancholy', description: 'Everybody get sad sometimes. It okay. Things will get better soon because you have the power to craft your own reality throught self-love and self-acceptance.')

puts "#{Mood.count} moods created"

@thought1 = Thought.create!(title: 'Test', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', moods: [@mood1, @mood2], user: @admin)
@thought2 = Thought.create!(title: 'Test', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', moods: [@mood2, @mood3], user: @admin)
@thought3 = Thought.create!(title: 'Test', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', moods: [@mood3, @mood4], user: @admin)
@thought4 = Thought.create!(title: 'Test', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', moods: [@mood5, @mood1], user: @admin)
@thought5 = Thought.create!(title: 'Test', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', moods: [@mood2, @mood4], user: @admin)

puts "#{Thought.count} thoughts created"
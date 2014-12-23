# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

months = (1..12).to_a

days = (1..30).to_a

year = (14..16).to_a

venues = [
  "The Catalyst",
  "The Basemnt",
  "Slims",
  "Velvet Jones",
  "Pure"
]

cities = [
  "Santa Cruz",
  "San Francisco",
  "Santa Barbara",
  "San Diego",
  "Los Angeles"
]

state = "CA"
tickets = "http://www.iratorf.com/"

10.times do 
  Show.create(
  date: "#{months.sample.to_s}/#{days.sample.to_s}/#{year.sample.to_s}",
  venue: "#{venues.sample}", 
  city: "#{cities.sample}", 
  state: "#{state}",
  tickets_url: "#{tickets}")
end
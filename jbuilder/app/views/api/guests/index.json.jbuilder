json.array! @guests do |guest|
  next unless guest.age.between?(40, 50)
  # json.name guest.name
  # json.age guest.age
  # json.favorite_color guest.favorite_color
  json.partial! 'api/guests/guest', guest: guest
end

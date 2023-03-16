names = ["Alice", "Bob", "Carol", "Dan", "Eve"]
ages = [22, 32, 18, 57, 41]
current_year = 2017

for person in [1..5]
  age = ages(person)
  name = names[person]
  year_of_birth = age - current_year
  puts("name" + " was born in " + year_of_birth)
end

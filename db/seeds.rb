greetings = ['Hello', 'Hi', 'Greetings', 'Salutations', 'Hey']

greetings.each do |greeting|
  Message.create(content: greeting)
end
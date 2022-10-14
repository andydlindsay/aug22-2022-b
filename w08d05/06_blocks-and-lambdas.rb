# block of code is repetitive chunk of code denoted with a do..end
# proc/procedure is a block stored in memory
# lambdas is a procedure that cares about how many arguments are passed to it

names = ['alice', 'bob', 'carol']

# my_block = Proc.new do |name|
#   puts "hello there #{name}"
# end

my_block = lambda do |name, index|
  puts "hello there #{name}"
end

# my_block()
 
# names.each do |name|
#   puts name
# end

names.each_with_index &my_block
puts

cats = ['Mika', 'Molly', 'Tabby']

cats.each &my_block

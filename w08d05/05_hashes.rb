# collection of key/value pairs: object, hash, dictionary, associative array

user = {
  "username" => "jstamos",
  "password" => "1234",
}

# puts user
# puts user['username']
# user['password'] = 'secret'
# puts user

# symbols are lightweight strings; as close to primitives as we can get

user = {
  :username => 'jstamos',
  :password => '1234'
}

# key = 'password' # :password

# puts user
# p user[key.to_sym]

user = {
  username: 'jstamos',
  password: '1234'
}



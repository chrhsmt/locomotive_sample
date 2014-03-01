source 'https://rubygems.org'
ruby '2.1.0'

gem 'rails', '3.2.17'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'
gem 'rspec-rails'

gem 'locomotive_cms', "~> 2.4.1", require: 'locomotive/engine'
gem 'locomotive-heroku', require: 'locomotive/heroku'

group :development do 
	gem 'unicorn'
    gem 'better_errors'
    gem 'binding_of_caller'
    gem 'rails-footnotes'
end

group :development, :test do
  gem 'pry-rails'
  gem 'pry-doc'
end

group :production do
	gem 'thin'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'compass-rails',  '~> 1.0.2'
  
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'  
end

gem 'jquery-rails'
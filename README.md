# README

## log

bundle init

echo "gem 'rails', '5.0.0.beta4', github: 'rails/rails'" >> Gemfile

bundle install --path vendor/bundle

bundle exec rails new . --skip-action-cable --api -d mysql


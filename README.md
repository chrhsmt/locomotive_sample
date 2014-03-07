locomotive_sample
=================

## usage

### heroku settings

```
$ heroku create apps 
$ heroku config:add BUNDLE_WITHOUT=development:test
$ heroku addons:add mongohq
$ heroku addons:add sendgrid:starter
$ heroku config:add S3_KEY_ID="s3_key"
$ heroku config:add S3_SECRET_KEY="amazon_secret_key"
$ heroku config:add S3_BUCKET="s3_bucket_name"
$ heroku config:add S3_BUCKET_REGION="s3_region"
$ heroku config:add S3_BUCKET_END_POINT="s3_end_point"

$ heroku config:add HEROKU_API_KEY="heroku_api_key"
$ heroku config:add HEROKU_APP_NAME="app_name"
$ bundle exec rake assets:precompile
$ git push heroku master
$ heroku open
```
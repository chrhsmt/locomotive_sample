CarrierWave.configure do |config|

  config.cache_dir = File.join(Rails.root, 'tmp', 'uploads')

  case Rails.env.to_sym

  when :development
    config.storage = :file
    config.root = File.join(Rails.root, 'public')

  when :production
    # the following configuration works for Amazon S3
    config.storage          = :fog
    config.fog_credentials  = {
      provider:                 'AWS',
      aws_access_key_id:        ENV['S3_KEY_ID'],
      aws_secret_access_key:    ENV['S3_SECRET_KEY'],
      region:                   ENV['S3_BUCKET_REGION'],
      endpoint:                 ENV['S3_BUCKET_END_POINT'],
    }
    config.fog_directory    = ENV['S3_BUCKET']

    Fog.credentials = { path_style: true }

  else
    # settings for the local filesystem
    config.storage = :file
    config.root = File.join(Rails.root, 'public')
  end

end
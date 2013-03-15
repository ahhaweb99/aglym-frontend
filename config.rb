###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'scss'

set :js_dir, 'js'

set :images_dir, 'img'

set :debug_assets, true

activate :livereload
activate :sprockets
activate :asset_hash
# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  #activate :minify_css

  # Minify Javascript on build
  #activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"


end
page "home-page.html", :layout => "layout"
page "styleguide.html", :layout => "layout-inner"
page "wide-page.html", :layout => "layout-inner"
page "news.html", :layout => "layout-inner"
page "news-article.html", :layout => "layout-inner"
page "product-thumbs.html", :layout => "layout-inner-products"
page "product-all.html", :layout => "layout-inner-products"
page "product-overview.html", :layout => "layout-inner-products"
page "product-detail.html", :layout => "layout-inner-products"
page "valeting-bay.html", :layout => "layout-inner-valeting"
page "valeting-bay-results.html", :layout => "layout-inner-valeting"


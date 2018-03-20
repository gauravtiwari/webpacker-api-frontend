class Api::PagesController < ApplicationController
  def index
  	render json: { name: 'David' }
  end
end

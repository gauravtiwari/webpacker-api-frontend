class Api::PagesController < ApplicationController
  def index
  	render json: { name: 'David' }
  end

  def show
    render json: { name: 'John' }
  end
end

class Api::GreetingsController < ApplicationController
  def index
    greeting = Message.all.shuffle
    render json: greeting
  end
end

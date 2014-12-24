module Api
  class ShowsController < ApplicationController
  
    def index
      @shows = Show.order(:date)
      render json: @shows
    end
  
    def show
    end
  
    def new
    end
  
    def create
    end
  
    def edit
    end
  
    def update
    end
  
    def destroy
    end
  
    def show_params
      params.require(:show).permit(:date, :venue, :city, :state, :tickets_url)
    end
  end
end
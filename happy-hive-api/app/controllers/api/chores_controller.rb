class Api::ChoresController < ApplicationController
    require 'pry'
    before_action :set_chore, only: [:show, :update, :destroy]

    def index
        render json: Chore.all
    end

    def create
        chore = Chore.new(chore_params)
        if chore.save
            render json: chore
        else
            render json: { message: chore.errors }, status: 400
        end
    end

    def show
        render json: @chore
    end

    def update
        if @chore.update(chore_params)
            render json: @chore
        else
            render json: { message: @chore.errors }, status: 400
        end
    end

    def destroy
        if @chore.destroy
            render status: 204
        else
            render json: { message: "Unable to remove this chore"}, status: 400
        end
    end


    private

    def set_chore
        @chore = Chore.find_by(id: params[:id])
    end

    def chore_params
        params.require(:chore).permit(:name, :description, :points_value, :assigned_to, :complete)
    end

end
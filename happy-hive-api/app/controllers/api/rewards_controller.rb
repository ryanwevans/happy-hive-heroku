class Api::RewardsController < ApplicationController
    before_action :set_reward, only: [:show, :update, :destroy]

    def index
        render json: Reward.all
    end

    def create
        reward = Reward.new(reward_params)
        if reward.save
            render json: reward
        else
            render json: { message: reward.errors }, status: 400
        end
    end

    def show
        render json: @reward
    end

    def update
        if @reward.update(reward_params)
            render json: @reward
        else
            render json: { message: @reward.errors }, status: 400
        end
    end

    def destroy
        if @reward.destroy
            render status: 204
        else
            render json: { message: "Unable to remove this reward"}, status: 400
        end
    end


    private

    def set_reward
        @reward = Reward.find_by(id: params[:id])
    end

    def reward_params
        params.require(:reward).permit(:name, :description, :img_url, :value, :claimed, :claimed_by)
    end


end
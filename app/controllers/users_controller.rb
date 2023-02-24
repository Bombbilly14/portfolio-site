class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        if user && user.authenticate(params[:password])
            session[:user_id] = user.def index
        else
            render json: { errors: "no"}, status: :unauthorized
           
        end
    end

    def index
        render json: User.all

    end

    def show
        user = User.find(params[:id])
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
    end

    private

    def user_params
        params.permit(:name, :password, :email, :phone, :social, :desc, :location)
    end
end

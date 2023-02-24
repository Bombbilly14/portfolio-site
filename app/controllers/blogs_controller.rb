class BlogsController < ApplicationController

    def index
        render json: Blog.all
    end

    def show
        blog = Blog.find(params[:id])

        render json: blog
    end

    def create
        blog = Blog.create!(blog_params)

        render json: blog, status: :created
    end

    def update
        blog = Blog.find(params[:id])
        blog.update!(blog_params)

        render json: blog, status: :accepted
    end

    private

    def blog_params
        params.require(:blog).permit(:name, :desc, :content)
    end
end

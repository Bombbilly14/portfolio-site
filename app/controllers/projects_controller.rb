class ProjectsController < ApplicationController

    def create
        project = Project.create!(project_params)
        render json: project, status: :created
    end
    
    def index
        render json: Project.all
    end

    def destroy
        project = Project.find(params[:id])

        project.destroy

        head :no_content
    end

    def show
        project = Project.find(params[:id])

        render json: project
    end

    def update
        project = Project.find(params[:id])
        project.update(project_params)

        render json: project, status: :accepted
    end

    private

    def project_params

        params.permit(:name, :desc, :url)
    end
end

class Api::QuestionsController < ApplicationController

  def index
    respond_with Question.all
  end

  def create
    respond_with Question.create(post_params)
  end

  def show
    respond_with Question.find(params[:id])
  end

  # def upvote
  #   question = Question.find(params[:id])
  #   question.increment!(:upvotes)

  #   respond_with question
  # end

  private
  def post_params
    params.require(:question).permit(:link, :title)
  end
end
class ThoughtsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy, :show, :index]
  before_action :set_thought, only: [:update, :destroy, :show]
  #before_action :set_user_thought, only: [:update, :destroy, :show]

  # GET /thoughts
  def index
    @thoughts = Thought.all

    render json: @thoughts
  end

  # GET /thoughts/1
  def show
    render json: @thought, include: :moods
  end

  # POST /thoughts
  def create
    @thought = Thought.new(thought_params.except(:moods))
    @thought.user = @current_user
    @thought.moods = thought_params[:moods].map { |id| Mood.find(id) }
    
    if @thought.save
      render json: @thought, status: :created, location: @thought
    else
      render json: @thought.errors, status: :unprocessable_entity
    end
  end
  
  # PATCH/PUT /thoughts/1
  def update
    if @thought.update(thought_params.except(:moods))
      @thought.moods = thought_params[:moods].map { |id| Mood.find(id) }
      
      render json: @thought
    else
      render json: @thought.errors, status: :unprocessable_entity
    end
  end

  # DELETE /thoughts/1
  def destroy
    @thought.destroy
  end

  def add_mood
    @mood = Mood.find(params[:mood_id])
    @thought.moods << @mood

    render json: @thought, include: :moods
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_thought
      @thought = Thought.find(params[:id])
    end

    # def set_user_thought
    #   @thought = @current_user.thoughts.find(params[:id])
    # end

    # Only allow a trusted parameter "white list" through.
    def thought_params
      params.require(:thought).permit(:title, :content, :user_id, moods:[])
    end
end

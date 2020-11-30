class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  # admin token: eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjA2ODU4NjIxfQ.to8CXjivcdyItrOn85n75cG5Ob8xNbMDBeDN-fiEtuY
  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    begin
      @decoded = decode(token)
      @current_user = User.find(@decoded[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end

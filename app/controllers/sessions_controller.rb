class SessionsController < Devise::SessionsController
  # GET /resource/sign_in
  def new
    self.resource = resource_class.new(sign_in_params)
    clean_up_passwords(resource)
    respond_with(resource, serialize_options(resource))
  end

  def create
    return missing_params unless params[:email] && params[:password]

    resource = resource_from_credentials
    return invalid_credentials unless resource

    # resource.ensure_authentication_token!
    data = {
      user_id: resource.id,
      # auth_token: resource.authentication_token,
    }
    render json: data, status: 201
  end

  def destroy
    redirect_path = after_sign_out_path_for(resource_name)
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message :notice, :signed_out if signed_out && is_navigational_format?

    # We actually need to hardcode this as Rails default responder doesn't
    # support returning empty response on GET request
    respond_to do |format|
      format.all { head :no_content }
      format.any(*navigational_formats) { redirect_to redirect_path }
    end
  end

  protected

  def missing_params
    warden.custom_failure!
    return render json: {}, status: 400
  end

  def invalid_credentials
    warden.custom_failure!
    render json: {}, status: 401
  end

  def resource_from_credentials
    data = { email: params[:email] }
    if res = resource_class.find_for_database_authentication(data)
      if res.valid_password?(params[:password])
        res
      end
    end
  end
end
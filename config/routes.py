from app.controllers import (
    HomeController,
    UsersController,
    LoginController,
)
from config.application import App

App.add_url_rule('/', view_func=HomeController.as_view('home'))

App.add_url_rule(
    '/users/',
    view_func=UsersController.as_view('user-login')
)

App.add_url_rule('/login/', view_func=LoginController.as_view('login'))

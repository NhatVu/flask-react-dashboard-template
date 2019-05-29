from flask import Flask
app = Flask(__name__,
 	static_folder = './client/public',
 	template_folder="./client")

from dashboard_trending.hello.views import hello_blueprint
# register the blueprints
app.register_blueprint(hello_blueprint)

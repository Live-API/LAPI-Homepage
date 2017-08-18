from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return app.send_static_file('home.html')

# Serve static files from app/static
@app.route('/static/<path:path>')
def send_static(path):
    print(path)
    return send_from_directory('app/static', path)

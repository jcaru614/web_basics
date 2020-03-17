from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<name>')
def say_name(name):
    return "Hi, " + name.capitalize() 

@app.route('/repeat/<num>/<name>')
def repeat(num, name):
    return name*int(num)

@app.route('/<path:path>')
def catch_all(path):
    return "sorry! no response. Try again"


if __name__ == "__main__":
    app.run(debug=True)
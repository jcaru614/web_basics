from flask import Flask, render_template, request
app = Flask(__name__)



@app.route('/')
def home():
    return render_template("form.html")

@app.route('/result', methods=["POST"])
def result():

    name = request.form["name"]
    # we could use any word as a variable here but ["name"] is from html page
    location = request.form["location"]
    language = request.form["language"]
    comment = request.form["comment"]

    return render_template("result.html", name = name, location = location, language = language, comment = comment)
#left is for jinja and what we want to display on the page
# right side is what connects to name = request.form


@app.route('/<path:path>')
def catch_all(path):
    return "Sorry! No response. Try again."

if __name__ == '__main__':
    app.run(debug=True)




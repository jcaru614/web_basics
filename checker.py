from flask import Flask, render_template

app = Flask(__name__)


@app.route("/<x>/<y>/<color1>/<color2>")
def home(x,y,color1,color2):
    return render_template("index.html", row = int(x), data = int(y), color1 = color1, color2 = color2)



if __name__ == "__main__":
    app.run(debug=True)
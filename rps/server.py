from flask import Flask, render_template, request
app = Flask(__name__)

# get request is when we want to retrieve from a server
# post request is when we are posting information to the server

import random

@app.route('/')
def home():
    return render_template("index.html")



@app.route('/results', methods = ['POST'])
def results():
    computer = random.choice(["rock", "paper", "scissors"])
    select = request.form["selection"]
    def win(select, computer):
        if select == computer:
            return "tie"
        dict = {"rock": {"paper":"lose", "scissors": "win"},
                "paper": {"rock": "win", "scissors": "lose"},
                "scissors": {"rock": "lose", "paper" : "win" }
            }

        return dict[select][computer]
    final = win(select,computer)
    print(("*")*80)
    print(request.form)
        # myDictionary = {
        #     "select":select,

        # }
    return render_template("results.html", select = select, computer = computer, final = final )
    # left side is server, right side is jinja or interpreted by html



@app.route('/<path:path>')
def catch_all(path):
    return "Sorry! No response. Try again."

if __name__ == '__main__':
    app.run(debug=True)


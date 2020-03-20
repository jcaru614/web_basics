import random

from flask import Flask, render_template, request, redirect, session
app = Flask(__name__) 
app.secret_key = 'secret_key'  

@app.route('/')
def home():
    # use session and make num the key for the randomint because session is dictionary
    session['count'] = 0
    # session counter at 0
    session['num'] = random.randint(1, 100)
    print(session['num'])
    return render_template("index.html")

@app.route('/guess', methods = ['POST'])
def guessed():
    session['count'] += 1
    # adding session + one
    guess = request.form['guess']
    return render_template('guess.html', guess = int(guess), num = session['num'], count = session['count'])
# still need num = session[num] since we are using that in jinja logic on that page

@app.route('/<path:path>')
def catch_all(path):
    return "Sorry! No response. Try again."

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__) 
app.secret_key = 'secret_key'  


@app.route('/')
def home():
    if 'gold' not in session:
        session['gold'] = 0
    return render_template("index.html", gold = session['gold'])

@app.route('/money', methods = ['POST'])
def money():
    # using name as key which is building and value is farm
    if request.form['building'] == 'farm':
        money = random.randint(10,20)
        session['gold'] += money

    elif request.form['building'] == 'cave':
        money = random.randint(5,10)
        session['gold'] += money
    
    elif request.form['building'] == 'house':
        money = random.randint(2,5)
        session['gold'] += money

    elif request.form['building'] == 'casino':
        money = random.randint(-50,50)
        session['gold'] += money

    print(session['gold'])
    return redirect('/')

@app.route('/clear', methods = ['POST'])
def clear():
    session['gold'] = 0
    return redirect('/')


@app.route('/<path:path>')
def catch_all(path):
    return "Sorry! No response. Try again."

if __name__ == '__main__':
    app.run(debug=True)

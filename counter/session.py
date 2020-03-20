from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'secret_key'  


@app.route('/')
def home():
    if 'count' not in session:
        session['count'] = 0
    session['count'] += 1
    return render_template("session.html", count = session['count'])


@app.route('/countTwo', methods = ['POST'])
def countTwo():
    session['count'] += 1
    return redirect('/')


@app.route('/destroy_session', methods = ['POST'])
def destory():
    session['count'] = 0
    return redirect('/')



@app.route('/<path:path>')
def catch_all(path):
    return "Sorry! No response. Try again."

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template

app = Flask(__name__)

    
@app.route('/play/<num>/<color>')
def repeat(num,color):
    return render_template ('index.html', num_times = int(num), color = color)


if __name__ == '__main__':
    app.run(debug=True)
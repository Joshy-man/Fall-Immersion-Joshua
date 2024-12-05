#Import the flask class to the flask library
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return "Home Page"


if __name__ =='__main__':
    app.run(debug =True)# instruction will below. 

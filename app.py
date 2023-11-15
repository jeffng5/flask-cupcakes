"""Flask app for Cupcakes"""
from models import Cupcake, db, connect_db
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, redirect, flash, session, request, jsonify
from flask_cors import CORS

app= Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///jeffreyng'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] =True
app.config['SECRET_KEY']= 'nowayJose'
app.config['DEBUG_TB_INRECEPT_REDIRECTS']= False

connect_db(app)

@app.route('/')
def home_page():
    return render_template('home.html')

@app.route('/api/cupcakes')
def list_of_cupcakes():    
    all_cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    return jsonify(all_cupcakes)

@app.route('/api/cupcakes/<int:id>')
def get_one_cupcake(id):
    cupcake= Cupcake.query.get_or_404(id)
    cupcake=[c.serialize() for c in cupcake]
    return jsonify(cupcake)

@app.route('/api/cupcakes', methods=['POST'])
def post_cupcake():
    flavor=request.form['flavor']
    size=request.form['size']
    rating=request.form['rating']
    image=request.form['image']

    new_cupcake= Cupcake(flavor=flavor, size=size, rating=rating, image=image)
    db.session.add(new_cupcake)
    db.session.commit()

    all_cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    jsonify(all_cupcakes)
    return render_template('home.html', flavor=flavor, size=size, rating=rating, image=image)

@app.route('/api/cupcakes/<int:id>', methods=['PATCH'])
def update_cupcake(id):
    flavor=request.form['flavor']
    size=request.form['size']
    rating=request.form['rating']
    image=request.form['image']
    
    new_cupcake= Cupcake(flavor=flavor, size=size, rating=rating, inage=image)
    db.session.add(new_cupcake)
    db.session.commit()

    cupcake= Cupcake.query.get_or_404(id)
    cupcake=[c.serialize() for c in cupcake]
    return jsonify(cupcake)

@app.route('/api/cupcakes/<int:id>', methods=['DELETE'])
def delete_cupcake(id):
    cupcake= Cupcake.query.get_or_404(id).delete()
    db.session.commit()
    cupcake = {'message': "Deleted"}
    return cupcake



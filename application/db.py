from flask import current_app as app
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] ="sqlite:///db.sqlite3"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db=SQLAlchemy()
db.init_app(app)

class admin_login(db.Model):
	__tablename__='admin_login'
	username=db.Column(db.String, primary_key=True, nullable=False, unique=True)
	password=db.Column(db.String, nullable=False)
	societyname=db.Column(db.String, nullable=False, unique=True)
	key=db.Column(db.String)

class user_login(db.Model):
	__tablename__='user_login'
	username=db.Column(db.String, primary_key=True, nullable=False, unique=True)
	password=db.Column(db.String, nullable=False)
	societyname=db.Column(db.String, db.ForeignKey("admin_login.societyname"), primary_key=True)
	key=db.Column(db.String)

class employee_login(db.Model):
	__tablename__='employee_login'
	employeeid=db.Column(db.String, primary_key=True, nullable=False)
	password=db.Column(db.String, nullable=False)
	societyname=db.Column(db.String, db.ForeignKey("admin_login.societyname"), primary_key=True)
	key=db.Column(db.String)
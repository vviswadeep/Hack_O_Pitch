from flask import render_template, request, redirect, url_for, send_from_directory, jsonify, send_file
from flask_restful import Resource, Api, reqparse
from werkzeug.exceptions import HTTPException
import json
import requests
import secrets
import os
from datetime import datetime, timedelta
import random

from flask import current_app as app
from application.db import *

api=None
api=Api(app)

class InternalServerError(HTTPException):
  def __init__(self,status_code):
    self.response=make_response('',status_code)

class AdminLoginAPI(Resource):
  def get(self,username,password):
    try:
      user=admin_login.query.filter_by(username=username,password=password).first()
    except:
      raise InternalServerError(status_code=500)
    if user:
      key=secrets.token_hex(25)
      user.key=key
      db.session.commit()
      return jsonify({"msg":"Logged in Succesfully","key":key})
    else:
      return "Username or Password Doesn't match"

class UserLoginAPI(Resource):
  def get(self,societyname,username,password):
    try:
      user=user_login.query.filter_by(username=username,password=password,societyname=societyname).first()
    except:
      raise InternalServerError(status_code=500)
    if user:
      key=secrets.token_hex(25)
      user.key=key
      db.session.commit()
      return jsonify({"msg":"Logged in Succesfully","key":key})
    else:
      return "Username or Password or Societyname Doesn't match"

class EmployeeLoginAPI(Resource):
  def get(self,societyname,employeeid,password):
    try:
      user=employee_login.query.filter_by(employeeid=employeeid,password=password,societyname=societyname).first()
    except:
      raise InternalServerError(status_code=500)
    if user:
      key=secrets.token_hex(25)
      user.key=key
      db.session.commit()
      return jsonify({"msg":"Logged in Succesfully","key":key})
    else:
      return "Employeeid or Password or Societyname Doesn't match"

api.add_resource(AdminLoginAPI,"/api/adminlogin/<string:username>/<string:password>")
api.add_resource(UserLoginAPI,"/api/userlogin/<string:username>/<string:password>/<string:societyname>")
api.add_resource(EmployeeLoginAPI,"/api/employeelogin/<string:employeeid>/<string:password>/<string:societyname>")

from flask import Flask
app=None
celery=None
app =Flask(__name__,template_folder='templates',static_folder='static')

'''celery=workers.celery
celery.conf.update(
        broker_url = 'redis://localhost:6379/1',
        result_backend = 'redis://localhost:6379/2',
        enable_utc = False,
    )
celery.Task=workers.ContextTask'''

app.app_context().push()

from application.api import *
from application.db import *
from application.controllers import *

if __name__ =="__main__":
  app.debug=True
  app.run(host='0.0.0.0',port='5000')
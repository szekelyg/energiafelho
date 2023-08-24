from flask import Flask

from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode

import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    auth0_client_id = os.environ.get("AUTH0_CLIENT_ID", "Nem található a kliens ID")
    return f'Hello World!<br>AUTH0_CLIENT_ID: {auth0_client_id}'

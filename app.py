from flask import Flask, render_template_string

from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode

import os

app = Flask(__name__)

@app.route('/')
def homepage():
    with open('template.html', 'r') as f:
        template = f.read()
    return render_template_string(template)

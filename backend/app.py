from flask import Flask
from dotenv import load_dotenv
import os
import requests

load_dotenv()
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/login",methods=["GET"])
def login():
    API_KEY = os.environ["KINTONE_API_KEY"]
    CHECK_DOMAIN = "https://jacket-potato.kintone.com/k/v1/record.json"
    
    res = requests.get(url=CHECK_DOMAIN,headers={
        "X-Cybozu-API-Token": API_KEY,
    },
    params={
        "app":"bioCianoX Users",
        "id": 2
    })
    print(res.json())
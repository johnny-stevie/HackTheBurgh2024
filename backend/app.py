from flask import Flask
from flask import request
from dotenv import load_dotenv
import os
import requests
from flask_cors import CORS
from flask_socketio import SocketIO

load_dotenv()
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/login",methods=["GET"])
def login():
    API_KEY = os.environ["KINTONE_API_KEY_1"]
    CHECK_DOMAIN = "https://jacket-potato.kintone.com/k/v1/records.json"
    
    username = request.args.get("username")
    if len(username) < 6:
        return "Username length too short"
    password = request.args.get("password")
    if len(password) < 6:
        return "Password length too short"
    import json
    json_body = {
        "app":1,
        "query":f"username = \"{username}\"",
        "fields":["password"]
    }
    res = requests.get(url=CHECK_DOMAIN,headers={
        "X-Cybozu-API-Token": API_KEY,
        "Content-Type": "application/json",
    },data = json.dumps(json_body))
    
    if res.status_code == 200:
        res_json = res.json()
        if "records" in res_json and len(res_json["records"]) == 1 and "password" in res_json["records"][0] \
            and "value" in res_json["records"][0]["password"] and res_json["records"][0]["password"]["value"] == password:
                return "OK"
    return "Error"

if __name__ == "__main__":
    app.run(debug=True)
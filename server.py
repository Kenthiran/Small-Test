from flask import Flask
from flask import redirect
from base64 import b64decode


app = Flask(__name__)


@app.route("/capture/<phone>/<url>")
def capture(phone, url):
	f = open("capture.log", "a+")
	f.write(phone + "\n")
	f.close()
	return redirect(b64decode(url))


if __name__ == '__main__':
	app.run(debug=True)

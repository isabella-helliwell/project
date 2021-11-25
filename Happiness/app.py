from flask import Flask, render_template,request
import numpy as np
import pickle#Initialize the flask App

app = Flask(__name__)
model_1 = pickle.load(open('Happiness/model.pkl', 'rb'))

#default page of our web-app
@app.route('/')
def home():
    return render_template('index.html')


#To use the predict button in our web-app
@app.route('/predict',methods=['POST'])
def predict():
    #For rendering results on HTML GUI
    int_features = [float(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model_1.predict(final_features)
    output = round(prediction[0], 2) 
    return render_template('index.html', prediction_text='Your Life Ladder is :{}'.format(output))

if __name__ == "__main__":
    app.debug=True
    app.run()





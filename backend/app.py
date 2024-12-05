from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/api/student-data')
def get_student_data():
    return jsonify({
        'name': 'John Doe',
        'academicLevel': 'High School',
        'interests': ['Science', 'Technology', 'Art']
    })

@app.route('/api/career-recommendations')
def get_career_recommendations():
    careers = ['Software Engineer', 'Data Scientist', 'UX Designer', 'Product Manager', 'Biologist']
    return jsonify([
        {'career': career, 'score': random.randint(60, 100)}
        for career in careers
    ])

if __name__ == '__main__':
    app.run(debug=True)


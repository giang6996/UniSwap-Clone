from flask import Flask, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db_host = "feenix-mariadb.swin.edu.au"
db_user = "s104212294"
db_password = "271104"
db_name = "s104212294_db"

@app.route('/api/products', methods=['GET'])
def get_products():
    connection = pymysql.connect(host=db_host, user=db_user, password=db_password, database=db_name)
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM assets')
    products = cursor.fetchall()

    connection.close()

    # Construct JSON response with selected fields
    response = []
    for product in products:
        product_data = {
            'id': product[0],
            'title': product[1],
            'author': product[2],
            'description': product[3],
            'price': float(product[4]),
            'image_url': product[5]
        }
        response.append(product_data)

    return jsonify(response)

@app.route('/api/products/<int:id>', methods=['GET'])
def get_product(id):
    connection = pymysql.connect(host=db_host, user=db_user, password=db_password, database=db_name)
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM assets WHERE id = %s', (id,))
    product = cursor.fetchone()

    connection.close()

    if product:
        product_data = {
            'id': product[0],
            'title': product[1],
            'author': product[2],
            'description': product[3],
            'price': float(product[4]),
            'image_url': product[5]
        }
        return jsonify(product_data)
    else:
        return jsonify({'error': 'Product not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)

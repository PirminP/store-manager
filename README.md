# Project Store Manager

#### This project consists of an API built for managing a product e-commerce, with the possibility of creating, viewing, deleting and updating products and sales.

* Developed by using Node.js, Express, MySQL and Docker
* Using REST practices
* Tests performed with Mocha, Chai and Sinon
* Applied Software Architecture: Model, Service & Controller layers

### Instructions
* `Note`: create and populate database using schema present in `migration.sql` and `seed.sql` files.
* To run the repository locally, clone the project and use the following commands to initialize Docker: 

  ```
  docker-compose up -d // start application with docker
  docker attach store_manager
  npm install // install dependencies
  docker-compose down // stop application
  ```

Use the following command to run the application:
  ```
  npm start or npm run debug // start application
  npm run test:mocha // execute tests of application

  ```

### Endpoints
#### Products

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   | Returns list of all products | http://localhost:3000/products |
  | `GET`   | Returns specific product | http://localhost:3000/:id |
  | `PUT`   | Change name of specific product | http://localhost:3000/products/:id |
  | `POST`   | Create new product | http://localhost:3000/products |
  | `DELETE`   | Delete specific product | http://localhost:3000/products/:id |

The following JSON is to be entered in the request PUT & POST:
  ```
  { 
    "name": "Produto_X"
  }
  ```

#### Sales

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   | Returns list of all sales | http://localhost:3000/sales |
  | `GET`   | Returns specific sale | http://localhost:3000/sales/:id |
  | `POST`   | Validate and create new sale | http://localhost:3000/sales |

In POST request, enter quantity and id of product in following format:
  ```
  [
    {
      "productId": 1,
      "quantity": 5
    }, 
    { 
      "productId": 2,
      "quantity": 22
    }
  ]
  ```

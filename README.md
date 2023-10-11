# :construction: README em construção ! :construction:

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
  | `..`   |  | http://localhost:3000/ |
  | `POST`   | Create new product | http://localhost:3000/products |
  | `..`   |  | http://localhost:3000/ |

The following JSON is to be entered in the request PUT & POST:
  ```
  { 
    "name": "Produto_X"
  }
  ```

#### Sales

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `PUT`   |  | http://localhost:3000/ |
  | `POST`   |  | http://localhost:3000/ |
  | `DELETE`   |  | http://localhost:3000/ |

In PUT and POST request, enter quantity and id of product in following format:
  ```
  [
    {
      "productId": 1,
      "quantity": 2
    }, 
    { 
      "productId": 8,
      "quantity": 28
    }
  ]
  ```

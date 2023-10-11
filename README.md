# :construction: README em construção ! :construction:

# Project Store Manager

#### This project consists of an API built for managing a product e-commerce, with the possibility of creating, viewing, deleting and updating products and sales.

* Developed by using Node.js, Express, MySQL and Docker
* Using REST practices
* Tests performed with Mocha, Chai and Sinon
* Applied Software Architecture: Model, Service & Controller layers

### Instructions
* To run the repository locally, clone the project and use the following commands to initialize Docker:
  
  ```
  docker-compose up -d // start application with docker
  docker attach talker_manager
  npm install // install dependencies
  docker-compose down // stop application
  ```

Use the following command to run the application:
  ```
  npm start or npm run dev
  ```

### Endpoints
#### Login

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   |   | http://localhost:3000/login |

The following JSON is to be entered in the request:
  ```

  ```

#### Talker

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   |  | http://localhost:3000/talker |
  | `GET`   |  | http://localhost:3000/talker/:id |
  | `GET`   |  | http://localhost:3000/talker/search |
  | `PUT`   |  | http://localhost:3000/talker/:id |
  | `POST`   |  | http://localhost:3000/talker |
  | `DELETE`   |  | http://localhost:3000/talker/:id |

The following JSON is to be entered in the request PUT & POST:
  ```

  ```

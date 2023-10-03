# mcommerce

Setting up a DevOps pipeline for a Node.js React.js application

Development and deployment of applications have become essential processes in the ever-evolving digital world. Automation of deployments is a crucial aspect of developing and deploying cloud-native applications.

## Project Architecture

### Mcommerce-backend:

I have a Node.js backend for my e-commerce application with a directory structure that includes a "mcommerce-backend" folder. In this folder, I have a "controllers" directory containing two files, "order.js" and "products.js." These files likely contain the logic for managing orders and products in my application.

I also have a "db" directory that contains three files, "app.js," "connect.js," and "schema.js." These files probably handle database connection and schema for my application. Additionally, there are other files in the root directory of my backend, including a ".dockerignore" file, a ".gitignore" file, a "Dockerfile," a "package-lock.json" file, a "package.json" file, and a "server.js" file.

The "Dockerfile" is used to define the environment and dependencies needed to run my application in a Docker container. The "package-lock.json" and "package.json" files manage the dependencies of my application. Finally, the "server.js" file is likely the entry point for my main server.

[Link to Mcommerce-backend on GitLab](https://gitlab.com/yassinemidfig/mcomm/-/tree/main/mcommerce-backend)

### Mcommerce-frontend:

I also have a React interface for my e-commerce application with a directory structure that includes a "mcommerce-frontend" folder. In this folder, there is a "public" directory containing various static assets such as images, a favicon, and a manifest file.

I also have an "src" directory that contains the main source code of my interface. In the "src" directory, there is a "Controllers" directory containing an "ICommander.js" file, which likely handles the logic for controlling front-end components. There is also an "elements" directory containing an "IProductCard.js" file, which probably defines the structure and behavior of a product card component.

[Link to Mcommerce-frontend on GitLab](https://gitlab.com/yassinemidfig/mcomm/-/tree/main/mcommerce-frontend)

## I. Developing Backend Services

To develop the backend services of the Mcommerce application, I am using the following technologies: Node.js, Express, and MongoDB for the "product" microservice.

1. **Database Installation:**

   - Install MongoDB.
   - Create a database.

2. **Backend Installation with npm:**

   - Install Node.js and Express.

3. **Backend Results:**

   Start the site with the command `npm start`. You can access the contents of the database at localhost:3000/products.

## II. Developing the Frontend

To develop the frontend of the Mcommerce application as a Single Page Application (SPA), I am using the React library.

1. **Installation of Axios:**


2. **Final Frontend Structure:**


3. **Final Result of the Site:**


## III. Creating Dockerfiles for Services

1. **Dockerizing MongoDB:**

    ```terminal|command=1|title=bash
    docker run --name mymongodb --rm -d -p 27017:27017 mongo
    ```

2. **Dockerizing the Backend Service:**

    ```terminal|command=1|title=bash
    docker build -t my-express-image
    ```
    ```terminal|command=1|title=bash
    docker run --name express-container --rm -p 3001:3001 my-express-image
    ```
    
3. **Dockerizing the Frontend Service:**

    ```terminal|command=1|title=bash
    docker build -t react-image .
    ```
    ```terminal|command=1|title=bash
    docker run --name react-container --rm -p 3000:3000 -it react-image
    ```
4. **Service Optimization:**

## IV. Automating Build and Deployment with GitLab CI


## V. Creating Kubernetes YAML Files

1. **Installing Kubernetes Agent:**


2. **Creating Kubernetes YAML Files:**

[Link to code on GitLab](https://gitlab.com/yassinemidfig/mcomm/)

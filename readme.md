# Express Node.js Project

This is a Node.js Express project to connect to Solace messagng platform. Follow the instructions below to set up the project and run it using Docker.

## Table of Contents

- [Setup Guide](#setup-guide)
- [Running with Docker](#running-with-docker)

## Setup Guide

### Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js 18** or later installed on your machine.
- **Git** installed for cloning the repository.

### Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/CAG-HERMES/HERMES-samples-nodejs.git
cd HERMES-samples-nodejs
npm install
```

### Running the Application

You can run the application:
```bash
npm start
```

By default, the application will be available at http://localhost:3000.



## Running with Docker

### Building the Docker Image

To build the Docker image for the application, use the following command:

```bash
docker build -t your-application-name .
```

Replace your-application-name with a name for your Docker image.


### Running the Docker Container

Once the Docker image is built, you can run it using the following command:

```
docker run -p 3000:3000 your-application-name
```

This command maps port 3000 of the Docker container to port 3000 on your local machine.

You should now be able to access the application at http://localhost:3000.



### Passing Environment Variables
To pass environment variables to the Docker container, use the -e flag with the docker run command. For example:

``` bash
docker run -e "SOLACE_TOPIC_NAME=test" -e "SOLACE_URL=ws://host.docker.internal:8008" -t your-application-name
```

SOLACE_TOPIC_NAME = the topic you would like to subscribe

SOLACE_QUEUE_NAME = the queue you would like to consume

SOLACE_URL = the host you would like to connect to

SOLACE_USER = the given username

SOLACE_PASSWORD = the given password

SOLACE_VPN = the vpn name

You can replace these with the environment variables required by your application.
#!/usr/bin/env bash

sudo apt update && sudo apt install nodejs npm

# Install pm2 which is a production process manager for Node.js
sudo npm install -g pm2

# Stop any running instance of the application
pm2 stop example_app

# Change directory to where the application is downloaded
cd devops-lab-3-task

# Install application dependencies
npm install

# Start the application with pm2
pm2 start ./bin/www --name example_app

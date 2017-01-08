# Cards Against Megukas
An online [Cards Against Humanity](http://cardsagainsthumanity.com/) clone with easy to make custom decks.

This fork is meant to provide a containerized version of the original project, so setup can be as easy as forking and deploying to Bitnami, Digital Ocean, Heroku, et cetera.

## Quickstart
 - Install docker
    - `brew update`
    - `brew doctor`
    - `brew install docker docker-machine docker-compose`
 - Configure docker
    - `docker-machine create --driver virtualbox default`
    - `docker-machine env default`
    - `eval $(docker-machine env default)`
 - Start container
    - `docker-compose build`
    - `docker-compose up -d`
 - Get container ip
    - `docker-machine ip`

You can now open up a web browser and visit `<container-ip>:8000` to use the app as long as the containers are running.

## Dependencies
 - node.js
 - redis

## Running
For dev testing:
 - `npm install`
 - `node builder.js`

For production testing:
 - `docker-compse build`
 - `docker-compose up -d`

## Configuration
All config options for this project can be found in config.js.
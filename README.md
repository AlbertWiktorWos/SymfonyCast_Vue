# The Delightful World of Vue.js

This project is an introduction to Vue.js. It focuses on API integration, basic Vue components, and a well-organized project structure using Webpack aliases.

Well hi there! This repository holds the code and script
for the [The Delightful World of Vue.js](https://symfonycasts.com/screencast/vue) course on SymfonyCasts.

# First start
run DockerDesktop
run in command line next commands:
* `docker-compose up -d --build` - second time use `docker-compose up -d --build`
* `docker-compose exec php /bin/bash`
* `symfony check:requirements`
* `composer install`
* `npm install` or `yarn install`
for build assets run:
* `yarn watch` or `npm run watch` to compile assets whenever changes are made
* `yarn run dev` or `npm run dev` to compile assets once
* Open: http://localhost:8080/

# Better performance
* for performance issue with WSL2 in docker-desktop vendor directory is not in volumes, you have to set volumes in php container as below and run composer install in container!
    *  `- /var/www/project/vendor # ignore vendor folder`
* also remember to disable XDEBUG - look at .env file

## prepare database
* `symfony console doctrine:database:create` to create database on docker-compose basics
* `symfony console doctrine:migration:migrate`
* `symfony console doctrine:fixtures:load` to fill the database

additionally after changes run `symfony console make:migration` and then `symfony console doctrine:migration:migrate`

### link database to phpstorm:
We have to create new data source with mysql. Then in properties we added some config:
* Host: `localhost`
* Port: `4306`
* User: `vue_admin`
* Password `vue_tester`
* Database `vue_database`

## In main directory we create docker-compose.yml file to config our containers for MySql, PHP and Nginx
### PHP
we create docker/php directory with Dockerfile with configuration where we:
* PHP  is mapped on - '9000:9000'
* Install the PHP extensions Symfony depends on.
* Set the working directory of the container to /var/www/project
* Install composer
* Install the Symfony CLI
* Installed npm, nodejs, yarn for encore and react admin
### Nginx
* We create nginx container that is mapped on - '8080:80'
* Nginx container has configuration in directory docker/nginx where we add listening on 80,
* we also set index of our symfony project (index.php), server_name "localhost" and root for public: /var/www/project/public;
### MySql
* MySql in version 8.0, with pass and database env.
* MySql is mapped on - '4306:3306'
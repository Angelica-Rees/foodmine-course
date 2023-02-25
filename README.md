# FoodmineCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## How to Run

1. Have Docker running [https://docs.docker.com/engine/install/]

2. Within this directory run `docker build -t foodmine .`

3. Run `docker run -d -it -p 80:80/tcp foodmine`

4. Go to browser and type `localhost:80`

5. When finished with it, run `docker stop <docker container id>`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

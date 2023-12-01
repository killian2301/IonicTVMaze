# IonicTVMaze Project

This is an Ionic application that I developed with Angular as the primary framework. The task required the use of Ionic and Angular, which are known for their robustness, scalability, and the ability to create cross-platform applications with a single codebase. Angular provides a powerful framework for managing complex applications, while Ionic offers a rich set of UI components for building high-quality user interfaces.

## Project Context

This project was an assignment where I used an open TV shows API (http://www.tvmaze.com/api) to create an application that allows users to view lists of TV shows based on different genres (drama, comedy, crime, etc.). The goal was to display popular TV shows based on their rating and genre on a dashboard. When a user clicks on a TV show, the details of that TV show are displayed on another screen. Users can also search for a TV show to get the details.

## Standalone Components

In this project, I decided not to use NgModules, as I wanted to explore the standalone functionality that was first introduced in Angular 14 and is now being released in the latest Ionic 7.5. This allows me to create and manage components independently, providing more flexibility and control over the application structure.

## Libraries

### SwiperJS

I used the SwiperJS library for managing the horizontal list of TV shows in this application. SwiperJS is a modern, touch-friendly, highly customizable, and performant library used to implement mobile touch sliders and horizontal scrolling lists. It provides a variety of options to control how the slides and lists behave and appear.

## Architecture

In designing the application's architecture, I aimed to adhere to the best practices recommended by Angular and Ionic. The codebase is modular, with a clear separation of concerns, which I believe makes it easier to maintain and extend. I utilized Angular's reactive forms for form handling and HttpClient for making HTTP requests, as these are widely accepted practices in the Angular community.

I also used Jest for testing, which is a powerful JavaScript testing framework with a focus on simplicity.

## Prerequisites

- Node.js version 18.15.0
- npm version 9.5.0

## Running the Application

To run the application, follow these steps:

1. Navigate to the project directory in your terminal.
2. Install the project dependencies by running the command:
   `npm install`

3. Once the dependencies are installed, start the application by running the command:
   `npm start`

The application will be available at `http://localhost:4200`.

## Testing

To run the tests, use the following command:
`npm test`

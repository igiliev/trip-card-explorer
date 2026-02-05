# Trip Explorer — React Mini App

A small React application that displays a list of travel destinations using a clean component architecture, responsive layout, and modern UI patterns.
The project focuses on readability, performance, and thoughtful user experience.

## Overview

This app fetches trip data from a local JSON file and displays it as a responsive grid of cards.
Users can search, sort, and view detailed trip information in a modal.

The project demonstrates:

* component architecture

* clean React hooks usage

* async data handling

* UI/UX decision making

* performance awareness

## Features

### Data Fetching & State

* Fetches trip data from a local data.json

* Custom useTrips hook manages:

* loading state

* error handling

* data storage

* Graceful handling of async failures

### Trip Grid & Cards

Responsive grid layout:

* 3 columns (desktop)

* 2 columns (tablet)

* 1 column (mobile)

Each card displays:

* image

* title

* rating

* short description

Skeleton loaders shown while images load

Broken image URLs automatically replaced with placeholder

Images loaded using IntersectionObserver for better performance

### Modal Details

Clicking More Info opens modal with full trip details

Modal rendered using React Portal

Modal features:

* closes on Escape

* closes on backdrop click

* disables background scrolling

Placeholder image used if modal image fails

## Performance & UX Decisions

### Lazy Image Loading (IntersectionObserver)

A custom useInView hook loads images only when they are near the viewport.
This improves performance by:

* reducing initial network requests

* preventing scroll jank

* preloading images before visible

* displaying skeleton placeholders while loading

## Running the Project

In the project directory:

npm install

Installs all dependencies.

npm start

Runs the app in development mode.
Open http://localhost:3000
 to view it in the browser.

npm run build

Builds the app for production to the build folder.

## Notes

This project emphasizes clean architecture, maintainable React patterns, and thoughtful user experience rather than heavy external libraries or overengineering.
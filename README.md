
# CompeteMe

## Table of Contents

- Overview
- Stack
- Screenshot
- Goals and Process
- In-Progress

### Overview

*CompeteMe* is a pick-up sports application. It's goal is to connect individuals who seek to create and play in pick-up sporting competitions. Currently most pick-up sports events essentially rely on word-of-mouth between individuals who know one another. This application seeks to make pick-up sports more accessible by helping transform this nature of pick-up-sports.

### Stack

*CompeteMe* was built using Redux, React, and React-Router with a Firebase backend. The app pulls from the Google Maps Places API in order to allow search of parks and rendering of park locations on Event Cards.

### Screenshot

![CompeteMe Screenshot] (https://github.com/lfinney/competeMe/tree/master/src/assets/CompeteMe-1.0-Screenshot.png)

### Goals and Process

While crafting this application my goals were to refine my understanding of React and Redux, gain exposure on how to interface with and build an empty backend, and gain exposure to part of the Google Maps API.

Comparing this application to my previous projects, one can notices a clear trajectory in my growth of understanding how and when to use stateful React components. With the addition of Redux to my stack, I am able to continue this growth and further architect an application that puts a heavy processing load on as few components as possible and instead, leverage Redux actions to execute on and pass data. This application features only three components that are wired up to the Redux store, and these components perform most of the heavy lifting in terms of passing data around and managing what is rendering on the page.

In terms of a backend, this was the first time I had ever stared with an empty backend when it was necessary. Thankfully, Firebase provides a streamlined system that could be implemented into this application. One hurdle to solve in this process though was how to manage a user's selected events (i.e. competitions they RSVP'ed to). Firebase allows for simple implementation of Google authentication, but a developer can not explicitly add any other data to the sign-ed in user. You are left with essentially two options:
1. Make copies of all your users and store them as objects in firebase
2. Take the user Id that comes with each authenticated user and map it to the other parts of your store.
I chose the later approach, as I wanted to keep my backend as slim as possible. While the interface still needs some fine tuning, it provides a streamlined way to match users to their given events without needing to duplicate too much data.

Finally, I am quite the geography enthusiast. Prior to transitioning into web development, I taught high school social studies for six-years. My curiosity of geography found a natural place as a teacher, but I am excited now to take that curiosity in a different direction. Ever since I started school at Turing, I have been itching to get into Google's map data. While it is significantly more vast than I anticipated, I am excited by the possibilities it offers for development of future projects. In this project I was able to implement a simple park search feature so that users of this application can find and identify parks to meet at to play their given pick-up sports.

### In-Progress

While the "project" portion of this is complete, I will continue working on it as I am excited by it's scalability. Some open issues I have are:
- Improving search functionality
  - Grab user location to pre-load map search with maps immediately near them
  - Autocomplete for users while they are typing
  - Better optimized search
- Creating using profiles
  - Users should be able to favorite parks they like to play at and sports they prefer to play.
  - Users should be notified if an event is created that is by them and a sport they like
  - Users should be able to have a "friends" list to accumulate people they enjoy playing with
  - Users should be given events that are near them and in chronological order
- Styling improvements
  - User should be able to tell which events they've already selected when on main page
  - Add visual queue for how recent events will be occurring
- Search features
  - Users should be able to search through active competitions to find ones that interest them or are near them

I am always open to feedback and suggestions, so drop me a line.


_This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)._

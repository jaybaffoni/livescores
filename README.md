# LiveScores React

A simple application built to be a lightweight scoreboard. It makes a single call to an API to gather and display current football scores for the week.

## Running the application

The application can be run locally in the project directory as long as Node.js and NPM are installed:
```
npm start
```

## Using Netlify

This project can be hosted easily on Netlify, since it is a single-page application.

* [Netlify](https://app.netlify.com/) - Netlify Homepage
* [Live App](https://reverent-lamport-8427e8.netlify.com/) - Application running on my account

Netlify runs the application as a secured site, and the scores API is not secured.
This app calls a proxy to a Node.js API whose sole purpose is to call the scores API.

* [API](https://github.com/jaybaffoni/livescores-api) - GitHub project for backend

## Testing

The application has only one page and no additional routes. The only display is a grid of current football scores.

## Contributing

Contributions welcome! Some enhancements might include adding team logos, quarterly box-scores, or additional 'detail' pages when one of the games is selected.

## Author

* **James Baffoni** - *Initial work* - [jaybaffoni](https://github.com/jaybaffoni)

Contributors list yourselves here!



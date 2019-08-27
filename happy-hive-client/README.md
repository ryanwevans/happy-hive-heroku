# ~ Happy Hive ~

## React/Redux client-side application with a Rails API server
Final project for Flatiron School by Ryan Evans

Happy Hive is a "Chores for Rewards" web application.  It is intended as an application that families can use together.  Parents can add chores that need to be done, children can complete chores and earn points.  Points can then be used to claim rewards, which have been added by parents as incentives.

Chores and rewards can be added at any time. Sign in to complete a chore and earn it's points. When you've earned enough points, sign in and claim your reward!

Happy Hive is built with a React frontend, using Redux to manage global states, Redux Thunk to make asynchronous modifications to the store, and a Rails API for data persistence. 



## Usage

###Start the Rails API first:
- From the main project directory, change to the 'happy-hive-api' directory: `cd happy-hive-api`
- Run `bundle` to install dependencies
- To create the local database, run migrations: `rake db:migrate`
- Start the Rails API server on port 3001 (React app will run on port 3000): `rails s -p 3001`

###Start the React client-side application:
- Open a second terminal for running the client-side application
- From the main project directory, change to the 'happy-hive-client' directory: `cd happy-hive-client`
- Install the app locally by running: `npm install`
- Start the React application: `npm start`
- Node will automatically open http://localhost:3000/ in your browser



## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ryanwevans/happy-hive. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.



## License

Available as open source under the terms of the **MIT License** (http://opensource.org/licenses/MIT).



## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

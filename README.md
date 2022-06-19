Button props https://github.com/jsx-eslint/eslint-plugin-react/issues/1555

Card - Vertical text align on title

# ComeonGroup interview challenge

Login / logout functionality with private routes. Content filtering and game on page loading.

### User experience

- User can login and logout on the gamelist screen.
- User can filter by category and search term.
- Selected game is displayed.
- Total table: The user can click on the company's id and a modal will open containing a graph of the company's cumulative data for that range.

### Installation

To get the project set-up and running. Move into the client folder and npm install.

`npm install`
`npm start`

## Future work to do on the project

### Refactoring

- State selection for games list data could be refactored to be made cleaner.
- Move out functions to utils folder.
- Nested ternary in games list changed to object lookup.
- Memoize context values.

### Testing

- There are no tests. I would want to unit test the filtering functions and have some end to end tests for a successful path login and a invalid path login.

### Further functionality

- Forgot password capabilties
- Edit profile details
- Display previously played games list and current most popular games lists
- Logo when clicked returns user to homepage or sign-in depending on login state

### Styling

- Further styling on button hover, active states.
- Profile widget and logout button hidden in burger menu when viewed on mobile.
- Graph styling width is unresponsive, header resizing and labels.

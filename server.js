const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const client_id = 'eb480a4ddc7a48079dff53d83e41bf49';
const redirect_uri = 'http://localhost:3000/login';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const authParams = {
  client_id: client_id,
  response_type: 'code',
  redirect_uri: redirect_uri,
  scope:
    'user-read-playback-state user-modify-playback-state user-read-currently-playing user-follow-modify user-follow-read user-library-modify user-library-read streaming app-remote-control user-read-playback-position user-top-read user-read-recently-played playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-private user-read-email',
};

app.get('/auth', (req, res) => {
  const searchParams = new URLSearchParams(authParams).toString();
  return res.redirect(
    'https://accounts.spotify.com/authorize?' +
      searchParams
  );
});

// set up catch-all route handler
app.use((req, res) => {
  res.sendStatus(404);
});

// set up middleware global error handler
app.use((err, req, res, next) => {
  // default error to be displayed
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  // copy properties from default error object and returned err (if applicable) to new errObj
  const errObj = Object.assign({}, defaultErr, err);
  // console.log error
  console.log(errorObj.log);
  //end response cycle and send error status and message
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
})

module.exports = app;
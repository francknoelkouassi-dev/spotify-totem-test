import SpotifyWebApi from "spotify-web-api-node";

const clientId = '7860ef168309434796c34a3b6b9d576b',
    clientSecret = '0a278317ceae4ddd89163cad6ad05334';

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
    function (data: any) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

export default spotifyApi;

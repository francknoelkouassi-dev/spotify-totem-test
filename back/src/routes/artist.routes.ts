const artistRouter = require("express").Router();
import * as artistControllers from '../controllers/artist.controllers';

artistRouter
    .get('/', artistControllers.getArtists)
    .get('/:id', artistControllers.getArtistFromId)
    .get('/:id/albums', artistControllers.getAlbumsFromArtist)

export default artistRouter;

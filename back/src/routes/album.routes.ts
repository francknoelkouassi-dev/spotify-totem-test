const albumsRouter = require("express").Router();
import * as albumsControllers from '../controllers/album.controllers';

albumsRouter
    .get('/', albumsControllers.getAlbums)
    .get('/:id', albumsControllers.getAlbumFromId)
    .get('/:id/tracks', albumsControllers.getTracksFromAlbum)

export default albumsRouter;

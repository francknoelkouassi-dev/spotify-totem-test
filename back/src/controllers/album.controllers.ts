import {NextFunction, Request, Response} from "express";
import spotifyApi from "../config/spotify";

export let getAlbums = async (req: Request, res: Response, next: NextFunction) => {
    let ids: any;
    ids = req.query.artistsId;
    ids = (ids !== undefined) ? ids.split(',') : '';
    try {
        const albums = await spotifyApi.getAlbums(ids);
        if (albums) res.status(200).json(albums.body)
        else res.status(404).json('Data not found');
    } catch (e) {
        next(e);
    }
};

export let getAlbumFromId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const album = await spotifyApi.getAlbum(id);
        if (album) res.status(200).json(album.body)
        else res.status(404).json('Data not found');
    } catch (e) {
        next(e);
    }
};

export let getTracksFromAlbum = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const albumId = req.params.id;
        const tracks = await spotifyApi.getAlbumTracks(albumId);
        if (tracks) res.status(200).json(tracks.body);
        else res.status(404).json('Data not found');
    } catch (e) {
        next(e);
    }
};

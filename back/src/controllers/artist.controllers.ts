import {NextFunction, Request, Response} from "express";
import spotifyApi from "../config/spotify";

export let getArtists = async (req: Request, res: Response, next: NextFunction) => {
    let ids: any;
    ids = req.query.artistsId;
    ids = (ids !== undefined) ? ids.split(',') : '';
    try {
        const artists = await spotifyApi.getArtists(ids);
        if (artists) res.status(200).json(artists.body)
        else res.status(404).json('Data not found');
    } catch (e) {
        next(e);
    }
};

export let getArtistFromId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const artist = await spotifyApi.getArtist(id);
        if (artist) res.status(200).json(artist.body)
        else res.status(404).json('Data not found');
    } catch (e) {
        next(e);
    }
};

export let getAlbumsFromArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artistId = req.params.id;
        const albums = await spotifyApi.getArtistAlbums(artistId)
        console.log(albums.body);
        if (albums) res.status(200).json(albums.body);
        else res.status(404).json('Data not found');
    } catch (e) {
        next(e);
    }
};

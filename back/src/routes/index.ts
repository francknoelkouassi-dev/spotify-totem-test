import spotifyApi from "../config/spotify";
import {NextFunction, Request, Response} from "express";
import artistRouter from "./artist.routes";
import albumsRouter from "./album.routes";

const router = require("express").Router();
router
    .use('/artists', artistRouter)
    .use('/albums', albumsRouter)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(spotifyApi.getAccessToken());
});

export default router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const spotify_1 = __importDefault(require("../config/spotify"));
const artist_routes_1 = __importDefault(require("./artist.routes"));
const album_routes_1 = __importDefault(require("./album.routes"));
const router = require("express").Router();
router
	.use('/artists', artist_routes_1.default)
	.use('/albums', album_routes_1.default);
router.get('/', (req, res, next) => {
	res.send(spotify_1.default.getAccessToken());
});
exports.default = router;
//# sourceMappingURL=index.js.map

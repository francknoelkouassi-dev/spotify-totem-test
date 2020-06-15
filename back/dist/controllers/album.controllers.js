"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function (resolve) {
			resolve(value);
		});
	}
	
	return new (P || (P = Promise))(function (resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
};
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.getTracksFromAlbum = exports.getAlbumFromId = exports.getAlbums = void 0;
const spotify_1 = __importDefault(require("../config/spotify"));
exports.getAlbums = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
	let ids;
	ids = req.query.artistsId;
	ids = (ids !== undefined) ? ids.split(',') : '';
	try {
		const albums = yield spotify_1.default.getAlbums(ids);
		if (albums)
			res.status(200).json(albums.body);
		else
			res.status(404).json('Data not found');
	} catch (e) {
		next(e);
	}
});
exports.getAlbumFromId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
	try {
		const id = req.params.id;
		const album = yield spotify_1.default.getAlbum(id);
		if (album)
			res.status(200).json(album.body);
		else
			res.status(404).json('Data not found');
	} catch (e) {
		next(e);
	}
});
exports.getTracksFromAlbum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
	try {
		const albumId = req.params.id;
		const tracks = yield spotify_1.default.getAlbumTracks(albumId);
		if (tracks)
			res.status(200).json(tracks.body);
		else
			res.status(404).json('Data not found');
	} catch (e) {
		next(e);
	}
});
//# sourceMappingURL=album.controllers.js.map

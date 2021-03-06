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
exports.getAlbumsFromArtist = exports.getArtistFromId = exports.getArtists = void 0;
const spotify_1 = __importDefault(require("../config/spotify"));
exports.getArtists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
	let ids;
	ids = req.query.artistsId;
	ids = (ids !== undefined) ? ids.split(',') : '';
	try {
		const artists = yield spotify_1.default.getArtists(ids);
		if (artists)
			res.status(200).json(artists.body);
		else
			res.status(404).json('Data not found');
	} catch (e) {
		next(e);
	}
});
exports.getArtistFromId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
	try {
		const id = req.params.id;
		const artist = yield spotify_1.default.getArtist(id);
		if (artist)
			res.status(200).json(artist.body);
		else
			res.status(404).json('Data not found');
	} catch (e) {
		next(e);
	}
});
exports.getAlbumsFromArtist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
	try {
		const artistId = req.params.id;
		const albums = yield spotify_1.default.getArtistAlbums(artistId);
		console.log(albums.body);
		if (albums)
			res.status(200).json(albums.body);
		else
			res.status(404).json('Data not found');
	} catch (e) {
		next(e);
	}
});
//# sourceMappingURL=artist.controllers.js.map

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const spotify_1 = __importDefault(require("./spotify"));
exports.default = {
	"clientId": "7860ef168309434796c34a3b6b9d576b",
	"clientSecret": "0a278317ceae4ddd89163cad6ad05334",
	"redirectUri": "http://localhost:443/callback",
	"accessToken": spotify_1.default.getAccessToken()
};
//# sourceMappingURL=config.js.map

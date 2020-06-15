"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
// Our Express APP config
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.raw());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({extended: false}));
// API routes
app.use(routes_1.default);
app.use((req, res, next) => {
	next(http_errors_1.default(404));
});
// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
app.set("port", process.env.PORT || 443);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map

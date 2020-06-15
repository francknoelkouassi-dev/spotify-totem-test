import Home from "@/pages/Home";
import Artists from "@/pages/Artists";
import Album from "@/components/Album";
import Song from "@/components/Song";
import store from "../store"

const goBack = (from, next) => {
	const hasPrevRoute = Boolean(from.name);
	
	next(hasPrevRoute ? false : '/');
};

const beforeCheckAlbum = (to, from, next) => {
	const hasSong = store.getters.hasAlbum;
	
	if (hasSong) {
		next();
	} else {
		goBack(from, next);
	}
};

const beforeCheckTrack = (to, from, next) => {
	const hasSong = store.getters.hasTrack;
	
	if (hasSong) {
		next();
	} else {
		goBack(from, next);
	}
};

const routes = [
	{path: '/', component: Home, name: 'Home', meta: {transitionName: 'slide'}},
	{path: '/artists', component: Artists, name: 'Artist', meta: {transitionName: 'slide'}},
	{
		path: '/artist/:id/albums',
		component: Album,
		name: 'Album',
		meta: {transitionName: 'slide'},
		beforeEnter: beforeCheckAlbum
	},
	{
		path: '/album/:id/tracks',
		component: Song,
		name: 'Track',
		meta: {transitionName: 'slide'},
		beforeEnter: beforeCheckTrack
	}
];

export default routes;

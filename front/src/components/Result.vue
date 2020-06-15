<template>
	<div class="card card__big margin-top-xxl">
		<Spinner v-if="loading"/>
		
		<h2 class="search-title" v-if="!showDefaultSearch">{{ type }}s</h2>
		
		<ul class="artist-list flex-list" v-if="isArtist">
			<Artist :artist="artist" :key="artist.id" v-for="artist in artists"/>
		</ul>
		
		<ul class="album-list flex-list" v-if="isAlbum">
			<Album :album="album" :key="album.id" v-for="album in albums"/>
		</ul>
		
		<ul class="track-list flex-list" v-if="isTrack">
			<li :key="track.id" class="track-wrapper flex-no-borders" v-for="track in tracks">
				<Song :track="track"/>
			</li>
		</ul>
	</div>
</template>

<script>
	import Spinner from './Spinner.vue';
	import Artist from './Artist.vue';
	import Song from './Song.vue';
	import Album from './Album.vue';
	
	export default {
		name: 'Result',
		components: {
			Spinner, Artist, Album, Song
		},
		props: {
			results: {
				type: Array,
				required: true
			},
			type: {
				type: String,
				required: true
			},
			loading: {
				type: Boolean,
				default: false
			},
			showDefaultSearch: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			isArtist() {
				return this.type === 'artist';
			},
			isAlbum() {
				return this.type === 'album';
			},
			isTrack() {
				return this.type === 'track';
			},
			artists() {
				return this.isArtist ? this.results : [];
			},
			tracks() {
				return this.isTrack ? this.results : [];
			},
			albums() {
				return this.isAlbum ? this.results : [];
			}
		},
		methods: {}
	};
</script>

<style lang="less">
	.search-title {
		text-transform: capitalize;
		margin-bottom: 0;
		
		&.default {
			text-transform: none;
			margin-bottom: 0;
			line-height: 90%;
		}
	}
	
	.track-wrapper {
		display: block;
		margin: 0;
		padding: 0 10px;
		width: 100%;
		box-sizing: border-box;
	}
</style>

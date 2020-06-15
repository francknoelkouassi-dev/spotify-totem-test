<template>
	<section class="view">
		<Result :loading="loading" :results="results" :show-default-search="!hasSearch" :type="type"/>
	</section>
</template>

<script>
	import Result from '@/components/Result.vue';
	import axios from "axios";
	
	export default {
		name: 'Main',
		components: {
			Result
		},
		data() {
			return {
				results: [],
				type: '',
				hasSearch: false,
				loading: true
			};
		},
		mounted() {
			this.getArtists();
		},
		methods: {
			getArtists() {
				this.loading = true;
				this.hasSearch = false;
				
				axios
					.get('http://localhost:443/artists?artistsId=2hazSY4Ef3aB9ATXW7F5w3,6J6yx1t3nwIDyPXk5xa7O8')
					.then(response => {
						this.results = response.data.artists;
						window.stopLoadingWithDelay();
					})
					.catch(error => {
						console.log(error)
						this.errored = true
					})
					.finally(() => this.loading = false)
				
				console.log(this.results);
			},
		}
	};
</script>

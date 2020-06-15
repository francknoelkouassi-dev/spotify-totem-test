<template>
	<ul class="tag-list">
		<li :key="tag.name" class="tag" v-for="tag in tags">
			<span style="margin-right: 2px;">{{ tag.name | lowercase }}</span>
			<em class="fas fa-tag"/>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Tags',
		props: {
			tags: {
				type: Array,
				required: true
			}
		}
	};
</script>

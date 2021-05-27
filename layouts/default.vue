<template>
	<div id="app" class="d-flex flex-column vh-100">
		<Header />
		<main role="main" class="d-flex justify-content-center align-items-center h-100 px-lg-0 px-3 pb-5">
			<Nuxt />
		</main>
		<Ads />
		<Footer />
	</div>
</template>

<script>
export default {

}
</script>

<style>
#app
{
	box-shadow: inset 0 0 210px rgba(0,0,0,.21);
}

.ads
{
	max-height: 70px;
}
</style>

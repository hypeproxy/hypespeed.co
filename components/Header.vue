<template>
	<header class="navbar d-flex navbar-expand-lg navbar-light">
		<div class="container">
			<NuxtLink to="/" class="navbar-brand d-flex align-items-center w-25 me-5">
				<i class="bx bx-wifi text-primary me-2"></i>
<!--				<img :src="require('assets/logo.png')" class="me-2 align-middle" style="height: 21px;" alt="hypespeed.co powered by hypeproxy.io" />-->
				<span class="fw-bold">HypeSpeed</span>.co
				<sup><label class="badge bg-transparent text-primary">Beta</label></sup>
			</NuxtLink>
			<button class="navbar-toggler border-0 p-0" data-bs-toggle="collapse" type="button"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-center">
				<ul class="navbar-nav">
					<li class="nav-item">
						<NuxtLink to="/" exact-active-class="active" class="nav-link px-0 mx-lg-3 mx-0">
<!--							<i class="bx bxs-home align-middle me-1"></i>-->
							Home
						</NuxtLink>
					</li>
					<li class="nav-item">
						<NuxtLink to="/about" exact-active-class="active" class="nav-link px-0 mx-lg-3 mx-0">
<!--							<i class="bx bxs-binoculars align-middle me-1"></i>-->
							About Us
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="w-25 text-end d-none d-lg-block">
				<a href="https://hypeproxy.io/?utm_source=hypespeed.co&utm_campaign=button" target="_blank" class="btn btn-primary px-3 text-white rounded-pill">
					<i class="bx bxs-hot me-1"></i>
					Need 4G Proxies?
				</a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style scoped>
header
{
	padding-top: 2.1rem !important;
	padding-bottom: 1rem !important;
}

.nav-link {
	display: inline-block;
	position: relative;
	margin: 0 12px;
}
.nav-link:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #2f495e;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}
.nav-link.active:after,
.nav-link:hover:after
{
	transform: scaleX(1);
	transform-origin: bottom left;
}

@media (max-width: 992px) {
	header {
		padding: 1rem 0.5rem !important;
	}
}
</style>

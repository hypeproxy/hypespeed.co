<template>
	<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
		<div id="popup" class="toast hide border-0" role="alert">
			<a href="https://hypeproxy.io/?utm_source=hypespeed.co&utm_campaign=button" class="toast-body d-flex">
				<img src="https://i.imgur.com/vRut9pm.png" class="ads me-3" alt="hypeproxy.io ads">
				<div>
					<h6 class="fw-normal">Powered by HypeProxy.io</h6>
					<p class="mb-0">High-Quality European 4G Dedicated Proxy 🚀</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Ads",
	mounted() {
		setTimeout(() => this.pop(), 500);
	},
	methods: {
		pop: function () {
			if(process.client) {
				let bootstrap = require('bootstrap');
				new bootstrap.Toast(document.getElementById('popup'), {
					autohide: false
				}).show();
			}
		}
	}
}
</script>

<style scoped>
a.toast-body
{
	text-decoration: none;
	color: inherit;
}
</style>

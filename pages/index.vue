<template>
  <div class="text-center">
<!--	  <img :src="require('~/assets/hype-min.png')" class="mb-4" alt="hypeproxy.io logo" />-->
	  <h1 v-if="status === 100" class="status fw-bold">
		  {{ getSpeed() }} MB/s
	  </h1>
	  <h1 v-else class="status fw-bold">
		  {{ status }}%
	  </h1>
	  <p v-if="timespan === 0" class="lead text-muted">Downloading 100 megabytes of random data.</p>
	  <p v-else class="lead text-muted">
		  Successfully completed speedtest, 100Mb downloaded in {{ test() }}.
	  </p>
<!--	  <h1 class="display-1 fw-bold">HypeSpeed.co</h1>-->
<!--	  <p class="h3 fw-light mb-4">A fast.com alternative powered by HypeProxy.io</p>-->
<!--	  <div class="mb-5">-->
<!--		  <a class="btn btn-dark btn-lg" href="https://medium.com/@clintnetwork/lucid-an-http-key-value-store-c0e734586e26">-->
<!--			  <i class="bx bxs-hot me-1"></i> Visit HypeProxy.io-->
<!--		  </a>-->
<!--		  <a class="btn btn-outline-dark btn-lg" href="https://docs.lucid-kv.store/">-->
<!--			  <i class="fas fa-book"></i>&nbsp; Official Documentation-->
<!--		  </a>-->
<!--	  </div>-->
  </div>
</template>

<script>
export default {
	data() {
		return {
			status: 0,
			timespan: 0
		}
	},
	async mounted() {
		let startDate = performance.now();
		await this.$axios.get('Insight/SpeedTest/100mb', {
			onDownloadProgress: progressEvent => {
				const total = parseFloat(progressEvent.currentTarget.getResponseHeader('Content-Length'))
				const current = progressEvent.currentTarget.response.length
				this.status = Math.floor(current / total * 100)
			}
		}).then(res => {
			this.status = 100;
			let endDate = performance.now()
			this.timespan = endDate - startDate;
			return res.data;
		})
	},
	methods: {
		test: function () {
			const humanizeDuration = require("humanize-duration");
			return humanizeDuration(this.timespan, { round: true });
		},
		getSpeed: function () {
			return (100 / this.timespan * 1000).toFixed(0);
		}
	}
}
</script>

<style>
img
{
	width: 177px;
}

.status
{
	font-size: 10em;
}
</style>

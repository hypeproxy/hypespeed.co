<template>
  <div class="text-center">
<!--	  <img :src="require('~/assets/hype-min.png')" class="mb-4" alt="hypeproxy.io logo" />-->
	  <h1 v-if="status === 100" class="status fw-bold">
		  {{ getSpeed() }} Mb/s
	  </h1>
	  <h1 v-else class="status fw-bold">
		  {{ status }}%
	  </h1>
	  <p v-if="timespan === 0" class="lead text-muted">Downloading 100 megabytes of random data.</p>
	  <p v-else class="lead text-muted">
		  Successfully completed speedtest, 100MB downloaded in {{ test() }}.
	  </p>
<!--	  <button v-if="status === 100" class="btn btn-lg btn-outline-secondary mt-4 d-inline-flex align-items-center">-->
<!--		  <i class="bx bx-info-circle me-2"></i>-->
<!--		  More Informations-->
<!--	  </button>-->
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
		await this.$axios.get('http://cdn.hypeproxy.io:9090/100mb.bin', {
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

<style scoped>
img
{
	width: 177px;
}

.status
{
	font-size: 10em;
}

@media (max-width: 992px)
{
	.status
	{
		font-size: 5em;
	}
}
</style>

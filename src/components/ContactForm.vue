<template>
	<b-container>
		<b-row class="form-holder">
			<b-col>
				<b-form
						@submit.prevent="onSubmit"
						@reset="onReset"
				>
					<b-form-group
							id="input-group-1"
							label="Email address:"
							label-for="input-1"
					>
						<b-form-input
								v-model="form.email"
								type="email"
								name="email"
								id="email"
								placeholder="Enter email"
								required
						></b-form-input>
					</b-form-group>

					<b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
						<b-form-input
								v-model="form.name"
								type="text"
								name="name"
								id="name"
								placeholder="Enter name"
								required
						></b-form-input>
					</b-form-group>

					<b-form-group id="input-group-2" label="Message" label-for="input-2">
						<b-form-textarea
								name="message"
								v-model="form.message"
								id="input-2"
								rows="5"
								required
						></b-form-textarea>
					</b-form-group>

					<b-button type="submit" variant="primary">Submit</b-button>
				</b-form>
				<p v-if="fail">Something went wrong</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import axios from "axios";

export default {
	name: "ContactForm",
	data() {
		return {
			form: {
				email: '',
				name: '',
				message: '',
			},
			fail: false,
		}
	},
	methods: {
		onSubmit() {
			axios.post('https://formspree.io/f/mknpyqar', this.form)
					.then(() => {
						//sweet alert success msg
						this.$swal.fire({
							title: 'Contact form sent!',
							icon: 'success',
							confirmButtonText: 'ok!'
						}).then(() =>	this.onReset()
						)
					})
					.catch(() => this.fail = true)
		},
		onReset() {
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
      }
	}
}
</script>

<style scoped>
.form-holder {
	max-width: 30rem;
	margin: 0 auto;
}
</style>
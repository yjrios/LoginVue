<template>
<div>
	<ScreenFondo />
</div>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header input-group-back">
				<router-link to="/confirmemail"> 
					<ButtonBack/>
				</router-link>
				<h3> Recover Password</h3>
			</div>
			<div class="card-body">
				<Form v-slot="{ submitForm }" :validation-schema="schema" as="div">
					<form @submit.prevent="submitForm">
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"><img src="../assets/pass.png"></i></span>
							</div>
							<Field name="password" type="password" class="form-control" placeholder="Password"/>
							<ErrorMessage name="password" as="div" v-slot="{ message }" class="input-group form-group">
								<p class="alert alert-danger">Error: {{ message }}</p>
							</ErrorMessage>
						</div>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"><img src="../assets/pass.png"></i></span>
							</div>
							<Field name="confirmpassword" type="password" class="form-control" placeholder="Confirm Password"/>
							<ErrorMessage name="confirmpassword" as="div" v-slot="{ message }" class="input-group form-group">
								<p class="alert alert-danger">Error: {{ message }}</p>
							</ErrorMessage>
						</div>
						<div class="form-group">
							<DesignButton />
						</div>
					</form>
				</Form>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
//import swal from 'sweetalert';
import ScreenFondo from '@/components/ScreenFondo.vue'
import * as yup from 'yup';
import DesignButton from './DesignButton.vue'
import ButtonBack from './ButtonBack.vue'

export default {
  name: 'SingIn',
  components:{
	Field,
	ErrorMessage,
	ScreenFondo,
	Form,
	DesignButton,
	ButtonBack
  },
  data () {
	const schema = yup.object({
		password: yup.string()
		.required()
		.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
		"Must have 8 charasters, 1 Uppercase, 1 lowercase, 1 number and 1 special charater")
		.label("Password"),

		confirmpassword: yup.string()
		.required()
		.min(8, "Password must be 8 characters")
		.oneOf([yup.ref("password")], "confirmimg Password ")
		.label("Confirm Password"),
	});
	
	return {
	schema,
	}
  },
  methods:{
	submitForm(){

	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
height: 100%;
align-content: center;
}

.input-group p{
width: 100%;
height: auto;
float: center;
color: red;
margin: 0;
padding: 0;
word-wrap: break-word;
font-size: 0.8em;
}

.card{
height: auto;
margin-top: 150px;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.card-header h3{
color: white;
margin-right: 40px;
}

.input-group-back{
float: left;
}

.input-group-prepend span img{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;
}

</style>
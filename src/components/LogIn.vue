<template>
<div>
	<ScreenFondo />
</div>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
			<h3>Log In</h3>
			</div>
			<div class="card-body">
				<Form v-slot="{ handleSubmit }" :validation-schema="schema">
					<form @submit.prevent="handleSubmit( $event, loginuser )">
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user"><img src="../assets/usuario.png"></i></span>
							</div>
							<Field name="email" type="email" class="form-control" placeholder="Type E-mail" />
							<ErrorMessage name="email" as="div" v-slot="{ message }" class="input-group form-group">
								<p class="alert alert-danger">Error: {{ message }}</p>
							</ErrorMessage>
						</div>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"><img src="../assets/pass.png"></i></span>
							</div>
							
							<Field name="password" type="password" class="form-control" placeholder="Type Password"/>
							<span class="seePassword input-group-text"><i class="fas fa-key seePassword "><img src="../assets/private.png"></i></span>
							<ErrorMessage name="password" as="div" v-slot="{ message }" class="input-group form-group">
								<p class="alert alert-danger">Error: {{ message }}</p>
							</ErrorMessage>
						</div>
						<div class="row align-items-center">
							<router-link to="confirmemail" class="remember">Forgot Password ?</router-link>
							<router-link to="registeruser" class="remember">Sign Up</router-link>
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
import * as yup from 'yup';
import DesignButton from './DesignButton.vue';
import ScreenFondo from '@/components/ScreenFondo.vue'

export default {
  name: 'LogIn',
  
  components:{
	Field,
	ErrorMessage,
	Form,
	DesignButton,
	ScreenFondo,
  },
  data () {
	const schema = yup.object({
		password: yup.string()
		.required()
		.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
		"Must have 8 charasters, 1 Uppercase, 1 lowercase, 1 number and 1 special charater")
		.label("Password"),

		email: yup.string()
		.required()
		.label("Email")
		.matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		"Type a email valid, example: aaaaaaa@domain.com")
	});
	
	return {
		schema,
		datos: {},
		errorBoolean: false,
		paylod: {}
	}
},
  methods:{
	async loginuser(values){
		
		this.paylod={
			email: values.email,
			password: values.password
		}
		console.log(this.paylod)
		await this.axios.post('/login', this.paylod)
		.then(resp =>{
			console.log(resp)
			
		})
		.catch(error => {
			console.log('Error en respo '+error)
			this.errorBoolean = true
			if(error.response.status == 404){
				console.log('error 404')
			}else if(error.response.status == 401){
				console.log('error 401, error en password')
			}else{
				console.log('Any other error')			
			}
		})
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

.card{
height: auto;
margin-top: 150px;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.input-group p{
width: 100%;
height: auto;
float: center;
color: red;
margin: 0;
padding: 0;
font-size: 0.8em;
word-wrap: break-word;
}

.card-header h3{
color: white;
}

.input-group-prepend span img{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

.seePassword{
	background-color: white;
	border: 0 !important;
}

.seePassword img{
width: 30px;
color: black;
text-align: center;
border: 0 !important;
margin: 0 0;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;
}

.remember 
{
width: 50%;
height: 10px;
margin-top: 20px;
margin-bottom: 10px;
margin-left: 100px;
margin-right: 100px;
color: white;
text-decoration: none;
}

</style>

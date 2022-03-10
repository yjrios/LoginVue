<template>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
			<h3>Log In</h3>
			</div>
			<div class="card-body">
				<Form v-slot="{ submitForm }" :validation-schema="schema" as="div">
					<form @submit.prevent="submitForm">
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user"><img src="../assets/usuario.png"></i></span>
							</div>
							<Field name="email" type="email" class="form-control" placeholder="E-mail" />
							<ErrorMessage name="email" as="div" v-slot="{ message }" class="input-group form-group">
								<p class="alert alert-danger">Error: {{ message }}</p>
							</ErrorMessage>
						</div>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"><img src="../assets/pass.png"></i></span>
							</div>
							<Field name="password" type="password" class="form-control" placeholder="password"/>
							<ErrorMessage name="password" as="div" v-slot="{ message }" class="input-group form-group">
								<p class="alert alert-danger">Error: {{ message }}</p>
							</ErrorMessage>
						</div>
						<div class="row align-items-center">
							<router-link to="singin" class="remember">Forgot Password ?</router-link>
						</div>
						<div class="form-group">
							<input type="submit" value="Login" class="btn float-right login_btn" >
						</div>
					</form>
				</Form>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { Form,Field, ErrorMessage } from 'vee-validate';
//import swal from 'sweetalert';
import SingIn from './SingIn.vue'
import * as yup from 'yup';

export default {
  name: 'LogIn',
  SingIn,
  components:{
	Field,
	ErrorMessage,
	Form
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
	}
  },
  methods:{
	/*validatepassword(){

		if(!(this.error = /\d/.test(this.password))){

			return this.msg="Ivalid Password";
		}
		
	},
	login(){
		console.log(this.email);
	}
	isRequired(){
		if(this.password && this.password.trim()){
			return true;
		}
		if(this.email && this.email.trim()){
			return true;
		}
		return this.msg="Required this field";
	}  */
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
font-size: 1em;
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

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;
}

.remember 
{
width: 50%;
height: 20px;
margin-top: 15px;
margin-bottom: 15px;
margin-left: 100px;
margin-right: 100px;
color: white;
text-decoration: none;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}
</style>

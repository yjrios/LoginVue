<template>
<div>
	<ScreenFondo />
</div>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header input-group-back" >
				<router-link to="/login">
					<ButtonBack />
				</router-link>
				<h3>Recover Password</h3>
			</div>
			<div class="card-body">
				<Form v-slot="{ submitForm }" :validation-schema="schema" as="div">
					<form @submit.prevent="submitForm">
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user"><img src="../assets/usuario.png"></i></span>
							</div>
							<Field name="email" type="email" class="form-control" placeholder="Type E-mail" />
							<ErrorMessage name="email" as="div" v-slot="{ message }" class="input-group form-group">
								<p class="alert alert-danger">Error: {{ message }}</p>
							</ErrorMessage>
						</div>
						
						<div class="form-group">
							<router-link to="signin">
								<DesignButton value="Enviar" />
							</router-link>
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
import * as yup from 'yup';
import DesignButton from './DesignButton.vue';
import ScreenFondo from './ScreenFondo.vue';
import ButtonBack from './ButtonBack.vue';

export default {
  name: 'ConfirmEmail',
  
  components:{
	Field,
	ErrorMessage,
	Form,
	DesignButton,
	ScreenFondo,
	ButtonBack
  },
  data () {
	const schema = yup.object({

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
  }
</script>


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

.input-group-back{
float: left;
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


</style>

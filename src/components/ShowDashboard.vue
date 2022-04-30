<template>
<div>
    <ScreenFondo />
</div>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-body">
                <h1>¡LOG-IN EXITOSO!</h1>
                <h3>Aqui se mostrará el correo</h3>
			</div>
		</div>
	</div>
</div>
</template>

<script>

import ScreenFondo from './ScreenFondo.vue'

export default{
    name: 'ShowDashboard',

components:{
    ScreenFondo,
},
}
</script>
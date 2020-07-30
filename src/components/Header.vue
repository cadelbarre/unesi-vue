<template>
	<header>
		<div class="container-fluid border-bottom py-2 bg-blue-color text-white">
			<div class="container">
				<!-- ---------------------------- INFO TOP ---------------------------- -->
				<div class="row d-flex justify-content-between align-items-center">
					<div class="col-xs d-flex align-items-center">
						<i class="fas fa-map-marker-alt"></i>
						<small>Carrera 49C 80 - 125, Consultorio 506. Barranquilla - Colombia.</small>
					</div>
					<div class="col-xs d-flex align-items-center">
						<i class="fas fa-phone-alt"></i>
						<small>(57 5) 391 26 75 - (57) 315 261 86 95</small>
					</div>
					<div class="col-xs d-flex align-items-center">
						<i class="fas fa-envelope"></i>
						<small>unesi2007@hotmail.com</small>
					</div>
					<div class="col-xs d-flex align-items-center">
						<i class="far fa-clock"></i>
						<small>Lun - Vie: 9:00 AM - 5:00 PM</small>
					</div>

				</div>
			</div>
		</div>
		<!-- ---------------------------- NAVBAR ---------------------------- -->
		<div class="container-fluid py-3 border-bottom">
			<div class="container">
				<div class="row d-flex justify-content-between align-items-center">
					<div class="col-md-10">
						<nav class="nav d-flex align-items-center">
							<router-link class="navbar-brand" to="/home">
								<img src="../assets/img/unesilogo.png" width="30" height="30" alt="" loading="lazy" id="img__logo">
							</router-link>
							<router-link class="nav-link" to="/home">Inicio</router-link>
							<router-link class="nav-link" to="/nosotros">Nosotros</router-link>
							<router-link class="nav-link" to="/perfil">Perfil</router-link>
							<a class="nav-link" href="#">Expertos</a>
							<a class="nav-link" href="#">Servicios</a>
							<router-link class="nav-link" to="/Contacto">Contactenos</router-link>
						</nav>
					</div>
					<div class="col-md-2 d-flex justify-content-end">
						<a name="" id="" class="btn btn-primary" href="#" role="button">Agendar Cita</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
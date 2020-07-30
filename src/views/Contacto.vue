<template>
	<section>
		<div class="container-fluid py-5 bg-hero">
			<div class="jumbotron-fluid">
				<div class="container">
					<h4 class="display-4">Escribenos</h4>
				</div>
			</div>
		</div>

		<div class="container-fluid py-6">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 title">
						<h1 class="blue-color mb-4">Escribenos</h1>
						<p class="subtitle">Si tiene alguna pregunta, llámenos o complete el siguiente formulario y nos pondremos en contacto con usted lo más pronto posible.</p>
					</div> 
				</div>
	
				<!-- FORMULARIO -->
				<div class="row mt-5">
					<div class="col-md-5">
						<div class="d-inlineblock mb-5 pr-5">
							<h5 class="blue-color mb-3">Información General</h5>
							<p>Nuestro consultorio se encuentra ubicado en el Edificio Medico Continental. <br>
								Carrera 49C # 80 - 125, Conusltorio 506. <br>
								Teléfonos: (57 +5) 391 2675 <br>
								Celular: (57) 315 261 6685 <br>
								Correo: <span class="text-blue-color font-weight-bolder">unesi2007@hotmail.com</span>
								
							</p>
						</div>
						<div class="d-inlineblock mb-5 pr-5">
							<h5 class="blue-color mb-3">Horario de Atención</h5>
							<p>Lunes - Viernes:	9:00 AM - 5:00 PM <br>
								Sabado: CERRADO</p>
						</div>
					</div>
					<div class="col-md-7">
						<form>
							<div class="form-group">
								<input type="text" class="form-control py-4" id="" placeholder="Nombre Completo">
							</div>
							<div class="form-row">
								<div class="form-group col-md-6">
									<input type="text" class="form-control py-4" id="" placeholder="Télefono de Contacto">
								</div>
								<div class="form-group col-md-6">
									<input type="email" class="form-control py-4" id="" placeholder="Correo Electrónico">
								</div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control py-4" id="" placeholder="Asunto. Por ejemplo: Deseo agendar una cita.">
							</div>
							<div class="form-group">
								<textarea class="form-control py-3" id="" placeholder="Mensaje" cols="5" rows="5"></textarea>
							</div>
							
							<button type="submit" class="btn btn-primary mt-3">Enviar Mensaje</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- GOOGLE MAPS -->
		<div class="row border-top">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.1248438223846!2d-74.81445964218035!3d11.001109668161615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d911a5e8743%3A0x9a0c499ae4c390b5!2sCentro%20M%C3%A9dico%20Continental!5e0!3m2!1ses!2sco!4v1596229336764!5m2!1ses!2sco" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		</div>
	</section>
</template>

<script>
export default {
  name: 'Contacto'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
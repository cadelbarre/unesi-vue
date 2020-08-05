<template>
	<section v-enteractive>
		
		<!-- ------------------------------ CAROUSEL ------------------------------- -->
		<agile :autoplay-speed="5000" :speed="1500" autoplay="autoplay" :navButtons="true">
			<div class="slide">
				<img src="../assets/img/slides/1.jpg" class="d-block w-100" alt="...">
			</div>
			<div class="slide">
				<img src="../assets/img/slides/2.jpg" class="d-block w-100" alt="...">
			</div>
			<template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
			<template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
		</agile>

		<!-- ----------------------------- BIENVENIDA ------------------------------ -->
		<div class="container-fluid py-6">
			<div class="container">
				<div class="row">
					<div class="col-md px-5 d-flex justify-content-end">
						<img class="img-fluid" src="../assets/img/team/doctor1.jpg" alt="">
					</div>
					<div class="col-md px-5 m-auto ">
						<h1 class="blue-color mb-4">
							Bienvenidos a UNESI Ltda
						</h1>
						<div class="text-justify">
							<p>En nombre de todos los miembros le damos la bienvenida a nuestra página y le agradecemos la confianza que deposita en nosotros. Su visita es muy grata.</p>
							<p>Trabajamos todos los días del año para proveer la mejor atención y cuidado de su salud. Queremos brindarle la tranquilidad que usted necesita, por eso nuestro equipo de trabajadores altamente calificado, se mantiene a la vanguardia para poner a su disposición un excelente servicio en un ambiente seguro, confortable y con una atención humanizada al usuario.</p>
							<p>Esperamos que este sitio sea de su agrado y le provea la información requerida. Si tiene algún comentario o pregunta, no dude en comunicarse con nosotros, ya que estaremos atentos para atenderlo.</p> 
							<p>De nuevo muchas gracias y espero poder tener la oportunidad de atenderle.</p>
							<img src="" alt="">
							<h5>Dr. Jairo Martin Fernandez Henríquez.</h5>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ----------------------------- SERVICIOS ------------------------------ -->
		<div class="container-fluid bg-grey py-6">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 title">
						<h1 class="blue-color mb-4">Nuestros Servicios</h1>
						<p class="px-5">NACER equipo multidisciplinario compuesto por profesionales de las áreas de infertilidad, ginecología, andrología, perinatología, genética, biología de la reproducción humana y laboratorio clínico; que trabaja en el manejo integral de aquellas parejas que de forma natural no pueden concebir, brindándoles soluciones.</p>
					</div>
				</div>
				<div class="row d-flex justify-content-between pt-5">
					<div class="col-md-4">
						<div class="card" style="width: 18rem;">
							<img src="" class="card-img-top" alt="">
							<div class="card-body">
								<h5 class="card-title text-center">CONSULTA EXTERNA</h5>
								<p class="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Saber mas</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card" style="width: 18rem;">
							<img src="" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title text-center">PROCEDIMIENTOS ENDOVASCULARES</h5>
								<p class="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Saber mas</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card" style="width: 18rem;">
							<img src="" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title text-center">STROKE</h5>
								<p class="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Saber mas</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ------------------------------ CONTADOR ------------------------------- -->
		<div class="container-fluid">
			<div class="container py-6">
				<div class="row">
					<div class="col-sm-6">
						<h1 class="blue-color mb-4">Nuestra Labor en Cifras</h1>
						<p class="text-justify">Puede seguir leyendo sobre nuestras ventajas, pero usted puede leer los siguientes datos reales para asegurarte de todas las ventajas de nuestro trabajo clinico.</p>
						<p class="text-justify">Puede seguir leyendo sobre nuestras ventajas, pero usted puede leer los siguientes datos reales para asegurarte de todas las ventajas de nuestro trabajo clinico.</p>
						<p class="text-justify mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vero nam, labore eveniet assumenda cupiditate quo reprehenderit necessitatibus officiis a, natus quis nihil hic excepturi. Nemo animi porro, beatae ut.</p>
						<div class="row d-flex justify-content-between align-items-center">
							<div class="col-xs-3 text-center">
								<span><i class="fas fa-heartbeat fa-4x mb-3 text-blue-color"></i></span>
								<h1 class="blue-color "><b>10500</b></h1>
								<p class="text-muted">Pacientes</p>
							</div>
							<div class="col-xs-3 text-center">
								<span><i class="fas fa-user-md fa-4x mb-3 text-blue-color"></i></span>
								<h1 class="blue-color count"><b>20</b></h1>
								<p class="text-muted">Años</p>
							</div>
							
							<div class="col-xs-3 text-center">
								<span><i class="fas fa-procedures fa-4x mb-3 text-blue-color"></i></span>
								<h1 class="blue-color count"><b>276</b></h1>
								<p class="text-muted">Procedimientos</p>
							</div>
							<div class="col-xs-3 text-center">
								<span><i class="fas fa-user-graduate fa-4x mb-3 text-blue-color"></i></span>
								<h1 class="blue-color count"><b>96</b></h1>
								<p class="text-muted">Cursos, Diplomas</p>
							</div>
							
						</div>
					</div>
					<div class="col-sm-6">
						<div class="test"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- ----------------------------- INFO DOCTOR ----------------------------- -->
		<div class="row bg-blue-color">
			<div class="prueba"></div> 
			<div class="container-fluid">
				<div class="container py-6">
					<div class="row d-flex align-content-center justify-content-end">
						<div class="col-xs-6 offset-6 text-white" v-scrollanimation>
							<h1 class="text-white mb-3">Dr. Jairo Martin Fernandez Henríquez.</h1>
							<p>Jefe Sección de Cirugía Mínimamente Invasiva Ginecológica Clínica CarlosArdila Lulle</p>
							<p>"Una de mis mayores realizaciones es ayudar a las parejas a cumplir conel sueño de ser papas y para ello dedicamos todo el tiempo, nuestrosconocimientos y nuestro corazón para que esto sea una realidad."</p>
							<button class="btn btn-outline-light" type="button"> Saber mas </button>
						</div> 
					</div>
				</div>
			</div>
		</div>

		<!-- ----------------------------- TESTIMONIOS ------------------------------ -->
		<div class="container-fluid bg-grey py-6">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 title">
						<h1 class="blue-color mb-4">Que Opinan Nuestros Pacientes</h1>
						<p class="px-5">Te presentamos algunos de los agradecimientos de nuestros pacientes</p>
					</div>            
				</div>

				<div class="pt-5">
					<agile :autoplay-speed="6000" :speed="1500" autoplay="autoplay" :navButtons="false">
						<div class="slide" id="testimonios">
							<div class="px-5 text-center">
								<div class="card p-4 shadow-sm">
									<div class="quote">
										<img src="../assets/img/quote.png" alt="" class="img-fluid">
									</div>
									<img src="../assets/img/avatar1.png" alt="" class="avatar pb-3">
									<p class="font-italic pb-3">Gracias, mil gracias Doctor Javier Noriega R. por todo lo que has hecho por nosotros, por la confianza que nos has transmitido en todo momento, gracias por tu dedicacion y gran ser humano que eres. </p>
									<h5 class="blue-color">Cirugia Endovascular</h5>
								</div>
							</div>
						</div>
						<div class="slide" id="testimonios">
							<div class="px-5 text-center">
								<div class="card p-4 shadow-sm">
									<div class="quote">
										<img src="../assets/img/quote.png" alt="" class="img-fluid">
									</div>
									<img src="../assets/img/avatar1.png" alt="" class="avatar pb-3">
									<p class="font-italic pb-3">Un dia Papito Dios me dijo: "hija he escuchado tus oraciones y pondre un Angel en tu camino para hacer tu sueño de ser madre una realidad" Hoy con 29 semanas de embarazo agradezco al Padre Celestial por haber puesto en nuestra vida al Dr. Javier Noriega, un Ángel hecho ser humano que con su Sabiduría, sus benditas manos y la ayuda de Jesús lograron que hoy pueda decir que soy mama, soy la mujer más feliz del mundo y cada vez que siento en mi pancita las pataditas de Mi bebé no tengo con que agradecerle al Dr. Javier!</p>
									<h5 class="blue-color">Panangeografia</h5>
								</div>
							</div>
						</div>
					</agile>
					
				</div>				
			</div>
		</div>

		<!-- ------------------------------ HERO ------------------------------ -->
		<div class="container-fluid py-5" id="hero__bg">
			<div class="container">
				<div class="row text-center m-auto d-block" v-scrollanimation>
					<h1 class="display-3 text-white mb-4">TU SALUD EN LAS MEJORES MANOS.</h1>
					<p class="subtitle text-white">Agenda una cita con nosotros.</p>
					<button name="" id="" class="btn btn-outline-light m-auto" href="#" role="button">Solicitar Cita</button>
				</div>
				<div class="">
				</div>
			</div>
		</div>
		<!-- ------------------------------ PUBLICACIONES ------------------------------ -->
		<div class="container-fluid py-6">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 title">
						<h1 class="blue-color mb-4">Publicaciones</h1>
						<p class="px-5">En este seccion encontraremos las publicaciones de notas medicas y noticias relevantes al sector salud.</p>
					</div>            
				</div>
				<div class="row pt-5">
					se colocan las noticias
				</div>
			</div>
		</div>
	
	</section>
</template>

<script>
// import carousel from 'vue-owl-carousel2'
export default {
  name: 'Home',
  components: {  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url('../assets/css/vue-agile.css');
</style>
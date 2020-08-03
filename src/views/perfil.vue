<template>
    <section>
        <div class="container-fluid py-5 bg-hero">
            <div class="jumbotron-fluid">
                <div class="container">
                    <h4 class="display-4 blue-color">Nuestros Doctores</h4>
                </div>
            </div>
        </div>

        <!-- Perfil de Nuestros Doctores -->
        <div class="container-fluid py-6">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 m-auto text-center d-block">
                        <img src="../assets/img/team/doctor1.jpg" alt="" class="img-fluid px-3">
                        <p class="mt-4">Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean</p>
                        <h1>1-(800)-569-7890</h1>
                        <h1>hello@yourdomain.com</h1>
                    </div>
                    <div class="col-sm-6 d-block">
                        <h1 class="display-4 text-blue-color">Dr. Jario Fernanadez</h1>
                        <h5 class="mb-4 blue-color">Neurologist / Epilepsy Specialist / Cardiologist</h5>
                        <p class="text-justify">Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus neque purus ipsum neque dolor primis suscipit in magna dignissim, porttitor hendrerit diam</p>
                        <p class="text-justify">In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum mullam blandit tempor sapien</p>
                        <h5 class="mt-4 pb-2 border-bottom blue-color">Education + Trainings</h5>
                        <p class="text-justify">Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida</p>
                        <ul>
                            <li>Nemo ipsam egestas volute and turpis dolores quaerat</li>
                            <li>Nemo ipsam egestas volute and turpis dolores quaerat</li>
                            <li>Nemo ipsam egestas volute and turpis dolores quaerat</li>
                            <li>Nemo ipsam egestas volute and turpis dolores quaerat</li>
                        </ul>
                        <h5 class="mt-4 pb-2 border-bottom blue-color">Diplomas and Certificates</h5>
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
                <div class="row pt-5">
                    <div class="owl-carousel owl-theme" id="testimonios">
                        <div class="px-2 text-center">
                            <div class="card p-4 shadow-sm">
                                <div class="quote">
                                    <img src="../assets/img/quote.png" alt="">
                                </div>
                                <img src="../assets/img/avatar1.png" alt="" class="avatar pb-3">
                                <p class="font-italic pb-3">Gracias, mil gracias Doctor Javier Noriega R. por todo lo que has hecho por nosotros, por la confianza que nos has transmitido en todo momento, gracias por tu dedicacion y gran ser humano que eres. </p>
                                <h5 class="blue-color">Cirugia Endovascular</h5>
                            </div>
                        </div>
                        <div class="px-2 text-center">
                            <div class="card p-4 shadow-sm">
                                <div class="quote">
                                    <img src="../assets/img/quote.png" alt="">
                                </div>
                                <img src="../assets/img/avatar1.png" alt="" class="avatar pb-3">
                                <p class="font-italic pb-3">Un dia Papito Dios me dijo: "hija he escuchado tus oraciones y pondre un Angel en tu camino para hacer tu sueño de ser madre una realidad" Hoy con 29 semanas de embarazo agradezco al Padre Celestial por haber puesto en nuestra vida al Dr. Javier Noriega, un Ángel hecho ser humano que con su Sabiduría, sus benditas manos y la ayuda de Jesús lograron que hoy pueda decir que soy mama, soy la mujer más feliz del mundo y cada vez que siento en mi pancita las pataditas de Mi bebé no tengo con que agradecerle al Dr. Javier!</p>
                                <h5 class="blue-color">Panangeografia</h5>
                            </div>
                        </div>
                        <div class="px-2 text-center">
                            <div class="card p-4 shadow-sm">
                                <div class="quote">
                                    <img src="../assets/img/quote.png" alt="">
                                </div>
                                <img src="../assets/img/avatar3.png" alt="" class="avatar pb-3">
                                <p class="font-italic pb-3">Dr Jairo Fernandez, Quiero agradecerle su hermosa labor y colaboración para hacer mi sueño de ser madre una realidad hoy ... </p>
                                <h5 class="blue-color">Carlos Delbarre de la Cruz</h5>
                            </div>
                        </div>
                        <div class="px-2 text-center">
                            <div class="card p-4 shadow-sm">
                                <div class="quote">
                                    <img src="../assets/img/quote.png" alt="">
                                </div>
                                <img src="assets/img/avatar2.png" alt="" class="avatar pb-3">
                                <p class="font-italic pb-3">Gracias por hacerlo posible!!! Por mucho que te diga nunca sera suficiente para explicarte cuanto nos ha dado.. Gracias de corazon.. Muchas gracias tambien al maravilloso equipo de trabajo de la clinica nacer .. Mil y mil gracias y solo puedo devolver tanta felicidad con las oraciones que siempre elevare por ti mi doctor. Que dios te bendiga hoy y siempre..</p>
                                <h5 class="blue-color">Stroker</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'perfil'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
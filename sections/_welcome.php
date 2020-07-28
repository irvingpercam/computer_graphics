<!-- Start Welcome -->
<div class="container">
        <h4 class="welcome white-text center">Plano Inclinado</h4>
    </div>
        <br>
        <br>
        <br>
        <div class="row center">
            <a class="waves-effect waves-light btn-large indigo darken-4 white-text" style="font-family:glyphs;font-size:2vw;" onclick="showMainTopic()"><i class="material-icons left white-text">assignment</i>Vision general</a>
            </div>
        <br>
        <div class="row">
            <div class="col s8 offset-s2">
                <div class="content" id="mainTopic">
                    <p>
                        El plano inclinado es una máquina simple que consiste en una superficie plana que forma un ángulo con respecto a la horizontal. Su finalidad es reducir el esfuerzo requerido para elevar un objeto a una cierta altura.
                        Así que en vez de elevar verticalmente al objeto una altura h, se le hace recorrer una distancia d sobre la superficie del plano inclinado. Entonces la superficie contribuye a equilibrar una parte del peso del objeto, concretamente la componente vertical del mismo.
                        <br><br>
                        <img src="img/plano_inclinado_home.png" alt="plano_inclinado" class="responsive-image">

                        Si apoyamos un libro sobre un plano inclinado y comienza a deslizar, las fuerzas que actúan sobre el cuerpo son la fuerza normal (𝑁→), su peso (𝑃→) y la fuerza de rozamiento (𝐹→𝑅). Para calcular la fuerza resultante, deberemos sumarlas, sumar fuerzas es más sencillo si todas tienen la misma dirección o sus direcciones forman un ángulo de 90º y en nuestro caso, P no lo cumple. Por esta razón, podemos descomponer el peso en dos fuerzas, 𝑃→𝑥 y 𝑃→𝑦. Una vez que hagamos esto, si hacemos un giro a nuestro sistema de referencia, podrás comprobar que nuestro cuerpo en el plano inclinado que se desliza por la acción de su peso es equivalente al mismo caso en el que el cuerpo se encuentra en un plano horizontal y nosotros lo empujamos con una fuerza equivalente a 𝑃→𝑥.
                        <br><br>
                        <img src="img/libro.png" alt="plano_inclinado" class="responsive-image">

                    </p>
                    <br>
                    <br>
                    <!-- Buttons for redirecting -->
                    <div class="row center">
                        <a class="waves-effect waves-light btn white indigo-text text-darken-4" href="views/con_rozamiento.php">Plano inclinado con rozamiento</a><br><br>
                        <a class="waves-effect waves-light btn white indigo-text text-darken-4" href="views/sin_rozamiento.php">Plano inclinado sin rozamiento</a><br><br>
                        <a class="waves-effect waves-light btn white indigo-text text-darken-4" href="views/curva_peraltada.php">Curva peraltada</a>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
    <video autoplay muted loop id="myVideo">
        <source src="video/downhill.mp4" type="video/mp4">
    </video>
    <div class="fixed-action-btn">
        <a class="btn-floating btn-large indigo darken-4">
            <i class="large material-icons">video_library</i>
        </a>
        <ul>
            <li><a class="btn-floating green accent-4" id="playBtn" onclick="playVideo()"><i class="material-icons">play_arrow</i></a></li>
            <li><a class="btn-floating red accent-4" id="pauseBtn" onclick="pauseVideo()"><i class="material-icons">pause</i></a></li>
        </ul>
</div>
<!-- End Welcome -->
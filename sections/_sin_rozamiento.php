<!-- Start Welcome -->
<div class="container">
        <h4 class="titles white-text center">Plano inclinado sin rozamiento</h4>
    </div>
        <br>
        <br>
        <br>
        <div class="row center">
            <a class="hikou-text waves-effect waves-light btn-large indigo darken-4 white-text" onclick="showMainTopic()"><i class="material-icons left white-text">assignment</i>Ver Tema</a>
        </div>
        <br>
        <div class="row">
            <div class="col s8 offset-s2">
                <div class="content" id="mainTopic">
                    <p>
                        En la figura se muestra un diagrama de cuerpo libre de un objeto sobre un plano inclinado en ángulo α. Suponiendo que no hay rozamientos, las fuerzas que actúan sobre el objeto son: la normal N, ejercida perpendicularmente y W el peso, que es vertical.

                    </p>
                    <br>
                    <img src="../img/sin_rozamiento.png" alt="plano_inclinado" class="responsive-image">
                    <br>
                    <p>
                        Ejercicio Resuelto: 
<br>
Un bloque de 2 kg asciende por un plano inclinado 30º sin rozamiento, debido a una fuerza de 15 N que tira de él.
<br>
a)  Hallar la aceleración con la que sube el bloque.

                    </p>
                    <div class="row center">
                        <img src="../img/ejercicio21.png" alt="plano_inclinado" style="width: 30vw">
                        <br>
                        <img src="../img/ejercicio22.png" alt="plano_inclinado" style="width: 30vw">
                        <br>
                        <img src="../img/ejercicio23.png" alt="plano_inclinado" style="width: 30vw">
                        <br>
                        <img src="../img/ejercicio24.png" alt="plano_inclinado" style="width: 30vw">
                    </div>
                    <br>
                    <div class="row center">
                        <a class="hikou-text waves-effect waves-light btn indigo darken-4" id="simulatorBtn" onclick='window.open("simulador_sr.php");return false;'>Ver Simulador</a>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <video autoplay muted loop id="myVideo">
            <source src="../video/vapor.mp4" type="video/mp4">
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
    </div>
</div>
<iframe style="display: none" src="https://www.youtube.com/embed/2712-9FN5qI?autoplay=1" width="0" height="0" frameborder="0" allowfullscreen></iframe>
<!-- End Welcome -->
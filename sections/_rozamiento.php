<!-- Start Welcome -->
<div class="container">
        <h4 class="titles white-text center">Plano inclinado con rozamiento</h4>
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
                        Si se considera el rozamiento, se debe tener en cuenta que este se opone siempre al movimiento o al posible movimiento. Cuando el objeto se mueve sobre la superficie del plano inclinado actúa el roce cinético, si el objeto va de subida, el roce cinético fk se dirige en sentido opuesto y la fuerza F se tiene que encargar también de vencerlo.
                    </p>
                    <br>
                    <img src="../img/rozamiento.png" alt="plano_inclinado" class="responsive-image">
                    <br>
                    <p>
                    	Ejercicio Resuelto:
<br>
						Se quiere subir un cuerpo de masa m= 5 kg por un plano inclinado de ángulo de inclinación 30º y el coeficiente de rozamiento 0,2 mediante la aplicación de una fuerza paralela al plano inclinado F= 45 N.
<br>
						a)	Calcular la aceleración del cuerpo

                    </p><br>
                    <div class="row center">
                        <img src="../img/ejercicio1.png" style="width: 40vw">
                    </div>
                    <div class="row center">
                        <a class="hikou-text waves-effect waves-light btn indigo darken-4" id="simulatorBtn" onclick='window.open("simulador_r.php");return false;'>Ver Simulador</a>
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
<script src="../js/con_rozamiento.js" type="text/javascript"></script>
<!-- End Welcome -->
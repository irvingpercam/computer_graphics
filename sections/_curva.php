<!-- Start Welcome -->
<div class="container">
        <h4 class="titles white-text center">Curva peraldata</h4>
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
                    <br>
                    <img src="../img/curva.png" alt="plano_inclinado" class="responsive-image">
                    <br>
                    <p>Un vehículo circula sobre una curva peraltada de 60m de radio. Suponiendo que no existe fuerza de rozamiento, ¿Cuál debe ser el ángulo de peralte, para que el vehículo pueda tomar la curva a 60 km/h sin derrapar?
                    </p>
                    <img src="../img/curva1.png" alt="plano_inclinado">
                    <p>
                        Datos
<br>
R = 60 m
FR = 0 N
v = 60 km/h = 16.67 m/s

θ = ?
<br>
Resolución
<br>
Si realizamos el diagrama de las fuerzas que intervienen en el movimiento, descubrimos que:

<br>

Aplicando el principio fundamental o segunda la ley de Newton para cada uno de los ejes de coordenadas, sabiendo que solo existe aceleración en el eje x (ay=0, ax=an), obtenemos:
<br>
Eje X
<br>
∑𝐹𝑥=𝑚·𝑎𝑛 ⇒𝑁𝑥=𝑚·𝑎𝑛 ⇒𝑁·sin(𝜃) = 𝑚·𝑣2𝑅
<br>
Eje Y
<br>
∑𝐹𝑦=0 ⇒𝑁𝑦−𝑃=0 ⇒𝑁·cos(𝜃) = 𝑚·𝑔
<br>
Si dividimos ambas expresiones miembro a miembro, conseguimos que:
<br>
𝑁·sin𝜃𝑁·cos(𝜃)=𝑚·𝑣2𝑅𝑚·𝑔⇒sin(𝜃)cos(𝜃)=𝑣2𝑔·𝑅 ⇒tan(𝜃)=16.6729.8·60 ⇒tan(𝜃)=0.47 ⇒𝜃=25.17º
                    </p>
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
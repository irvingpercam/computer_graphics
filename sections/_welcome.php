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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus blanditiis cumque officiis, sed amet quisquam ducimus temporibus aliquam aspernatur culpa nostrum provident molestias sunt vero dolore fugiat! Deserunt facere dolore ut explicabo omnis quibusdam cumque eaque exercitationem eius rem assumenda eum, impedit amet laboriosam ad expedita, mollitia obcaecati porro sapiente hic quam, aliquam veniam. At expedita voluptas alias sequi deserunt in nobis, commodi obcaecati, deleniti fuga quos error reiciendis. Error cumque aliquam quisquam animi in ratione possimus similique impedit fugit harum, dolores ut autem quo quaerat laudantium, nostrum corrupti ab consectetur placeat tempora? Excepturi fugiat delectus id incidunt sit!
                    </p>
                    <br>
                    <img src="img/plano_inclinado_home.png" alt="plano_inclinado" class="responsive-image">
                    <br>
                    <!-- Buttons for redirecting -->
                    <div class="row center">
                        <a class="waves-effect waves-light btn white indigo-text text-darken-4" href="views/con_rozamiento.php">Plano inclinado con rozamiento</a><br><br>
                        <a class="waves-effect waves-light btn white indigo-text text-darken-4" href="views/sin_rozamiento.php">Plano inclinado sin rozamiento</a><br><br>
                        <a class="waves-effect waves-light btn white indigo-text text-darken-4" href="">Curva peraltada</a>
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
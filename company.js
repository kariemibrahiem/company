red_btn.onclick = function(){
    magic_div.style.background = "linear-gradient( -50deg , white ,  red )";
    magic_div.style.rotate = "110deg";
    text_div.innerHTML = `
            <h1 class="logo-h1">about our <span class="book">company</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit modi architecto, non neque mollitia id sed nostrum amet itaque qui a maiores nobis recusandae, asperiores dolor quasi quod placeat?</p>
            <br>
            `
   
}
green_btn.onclick = function(){
    magic_div.style.background = "linear-gradient(  210deg , white ,  green )"
    magic_div.style.rotate = "210deg";
    text_div.innerHTML = `
    <h1 class="logo-h1">the most<span class="book"> points</span> about us</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit modi architecto, non neque mollitia id sed nostrum amet itaque qui a maiores nobis recusandae, asperiores dolor quasi quod placeat?</p>
    <br>
    `
}
yellow_btn.onclick = function(){
    magic_div.style.background = "linear-gradient( -200deg  , white ,  yellow )"
    magic_div.style.rotate = "310deg";
    text_div.innerHTML = `
    <h1 class="logo-h1">about our <span class="book">collection</span> of models</h1>
    <ul>
        <li> first model</li>
        <li> second model</li>
        <li> third model</li>
        <br>
        <li class="btn btn-danger"> more model</li>
    </ul>
    <br>
    `
}
blue_btn.onclick = function(){
    magic_div.style.background = "linear-gradient( 160deg  , blue ,  rgb(8, 8, 120)  )"
    magic_div.style.rotate = "20deg";
    text_div.innerHTML = `
            <h1 class="logo-h1">most readable <span class="book">book</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit modi architecto, non neque mollitia id sed nostrum amet itaque qui a maiores nobis recusandae, asperiores dolor quasi quod placeat?</p>
            <br>
            <div class="img_connect">
                <a href="" class="link"><img src="picture , icon/face_icon.png" alt="" class="connect"></a>
                <a href="" class="link"><img src="picture , icon/linked_icon.png" alt="" class="connect"></a>
                <a href="" class="link"><img src="picture , icon/whats_icon.png" alt="" class="connect"></a>
            </div>
            `
}
window.onscroll = function(){
    let valueY = scrollY;
    magic_div.style.left = valueY - 100 +"px";
}

//the scales img sec

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function load() {
    document.getElementById("div3_2").innerHTML='<h3 style="text-align: center;">Video Player</h3><br><iframe width="560" height="315" src="https://www.youtube.com/embed/0rJ5debKSX0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}

function load0() {
    document.getElementById("div3_2").innerHTML='<h3 style="text-align: center;">Video Player</h3><br><iframe width="560" height="315" src="https://www.youtube.com/embed/2atx1Jh6YP0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}

function load1() {
    document.getElementById("div3_2").innerHTML='<h3 style="text-align: center;">Video Player</h3><br><iframe width="560" height="315" src="https://www.youtube.com/embed/LWGJA9i18Co?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}

function load2() {
    document.getElementById("div3_2").innerHTML='<h3 style="text-align: center;">Video Player</h3><br><iframe width="560" height="315" src="https://www.youtube.com/embed/SADub7W22Zg?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}

function setLocalStorage() {
    var msg = document.getElementById("account").value;
    localStorage.setItem("cuentas", msg);
    document.getElementById("login").innerHTML = 'Bienvenid@ ' + msg + '!';
    //alert(msg);
}

function login() {
    var account = localStorage.getItem("cuentas");
    document.getElementById("login").innerHTML = 'Bienvenid@ ' + account + '!';
}
//AAAA
/*function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dropEffect = "move";
}

function dragover_handler(ev) {
    //ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"; // move copy
}

function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data);
}*/

///D&D
function start(){
    showVid=document.getElementById("div3_2");
    showVid.addEventListener('dragover', function(e){
        e.preventDefault();
    }, false);

    showVid.addEventListener('dragover',function(e){
        showVid.style.background = "#685bdd";
        e.preventDefault();
    },false);

    showVid.addEventListener("drop", droppedElmt, false);
}

function droppedElmt(e){
    e.preventDefault();
    showVid.style.background = "#F85032";
    var files=e.dataTransfer.files;
    var file=files[0];
    var reader= new FileReader();

    reader.onload=(function(data){
        return function (e2){
            showVid.innerHTML=['<video width="720" height="404" controls autoplay type="video/x-matroska" src="', e2.target.result,
                        '" title="', escape(data.name), '"/>'].join('');
        };
    }) (file);
    reader.readAsDataURL(file);

}

window.addEventListener('load', start, false);
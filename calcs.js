/**
 * Created by Toby on 17/12/2016.
 */

var screen = 0;
var ans = 0;
var operate = "";
var scrndisp = "";



function display(keypad){

    scrndisp += keypad;
    document.getElementById("screen").innerHTML = scrndisp;
}








function reset(res) {
    if(res === true){
        screen = ans = 0;
        operate = scrndisp = "";
        display("");
    }

}
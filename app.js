var oi = document.querySelector(".bar i");
var op = document.querySelector(".bar p");
var ospan = document.querySelector(".box span");
var obar = document.querySelector(".bar");
 
oi.addEventListener("mousedown",function(eve){
    // Get the pressed event object when pressed, ready to get the coordinates when pressed later
    var e1 = eve || window.event;
    document.addEventListener("mousemove",move);
    function move(eve){
        var e2 = eve || window.event;
                 // Use the coordinates of the mouse relative to the screen when moving, subtract, the coordinates when pressed, subtract, the distance from the box to the coordinate screen
        var l = e2.clientX - e1.offsetX - obar.offsetLeft;
                 // boundary limit
        if(l<0) l=0;
        if(l > obar.offsetWidth - oi.offsetWidth){
            l = obar.offsetWidth - oi.offsetWidth
        }
                 // Effective slider
        oi.style.left = l + "px";
                 // Effective progress bar
        op.style.width = l + 10 + "px";
                 // calculate ratio
      
 
    }
    document.addEventListener("mouseup",up);
    function up(){
        document.removeEventListener("mousemove",move);
        document.removeEventListener("mouseup",up);
    }
 
         // Prevent default events, prevent selected text
    // return false;
    e1.preventDefault();
})
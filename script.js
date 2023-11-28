// for scrolling animation
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// for videoconanimation
function videoconanimation() {var videocon = document.querySelector("#vedio-container");

var playbtn = document.querySelector(".play");

videocon.addEventListener("mouseenter",function(){
   gsap.to(playbtn,{
      scale : 1,
      opacity : 1
   })

})
videocon.addEventListener("mouseleave",function(){
   gsap.to(playbtn,{
      scale : 0,
      opacity : 0
   })

})
videocon.addEventListener("mousemove",function(dets){
    // console.log("x = ",dets.x);
    // console.log("y = ",dets.y);

   gsap.to(playbtn,{
      left : dets.x,
      top : dets.y
   })

})}
videoconanimation();


function loadinganimation(){var text = document.querySelectorAll("#page1 h1")
gsap.from(text,{
    y:30,
    opacity:0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.4
})}
loadinganimation();

// for cursor
document.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
      left : dets.x,
      top: dets.y
   })
})

// for cursor animation
function cursoranimation(){
var childs = document.querySelectorAll(".child");
childs.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
      gsap.to("#cursor",{
      transform: 'translate(-50%,-50%) scale(1)', duration: 1
          })
})
})

childs.forEach(function(elem){
   elem.addEventListener("mouseleave",function(){
      gsap.to("#cursor",{
       transform: 'translate(-50%,-50%) scale(0)', duration: 1
   })
})
})
}
cursoranimation()

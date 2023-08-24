let circle = document.querySelectorAll('.circle');
var minicrcl= document.querySelectorAll(".minicrcl");
var sec= document.querySelectorAll(".sec");

var active=3;
document.addEventListener('DOMContentLoaded',init);

function init(){

let query = window.matchMedia("(min-width: 480px)");
if(query.matches){

gsap.to(".circle",
        {
            rotate: 0,
            ease: Expo.easeInOut,
            duration:2
            
            
        }
       
    )
    gsap.to(sec[active-1],{
        opacity:1

    })
    gsap.to(minicrcl[active-1],{
        opacity:1,
        

    })
    minicrcl.forEach(function(val, index){
        val.addEventListener("click", function(){
            gsap.to(".circle",{
                rotate: (3-(index+1))*10,
                ease:Expo.easeInOut,
                duration:1
            
            })
           greyout();
           gsap.to(this,{
            opacity:.5
           })
           gsap.to(sec[index],{
            opacity:1
           })
        })
    })
    function greyout(){
        gsap.to(minicrcl,{
            opacity:.2,
            
        })
        gsap.to(sec,{
            opacity:.4
        })
    }
}
}
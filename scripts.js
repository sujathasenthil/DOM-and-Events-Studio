// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(){
    initialSetup();
   }
   // Remember to pay attention to page loading!
   function initialSetup(){
       const shuttleHeight = document.getElementById("spaceShuttleHeight");
       const rocketImage = document.getElementById("rocket");
                  
       document.getElementById("takeoff").addEventListener("click", function() {
            let isConfirmed = window.confirm("Confirm that the shuttle is ready for takeoff."); 
            if(isConfirmed){
                document.getElementById(id = "flightStatus").innerHTML="Shuttle in flight.";
                document.getElementById(id = "shuttleBackground").style.backgroundColor="blue";
                shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            }
        });
       
        document.getElementById("landing").addEventListener("click", function() {
            window.alert("The shuttle is landing. Landing gear engaged.");
            document.getElementById(id = "flightStatus").innerHTML="The shuttle has landed.";
            document.getElementById(id = "shuttleBackground").style.backgroundColor="green";
            shuttleHeight.innerHTML = 0;
        });

           
        document.getElementById("missionAbort").addEventListener("click",function() {
           let isConfirm = window.confirm("Confirm that you want to abort the mission");
           if(isConfirm){
            document.getElementById(id = "flightStatus").innerHTML="Mission aborted.";
            document.getElementById(id = "shuttleBackground").style.backgroundColor="green";
            shuttleHeight.innerHTML = 0;
        }
        });
        const rocketPic = document.getElementById("rocket");
        rocketPic.style.top = parseInt(shuttleBackground.clientHeight)-100+"px";
        rocketPic.style.left = "0px";
        let rocketPosition = 0;
       
        document.getElementById("left").addEventListener("click",function() {
            rocketPosition -= 10;
            rocket.style.left = rocketPosition + "px";
            });

        document.getElementById("up").addEventListener("click",function() {
            let topPosition=rocket.style.top;
            rocket.style.top = (parseInt(topPosition) - 10) + "px";
            shuttleHeight.innerHTML=parseInt(shuttleHeight.innerHTML)+10000;
            });
        
            document.getElementById("down").addEventListener("click",function() {
                let topPosition=rocket.style.top;
                rocket.style.top = (parseInt(topPosition) + 10) + "px";
                shuttleHeight.innerHTML=parseInt(shuttleHeight.innerHTML)-10000;
                });

            document.getElementById("right").addEventListener("click",function() {
                rocketPosition += 10;
                let leftPosition=rocket.style.left;
                rocket.style.left = (parseInt(leftPosition) + 10) + "px";
                });
            
    };
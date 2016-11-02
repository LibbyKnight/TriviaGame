 $(document).ready(function() {

    var answers = [".1b", ".2c", ".3d", ".4a", ".5b", ".6d", ".7b", ".8c", ".9a", ".10b"];
    var winSound = document.createElement("audio");
      winSound.setAttribute("src", "http://themushroomkingdom.net/sounds/wav/smb2/smb2_bonus_chance_win.wav");
    var endSound = document.createElement("audio");
      endSound.setAttribute("src", "http://themushroomkingdom.net/sounds/wav/smb2/smb2_bonus_chance_lose.wav");
      var setupGame = true;
    


    // function setupGame(setupGame) {


    // }
    

    function winGame () {

       $("#radio").click(function() {
      submitAnswers();
      console.log(submitAnswers);

      $("#sumbit-answers").click(function() {
      submitAnswers();

    

      if (submitAnswers === answers) {


                winSound.play(); 
                stop();
                $(location).attr('href', 'index3.html');

               }
              else {

                endSound.play(); 
                stop();
                $(location).attr('href', 'index4.html')
                }

      });
  });

}



//COUNTER
   var number = 30;
        
            
        function run(){
            counter = setInterval(decrement, 1000);
        }

        function decrement(){
           
            number--;
          
            $('#show-number').html('<h1>' + number + '</h1>');
         
            if (number === 0) {

                endSound.play(); 
                stop();
                alert('Times Up!');
                $(location).attr('href', 'index4.html');
                setTimeout(function() {
                window.location.href = "index.html;"
                }, 2000);
    
         }  
        }
 
        function stop(){
            
            clearInterval(counter);
        }
     
        run();
    });
  







        
       
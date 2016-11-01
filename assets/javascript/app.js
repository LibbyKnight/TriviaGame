 $(document).ready(function() {

    // var answers = ["Namco"]

    var correctAnswer = "";
    console.log (correctAnswer);

    var winSound = document.createElement("audio");
      winSound.setAttribute("src", "http://themushroomkingdom.net/sounds/wav/smb2/smb2_bonus_chance_win.wav");

    var endSound = document.createElement("audio");
      endSound.setAttribute("src", "http://themushroomkingdom.net/sounds/wav/smb2/smb2_bonus_chance_lose.wav");

    
    var getinputValue = function($input) {
    var label = $input.text(); 
    $input.text('');
    var inputValue = $input.val();
    $input.text(label);
    return inputValue;
}
    $("#sumbit-answers").click(function() {
      submitAnswers();

    });

  function submitAnswers() {
     console.log("submitAnswers WORKS!!", correctAnswer);
     console.log($("q1"));
  }    


 var $array = [];
$('input').each(function(){
    var id = $(this).attr('id');
    $array.push(id);
    console.log($array);
    console.log(id);
});

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
                $(location).attr('href', 'index4.html')

            }
        }
 
        function stop(){
            
            clearInterval(counter);
        }
     
        run();
    

});






        
       

    
 
   
      let score = 0; // global var
      let attempts = localStorage.getItem("total_attempts");
     
      $("button").on("click",gradeQuiz);
     
      //Question5 images
      $(".q5Choice").on("click",function(){
         
         $(".q5Choice").css("background","");
         $(this).css("background","rgb(255, 255, 0)");
      });
      
      
      
      
      
     displayQ4choices();
      
     function displayQ4choices(){
       
        let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland","Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray);
        
        for(let i = 0; i < q4ChoicesArray.length; i++) {
          $("#q4Choices").append(`<input type="radio" name="q4"
          id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"> <label 
          for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`);
          }
          
      }
      
      
      function isFormValid(){
        let isValid= true;
        if($("#q1").val() == ""){
            isValid = false;
            $("#validationFdbK").html("Question 1 was not answered");
        }
        return isValid;
      }
      
      function rightAnswer(index){
        $(`#q${index}Feedback`).html("Correct!");
        $(`#q${index}Feedback`).attr("class","bg-success text-white");
        $(`#markImg${index}`).html("<img scr ='img/checkmark.png'>");
       
      }
      function wrongAnswer(index){
        $(`#q${index}Feedback`).html("Incorrect!");
        $(`#q${index}Feedback`).attr("class","bg-warnings text-white");
        $(`#markImg${index}`).html("<img scr ='img/xmark.png'>");
        
      }
      
      
      
  
      function gradeQuiz(){
        
        $("#validationFdbK").html(""); //resets vaildation feedback
        
        if(!isFormValid()){
            return;
         }
         
        //var
        let q1Response =$("#q1").val().toLowerCase();
        let q2Response =$("#q2").val();
        let q3Response =$("#markImg3").val()
        let q4Response =$("input[name=q4]:checked").val();
        let q5Response =$("#markImg5").val();
        let q6Response =$("#markImg6").val();
        let q7Response =$("#q7").val();
        let q8Response =$("#q8").val(); 
        
       
        
        
        //Question 1
        if(q1Response =="sacramento"){
          rightAnswer(1);
          score = score + 12.50
        }else{
          wrongAnswer(1)
          
        }
        
        
      
       //Question2
        if(q2Response == "ms"){
          rightAnswer(2);
          score = score + 12.50
        }else{
          wrongAnswer(2);
        }
        
         
         
         
      
      //Question3
      if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked")
        && !$("#Jackson").is(":checked")&& !$("#Franklin").is(":checked")){
                rightAnswer(3);
                score = score + 12.50
            }else{
                  wrongAnswer(3);
               }
                  
      //Question4
        if(q4Response =="Rhode Island"){
          rightAnswer(4);
          score = score + 12.50
        }else{
          wrongAnswer(4);
        }
        
        
      //Question5
        if($("#seal2").css("background-color") == "rgb(255, 255, 0)") {
          rightAnswer(5);
          score = score + 12.50
        }else{
          wrongAnswer(5);
        }
        
       
        
        
      //Question6 
      if ($("#California").is(":checked") && !$("#Newyork").is(":checked")
        && !$("#Flordia").is(":checked")&& !$("#Texas").is(":checked")){
                rightAnswer(6);
                score = score + 12.50
            }else{
                  wrongAnswer(6);
               }
        
        //Question 7
        if(q7Response =="50"){
          rightAnswer(7);
          score = score + 12.50
        }else{
          wrongAnswer(7)
        }
        
        
       //Question8
        if(q8Response =="d"){
          rightAnswer(8);
          score = score + 12.50
        }else{
          wrongAnswer(8);
        }
        
        
       if (score > 80) {
          $("#totalScore").css("background-color", "green");
           $("#totalScore").html(`Congratulations! Total Score:${score}`);
      
        }else{
          $("#totalScore").css("background-color", "red");
          $("#totalScore").html(`Total Score:${score}`);
           
        }
       
    
        
        
        
        
        
        // $("#totalScore").html(`Total Score:${score}`);
         $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
         localStorage.setItem("total_attempts",attempts);
      //end quiz func 
 
      }
      



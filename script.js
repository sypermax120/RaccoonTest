$(document).ready(function(){
  
    var magic8Ball = {};
    let count = 0;
    let textInput = [];
    let textColl = ['red', 'blue']


    magic8Ball.listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
    magic8Ball.getAnswer = function(question){
      
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );

    
      $('h1').css('color', textColl[count%2]);


      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    };
    $("#answer").hide();
    $(".buttonShow").hide();


  
    var onClick = function(){
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      var question = prompt("What do you want to know?");
      

    ////////////////////////////////////////////////////////////////////////////

      if('тестер' === question.toLowerCase()){
        console.log('ERROR', question)
        $(".error").text( question );
        $("#8ball").attr("src", "");
        setTimeout(() => { 
          $(".error").text( " " );
          $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        }, 4000);
      }else{
          var pattern = /^[а-яА-Я]+$/;
          var len = 25;
          var res = pattern.test(question) && question.length<=len && count<5;
          if(res){
              magic8Ball.getAnswer(question);
              textInput.push(question)
              count+=1
              $('.buttonShow').show();
              
          };
          
          console.log(res, count)
      };
    };

    let showAnswer = () => {
        var sortAnswer = textInput.sort(function(a, b) { return a.length - b.length; });
        $(".sortAnswer").text( sortAnswer );
        console.log(sortAnswer)
    };
    
    $("#showAnswer").click( showAnswer );
    
    ////////////////////////////////////////////////////////////////////////////

    $("#questionButton").click( onClick );
  });

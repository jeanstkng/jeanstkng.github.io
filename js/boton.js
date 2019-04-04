$(function () {

//Function that displays the buttons inside the ball.
    $("#Button1").click(function () {
        $('.animated').removeClass('zoomOut');
        $('.animated').toggleClass('zoomIn');

        $("#Button2").show();
        
        $("#Button3").show();

        $("#Button4").show();

    });

//Button to display login form.

    $("#enterButton").click(function () {

        $("#enterButton").hide(400);

        $(".hexagon").css("transform","rotate(180deg)");

        /* setTimeout(function(){
          $('.center').toggleClass('pulse');
          //$('.center').css('width','10px');
              },300); */
              //RECORDAR COLOCAR ESTO EN CASO DE CELULARES

        //Animation for the hexagon to go left.
        setTimeout(function(){
          $('.center').css('left','25%');
              },600);
        //Animation for the hexagon when login form will be displayed.
        setTimeout(function(){
          $('.hexagon').addClass('hidden');
              },800);
        setTimeout(function(){
          $('.hexagon').addClass('hiddenEnd');
              },1100);
       
        setTimeout(function(){
          //$('#loginForm').toggleClass('slideInLeft');
          $("#loginForm").show('fadeInLeft');
              },1200);
        

    }); 

    //Toggle white color if mouse hovers the login words.
    $("#Login").hover(
        function() {
          $( this ).toggleClass('text-white');
        }, function() {
          $( this ).removeClass('text-white');
        }
      );

    //Hide the buttons that were displayed when the ball button was clicked.
    $(document).mouseup(function(e) 
    {
        var container = $("#buttonsContainer");

        // if the target of the click isn't the container nor a descendant of the container.
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('.animated').removeClass('zoomIn');
            $('.animated').toggleClass('zoomOut');
    
            $("#Button2").hide(250);
            $("#Button3").hide(250);
            $("#Button4").hide(250);
        }
    });

      
});

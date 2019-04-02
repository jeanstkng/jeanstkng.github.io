$(function () {

    $("#Button1").click(function () {
        $('.animated').removeClass('zoomOut');
        $('.animated').toggleClass('zoomIn');

        $("#Button2").show();
        
        $("#Button3").show();

        $("#Button4").show();

    });

      $("#enterButton").click(function () {

        $("#enterButton").hide(400);

        $(".hexagon").css("transform","rotate(150deg)");



    }); 

    $("#Login").hover(
        function() {
          $( this ).toggleClass('text-white');
        }, function() {
          $( this ).removeClass('text-white');
        }
      );

        $(document).mouseup(function(e) 
        {
            var container = $("#buttonsContainer");

            // if the target of the click isn't the container nor a descendant of the container
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

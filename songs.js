audioPlayer();
function audioPlayer(){
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $
    $("#playlist li a").click(function(e){e.preventDefault();
    $("#audioPlayer")[0].src = this;
    });
} 
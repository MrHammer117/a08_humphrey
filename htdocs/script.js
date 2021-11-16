$(document).ready(function(){
  var finalColor = '#';
  var hexCode = '0123456789ABCDEF';
  for (var i = 0; i < 6; i++) {
    finalColor += hexCode[Math.floor(Math.random() * 16)];
  }
  $("#ball").css("background-color", finalColor);
});
$(document).ready(function(){
  $("#colorChanger").click(function(){
    var finalColor = '#';
    var hexCode = '0123456789ABCDEF';
    for (var i = 0; i < 6; i++) {
      finalColor += hexCode[Math.floor(Math.random() * 16)];
    }
    $("#ball").css("background-color", finalColor);
  });
});
$(document).ready(function(){
  $("#sizeS").click(function(){
    $("#ball").css({"width": "50px","height": "50px"});
  });
});
$(document).ready(function(){
  $("#sizeL").click(function(){
    $("#ball").css({"width": "100px","height": "100px"});
  });
});
$(document).ready(function(){
  $("#movement").click(function(){
		var changeColor = setInterval(function(){
      var finalColor = '#';
      var hexCode = '0123456789ABCDEF';
      for (var i = 0; i < 6; i++) {
        finalColor += hexCode[Math.floor(Math.random() * 16)];
      }
      $("#ball").css("background-color", finalColor);
		}, 2000);


		var numLeft = 0;
		var numTop = 0;
		leftBorderCheck = true;
		topBorderCheck = true;

		var bounceBall = setInterval(function(){
				if(leftBorderCheck == true)
				{
					numLeft += 2;
					$("#ball").css("margin-left", numLeft + "%")
					if($("#ball").css("width") == "100px" && numLeft >= 90)
					{
						leftBorderCheck = false;
					}
					else if($("#ball").css("width") == "50px" && numLeft >= 100)
					{
						leftBorderCheck = false;
					}
				}
				else
				{
					numLeft -= 2;
					$("#ball").css("margin-left", numLeft + "%")
					if($("#ball").css("width") == "100px" && numLeft <= -10)
					{
						leftBorderCheck = true;
					}
					else if($("#ball").css("width") == "50px" && numLeft <= -10)
					{
						leftBorderCheck = true;
					}

				}
				if(topBorderCheck == true)
				{
					numTop += 2;
					$("#ball").css("margin-top", numTop + "%")
					if($("#ball").css("width") == "100px" && numTop >= 90)
					{
						topBorderCheck = false;
					}
					else if($("#ball").css("width") == "50px" && numTop >= 100)
					{
						topBorderCheck = false;
					}
				}
				else
				{
					numTop -= 3;
					$("#ball").css("margin-top", numTop + "%")
					if($("#ball").css("width") == "100px" && numTop <= -10)
					{
						topBorderCheck = true;
					}
					else if($("#ball").css("width") == "50px" && numTop <= -10)
					{
						topBorderCheck = true;
					}

				}
        $("#movement").off("click");

		}, 20);
	});
});

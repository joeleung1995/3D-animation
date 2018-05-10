(function () {
	$(".item").on("mouseenter", function (e) {

		var x = e.offsetX - $(this).children('.pic_box').offsetParent().outerWidth() / 2,
			y = e.offsetY - $(this).children('.pic_box').offsetParent().outerHeight() / 2,
			directionIndex = Math.round(( ( Math.atan2(y,x) * ( 180 / Math.PI ) / 90 ) + 3 )) % 4 

		var direction = getDirection(directionIndex)
			

		$(this).children('.pic_box').attr("class", "pic_box " + direction)
	})


	function getDirection (directionIndex) {

		switch (directionIndex) {
			case 3 :
				return "in_right";
			case 0 :
				return "in_bottom";
			case 1 :
				return "in_left";
			case 2 :
				return "in_top";
		}
	}
} ())

	$(document).ready(function(){
		// What we do toggle

		// ### Design ###
		$(".design").click(function(){
			$(".design-description").show();
			$(this).hide();
		})

		$(".design-description").click(function(){
			$(".design").show();
			$(this).hide();

		});
			// ### products ###
		$(".products").click(function(){
			$(".products-description").show();
			$(this).hide();
		});

		$(".products-description").click(function(){
			$(".products").show();
			$(this).hide();
		});

			// ### development ###
		$(".development").click(function(){
			$(".development-description").show();
			$(this).hide();
		});
		
		$(".development-description").click(function(){
			$(".development").show();
			$(this).hide();
		});



		//Portfolio Items Hover Effects

		// ### Portfolio Item 1 

		$(".projectImage1").hover(function(){
			$(".projectName1").show(1000);
		}, function(){
			$(".projectName1").hide(1000);
		})

		// ### Portfolio Item 2 ###

		$(".projectImage2").hover(function(){
			$(".projectName2").show(1000);
		}, function(){
			$(".projectName2").hide(1000);
		})

		// ### Portfolio Item 3 ###

		$(".projectImage3").hover(function(){
			$(".projectName3").show(1000);
		}, function(){
			$(".projectName3").hide(1000);
		})

		// ### Portfolio Item 4 ###

		$(".projectImage4").hover(function(){
			$(".projectName4").show(1000);
		}, function(){
			$(".projectName4").hide(1000);
		})

		// ### Portfolio Item 5 ###

		$(".projectImage5").hover(function(){
			$(".projectName5").show(1000);
		}, function(){
			$(".projectName5").hide(1000);
		})

		// ### Portfolio Item 6 ###

		$(".projectImage6").hover(function(){
			$(".projectName6").show(1000);
		}, function(){
			$(".projectName6").hide(1000);
		})

		// ### Portfolio Item 7 ###

		$(".projectImage7").hover(function(){
			$(".projectName7").show(1000);
		}, function(){
			$(".projectName7").hide(1000);
		})

		// ### Portfolio Item 8 ###

		$(".projectImage8").hover(function(){
			$(".projectName8").show(1000);
		}, function(){
			$(".projectName8").hide(1000);
		})

	})

	
$(function () {
	jQuery('div#design').click(function () {
		jQuery('p').toggle();
		jQuery('img').toggle();
	});
	jQuery('div#dev').click(function () {
		jQuery('p').toggle();
		jQuery('img').toggle();
	});
	jQuery('div#product').click(function () {
		jQuery('p').toggle();
		jQuery('img').toggle();
	});

	jQuery('div#project1').hover(function () {
		jQuery('p.projectName1').toggle();
		jQuery('img.projectImage1').toggleClass('opaque1');
	});
	jQuery('div#project2').hover(function () {
		jQuery('p.projectName2').toggle();
		jQuery('img.projectImage2').toggleClass('opaque1');		
	});
	jQuery('div#project3').hover(function () {
		jQuery('p.projectName3').toggle();
		jQuery('img.projectImage3').toggleClass('opaque1');		
	});
	jQuery('div#project4').hover(function () {
		jQuery('p.projectName4').toggle();
		jQuery('img.projectImage4').toggleClass('opaque1');		
	});
	jQuery('div#project5').hover(function () {
		jQuery('p.projectName5').toggle();
		jQuery('img.projectImage5').toggleClass('opaque1');		
	});
	jQuery('div#project6').hover(function () {
		jQuery('p.projectName6').toggle();
		jQuery('img.projectImage6').toggleClass('opaque1');		
	});
	jQuery('div#project7').hover(function () {
		jQuery('p.projectName7').toggle();
		jQuery('img.projectImage7').toggleClass('opaque1');		
	});
	jQuery('div#project8').hover(function () {
		jQuery('p.projectName8').toggle();
		jQuery('img.projectImage8').toggleClass('opaque1');		
	});
	
	jQuery('#contact-form').submit(function (event) {
		event.preventDefault();
		var userName = document.getElementById('name').value;
		alert(userName + ' we have received your message. Thank you for reaching out to us.');
		jQuery('#contact-form')[0].reset();
		//		document.getElementById('contact-form').reset();
	})
});
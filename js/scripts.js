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

	$("#projectImage-1").mouseenter(function(){
		$("#projectName1").show();
	})
});
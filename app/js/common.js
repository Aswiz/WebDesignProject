$(document).ready(function(){
		$(".design-card").hover(function(){
				$(this).children("div:first").removeClass("design-card__content_picture_dev");
				$(this).children("div:first").addClass("design-card__content_picture_bottle");
				}, function(){
				$(this).children("div:first").removeClass("design-card__content_picture_bottle");
				$(this).children("div:first").addClass("design-card__content_picture_dev");
				});
	});


// $(document).ready(function(){
// 	$(this).removeClass("design-card__content_picture_dev");
// 	$(this).addClass("design-card__content_picture_bottle");
// });

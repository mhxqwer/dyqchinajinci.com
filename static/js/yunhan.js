$(function() {
	var Yunhan = {
		formatPageInfo: function() {
			if ($(window).width() < 768) {
				var lis = $("ul.pagination li");
				if (lis.length >= 4) {
					lis.each(function(i) {
						var li = $(this);
						if (i > 1 && i < lis.length - 2 && !li.hasClass("active")) {
							li.hide();
						}
					});
					var prev = $(lis[0]);
					var next = $(lis[lis.length - 1]);
					var first = $(lis[1]);
					if(first.attr("class") === "active"){
						let addLi = first.clone(true);
						addLi.insertAfter(first);
					}
					var last = $(lis[lis.length - 2]);
					if(last.attr("class") === "active"){
						let addLi = last.clone(true);
						addLi.insertBefore(last);
					}
					prev.children("a,span").text("上一页");
					first.children("a,span").empty().addClass("glyphicon glyphicon-step-backward");
					last.children("a,span").empty().addClass("glyphicon glyphicon-step-forward");
					next.children("a,span").text("下一页");
					prev.insertAfter(first);
					last.insertAfter(next);
				}
			}
		},
		init: function() {
			this.formatPageInfo();
		}
	};
	
	Yunhan.init();
});
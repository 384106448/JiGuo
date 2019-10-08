var num=$("#num").html()-0;
// console.log(typeof num);
$(".tup").on("click",function(){
	$(".tup").hide();
	$(".tup1").show();
	$("#num").html(num+1);
})
$(".tup1").on("click",function(){
	$(".tup").show();
	$(".tup1").hide();
	$("#num").html(num);
})
$(".photo").hover(function(){
	$(".photo").attr("src","../css/img/shareh_yj1.png");
},function(){
	$(".photo").attr("src","../css/img/share_yj1.png");
});
$(".like").find("li:eq(1)").on("click",function () {
	$(".bdsharebuttonbox ").show();
});
$(".right").on("mouseleave",function () {
    $(".bdsharebuttonbox ").hide();
});


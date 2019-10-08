var $phone=$(".center input:eq(0)");
// console.log($phone.val());
var $yanz=$("#input_3");
var $user=$(".center input:eq(3)");
var $psw=$(".center input:eq(4)");
var $xpsw=$(".center input:eq(5)");
var timer=null;
var num=60;

$("#get").on("click",fncli = function(){
	$(this).off('click');
	timer=setInterval(fn,1000);
});

function fn() {
	num--;
	if(num<=0){
		clearInterval(timer);
		$("#get").text("获取验证码");
		$("#get").on("click",fncli);
			num=60;
	}else {
		$("#get").text("("+num+")重发");
	}
}

// function fn2(){
	//手机号
	$phone.on("blur",function(){
		var reg=/^1[3578]\d{9}$/;
		if($phone.val()==0){
			$(".phone").html("手机号不能为空！");
			$(".phone").css({"color":"red"});
			$(".phone").css({"font-size":"12px"});
			return false;
		}else if(!reg.test($phone.val())){
			$(".phone").html("请输入正确的手机号！");
			$(".phone").css({"color":"red"});
			$(".phone").css({"font-size":"12px"});
			return false;
		}else {
			$(".phone").html("输入正确！");
			$(".phone").css({"color":"green"});
			$(".phone").css({"font-size":"12px"});
			return true;
		}
	});
	

	//验证码

	$yanz.on("blur",function(){
        var regg=/^\w{4}$/;
		if($yanz.val()==0){
			$(".yanzh").html("验证码不能为空！");
			$(".yanzh").css({"color":"red"});
			$(".yanzh").css({"font-size":"12px"});
			return false;

		}else if(!regg.test($yanz.val())){
			$(".yanzh").html("请输入正确的验证码，验证码为4位！");
			$(".yanzh").css({"color":"red"});
			$(".yanzh").css({"font-size":"12px"});
			return false;
		}else {
			$(".yanzh").html("输入正确！");
			$(".yanzh").css({"color":"green"});
			$(".yanzh").css({"font-size":"12px"});
			return true;
		}

	});
	
	//用户名
	$user.on("blur",function(){
		var regs=/^[\u4e00-\u9fa5\w]+$/;
		if($user.val()==0){
			$(".user").html("用户名不能为空！");
			$(".user").css({"color":"red"});
			$(".user").css({"font-size":"12px"});
			return false;
		}else if(!regs.test($user.val())){
			$(".user").html("请输入正确的用户名！");
			$(".user").css({"color":"red"});
			$(".user").css({"font-size":"12px"});
			return false;
		}else {
			$(".user").html("输入正确！");
			$(".user").css({"color":"green"});
			$(".user").css({"font-size":"12px"});
			return true;
		}
	});
	

	//密码
	$psw.on("blur",function(){
		var regt=/^\w{6,10}$/;
		if($psw.val()==0){
			$(".psw").html("密码不能为空！");
			$(".psw").css({"color":"red"});
			$(".psw").css({"font-size":"12px"});

			return false;
		}else if(!regt.test($psw.val())){
			$(".psw").html("请输入正确的密码！");
			$(".psw").css({"color":"red"});
			$(".psw").css({"font-size":"12px"});
			return false;
		}else {
			$(".psw").html("输入正确！");
			$(".psw").css({"color":"green"});
			$(".psw").css({"font-size":"12px"});
			return true;
		}
	});
	
	//确认密码
	$xpsw.on("blur",function(){
		if($xpsw.val()!=$psw.val()){
			$(".xpsw").html("两次密码请保持一致！");
			$(".xpsw").css({"color":"red"});
			$(".xpsw").css({"font-size":"12px"});
			return false;
		}else if($xpsw.val()==0){
			$(".xpsw").html("密码不能为空！");
			$(".xpsw").css({"color":"red"});
			$(".xpsw").css({"font-size":"12px"});
			return false;
		}else {
			$(".xpsw").html("输入正确！");
			$(".xpsw").css({"color":"green"});
			$(".xpsw").css({"font-size":"12px"});
			return true;
		}
	});



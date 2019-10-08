$.ajax({
    type:"GET",
    url:"../json/use-zx.json",
    dataType:"json",
    success:function (data) {
        $.each($(".first_ajax"),function (index) {
            console.log(data);
            $(".oneImg:eq("+index+")").attr("src","../img/"+data.use_mf_dz_one[index].img);
            console.log(data.use_mf_dz_one[index].img);
            $(".num_text:eq("+index+")").html(data.use_mf_dz_one[index].title);
            $(".num1:eq("+index+")").html(data.use_mf_dz_one[index].num1);
            $(".num2:eq("+index+")").html(data.use_mf_dz_one[index].num2);
            $(".num3:eq("+index+")").html(data.use_mf_dz_one[index].num3);
            $(".num4:eq("+index+")").html(data.use_mf_dz_one[index].num4);
            $(".num5:eq("+index+")").html(data.use_mf_dz_one[index].li1);
            $(".sy:eq("+index+")").html(data.use_mf_dz_one[index].title_top);

        })
    }
});
$('.last_footer').on('click',function(){
    $(this).children('img').attr('src', '../css/img/loading-icon.gif');
    $(this).children('img').css({"vertical-align":"-5px"});
    $(this).children("span").text("正在加载中");
})

$.ajax({
    type:"GET",
    url:"../json/use-zx.json",
    dataType:"json",
    success:function (data) {
        $.each($(".first_ajax"),function (index) {
            console.log(data);
            $(".oneImg:eq("+index+")").attr("src","../img/"+data.use_mf_dz_three[index].img);
            console.log(data.use_mf_dz_three[index].img);
            $(".num_text:eq("+index+")").html(data.use_mf_dz_three[index].title);
            $(".num1:eq("+index+")").html(data.use_mf_dz_three[index].num1);
            $(".num2:eq("+index+")").html(data.use_mf_dz_three[index].num2);
            $(".num3:eq("+index+")").html(data.use_mf_dz_three[index].num3);
            $(".num4:eq("+index+")").html(data.use_mf_dz_three[index].num4);
            $(".num5:eq("+index+")").html(data.use_mf_dz_three[index].li1);
            $(".sy:eq("+index+")").html(data.use_mf_dz_three[index].title_top);

        })
    }
});
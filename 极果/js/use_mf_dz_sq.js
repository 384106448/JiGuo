$.ajax({
    type:"GET",
    url:"../json/use-zx.json",
    dataType:"json",
    success:function (data) {
        $.each($(".first_ajax"),function (index) {
            console.log(data);
            $(".oneImg:eq("+index+")").attr("src","../img/"+data.use_mf_dz_two[index].img);
            console.log(data.use_mf_dz_two[index].img);
            $(".num_text:eq("+index+")").html(data.use_mf_dz_two[index].title);
            $(".num1:eq("+index+")").html(data.use_mf_dz_two[index].num1);
            $(".num2:eq("+index+")").html(data.use_mf_dz_two[index].num2);
            $(".num3:eq("+index+")").html(data.use_mf_dz_two[index].num3);
            $(".num4:eq("+index+")").html(data.use_mf_dz_two[index].num4);
            $(".num5:eq("+index+")").html(data.use_mf_dz_two[index].li1);
            $(".sy:eq("+index+")").html(data.use_mf_dz_two[index].title_top);

        })
    }
});

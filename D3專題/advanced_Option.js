// 建立日曆 選擇要展現的圖表
//                     年    月   日                       年     月    日
$("#date").datepicker({
    minDate: new Date(2017, 1 - 1, 1), maxDate: new Date(2021, 12 - 1, 31), changeMonth: true
    , changeYear: true , onClose:function(selectedDate){
        if(selectedDate != ""){
            year = +selectedDate.split("-")[0]
            if(year>=2020) 
                $("#Find_Color").append($('<option></option>').val("yellow").text("yellow"))
            else 
                $("#Find_Color option[value=yellow]" ).remove()
            $( "#date2" ).datepicker( "option", "minDate", selectedDate );
        }else{
            $( "#date2" ).datepicker( "option", "minDate", new Date(2017, 1 - 1, 1) );
        }     
    }
});
$("#date2").datepicker({
    minDate: new Date(2017, 1 - 1, 1), maxDate: new Date(2021, 12 - 1, 31), changeMonth: true
    , changeYear: true , onClose:function(selectedDate){
        if(selectedDate != ""){
            $( "#date" ).datepicker( "option", "maxDate", selectedDate );
        }else{
            $( "#date" ).datepicker( "option", "maxDate", new Date(2021, 12 - 1, 31) );
        }  
    }
});
$("#date2").datepicker("option", "dateFormat", "yy-mm-dd")
$("#date").datepicker("option", "dateFormat", "yy-mm-dd")
//選擇顏色
$("#Find_Color").change(function(){
    $("#Find_Station").empty();
    Test_Color = "." + $("#Find_Color option:selected").val()
    d3.select("#Line").selectAll("line").style("opacity" , 0.3)
    d3.select("#Circle").selectAll("circle").style("opacity" , 0.3)
    d3.selectAll(Test_Color).style("opacity" , 1)
    Test_Circle = "#Circle " + Test_Color
    // 第一個為空選項 否則直接選第一個選項會不更新 
    $("#Find_Station").append($('<option></option>').val("X").text(""))
    $(Test_Circle).each(function(i,d){
        $("#Find_Station").append($('<option></option>').val(d.id).text(d.id))
    })
})
//選擇車站
$("#Find_Station").change(function(){
    // Test_Color = "#" + $("#Find_Station option:selected").val()
    // console.log(Test_Color)
    // d3.select("#Line").selectAll("line").style("opacity" , 0.3)
    // d3.select("#Circle").selectAll("circle").style("opacity" , 0.3)
    // d3.selectAll(Test_Color).style("opacity" , 1)
    var target_station = $("#Find_Station option:selected").val()
    if (target_station === "X") return // 空選項除理
    select_station(target_station)
})
//進階選項
$("#hidden_Option").change(function(){
    if($("#hidden_Option").is(":checked") == true){
        $("#hidden_Block").show()
    }else{
        $("#hidden_Block").hide()
    }
})
//進階選項裡的調整
$("#Max_Circle_Width").change(function(){
    $("#Max_Circle_Width_Text").html($("#Max_Circle_Width").val())
    if(the_date.value != ""){
        var Year = +the_date.value.split("-")[0]
        var Month = +the_date.value.split("-")[1]
        var Day = +the_date.value.split("-")[2]
        update_network(Year,Month,Day)
    }else{
        update_network(2017,1,1)
    }
})
$("#Min_Circle_Width").change(function(){
    $("#Min_Circle_Width_Text").html($("#Min_Circle_Width").val())
    if(the_date.value != ""){
        var Year = +the_date.value.split("-")[0]
        var Month = +the_date.value.split("-")[1]
        var Day = +the_date.value.split("-")[2]
        update_network(Year,Month,Day)
    }else{
        update_network(2017,1,1)
    }
})
$("#Max_Line_Width").change(function(){
    $("#Max_Line_Width_Text").html($("#Max_Line_Width").val())
    if(the_date.value != ""){
        var Year = +the_date.value.split("-")[0]
        var Month = +the_date.value.split("-")[1]
        var Day = +the_date.value.split("-")[2]
        update_network(Year,Month,Day)
    }else{
        update_network(2017,1,1)
    }
})
$("#Min_Line_Width").change(function(){
    $("#Min_Line_Width_Text").html($("#Min_Line_Width").val())
    if(the_date.value != ""){
        var Year = +the_date.value.split("-")[0]
        var Month = +the_date.value.split("-")[1]
        var Day = +the_date.value.split("-")[2]
        update_network(Year,Month,Day)
    }else{
        update_network(2017,1,1)
    }
})
$("#contour_Option").change(function(){
    if($("#contour_Option").is(":checked") == true){
        $("#svg_sdj").show()
    }else{
        $("#svg_sdj").hide()
    }
})
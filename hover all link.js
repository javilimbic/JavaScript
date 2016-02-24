 var div = $(".list_item_ctn");
    div.each(function(i){
        var a = $(div[i]).children(".list_desc").children("a")
        var url = a.attr("href");
        var titulo = a.children("h3").html();
        a.parent().append("<h3>"+titulo+"</h3>");
        $(div[i]).wrap('<a style="display:block; width:100%;" href="'+url+'" target="_self"></a>');
        $(div[i]).css("max-width", "234px");
        $(div[i]).css("width", "100%");
        div.children("a").remove();
        a.remove();
});
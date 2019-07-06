console.log("hello?");
var url = "http://myhome.chosun.com/rss/www_section_rss.xml";

function show_html(_data) {
  var title = _data.feed.title;
  var items = _data.items;

  $("section").append("<h1>" + title + "</h1>");
  $("section").append("<ul></ul>");
  for (var i in items) {
    var html = '<li><a href="' + items[i].link + '">';
    html += items[i].title + "<a/></li>";
    $("section ul").append(html);
  }
}

$(function(){
  $.ajax({
    dataType: "jsonp",
    url: "https://api.rss2json.com/v1/api.json?rss_url=" + url,
    success: function(data) {
      console.log(data);
      show_html(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
});

javascript:(function() {
    var images = document.getElementsByTagName("img");
    var pic = "http://image.shutterstock.com/display_pic_with_logo/974869/105406865/stock-vector-twitter-icon-105406865.jpg";

    for(var i = 0; i < images.length; i++) {
        images[i].src = pic;
      }
}) ();

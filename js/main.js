var common = (function () {
  'use strict';

  var   carousel_width = 300,
        carousel_elem = $(".carousel .item").length,
        carousel_size = carousel_elem * carousel_width,
        limit_position = carousel_size - carousel_width;

  return {
    init: function () {
      common.set_carousel_size();
      // common.act_left();
    },

    set_carousel_size: function(){
        $(".carousel").width(carousel_size);
    },

    // act_left: function(){
    //     var position = $(".carousel").position().left;
    //         limit_position = carousel_size - carousel_width;
        
    //     while((position * -1) < limit_position){
    //         position = (-1 * (position + 300));
    //         $(".carousel").css("left", "'" + position + "'");
    //     }
    // }

  };

})();

$(document).ready(common.init);
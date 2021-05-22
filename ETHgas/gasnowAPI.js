$(document).ready(function(){
  $.ajax({
    url:  "https://www.gasnow.org/api/v3/gas/price?utm_source=:test",
    type: "GET",
    success: function(result){
      $("<li/>").text("rapid: "+result.data.rapid/1000000000).appendTo($("#gasPrice"));
      $("<li/>").text("fast: "+result.data.fast/1000000000).appendTo($("#gasPrice"));
      $("<li/>").text("standard: "+result.data.standard/1000000000).appendTo($("#gasPrice"));
      $("<li/>").text("slow: "+result.data.slow/1000000000).appendTo($("#gasPrice"));
    },
    error: function(error){
      console.log(error);
    }
  });
});

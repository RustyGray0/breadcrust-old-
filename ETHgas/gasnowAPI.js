function refresh(){
  $.ajax({
    url:  "https://www.gasnow.org/api/v3/gas/price?utm_source=:test",
    type: "GET",
    success: function(result){
      $(".gasPrice").children().not(".gasText").remove();
      $("<span/>").text(Math.round(result.data.rapid/1000000000)).appendTo($("#gasRapid"));
      $("<span/>").text(Math.round(result.data.fast/1000000000)).appendTo($("#gasFast"));
      $("<span/>").text(Math.round(result.data.standard/1000000000)).appendTo($("#gasStandard"));
      $("<span/>").text(Math.round(result.data.slow/1000000000)).appendTo($("#gasSlow"));
    },
    error: function(error){
      console.log(error);
    }
  });
}

refresh()

setInterval(function(){ refresh() }, 10000);

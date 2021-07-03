// #more - 댓글 작성 div가 나오도록 하는 버튼
// #more 버튼을 클릭했을 때
$("#more").click(function () {
  // #write-comment의 display가 "none"일 경우 (접혀있는 경우)
  if ($("#write-comment").css("display") == "none") {
    // #more 버튼 감추기
    $("#more").hide();
    // #write-comment 보이기
    $("#write-comment").show();
  } else {
    // #write-comment의 display가 "block"인 경우 (펼쳐져 있는 경우)
    $("#more").show();
  }
});

// #comment-btn - 댓글작성 버튼
// #comment-btn 버튼을 클릭했을 때
$("#comment-btn").click(function () {
  // #more 버튼 보이기
  $("#more").show();
  // #write-comment 감추기
  $("#write-comment").hide();
});

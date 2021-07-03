// #write - 게시글 작성 div가 나오도록 하는 버튼
// #write 버튼을 클릭했을 때
$("#new-post").click(function () {
  // #write-post의 display가 "none"일 경우 (접혀있는 경우)
  if ($("#write-post").css("display") == "none") {
    // #write 버튼 감추기
    $("#new-post").hide();
    // #write-post 보이기
    $("#write-post").show();
  } else {
    // #write-post의 display가 "block"인 경우 (펼쳐져 있는 경우)
    $("#new-post").show();
  }
});

// #post-btn - 댓글작성 버튼
// #post-btn 버튼을 클릭했을 때
$("#post-btn").click(function () {
  // #write 버튼 보이기
  $("#new-post").show();
  // #write-post 감추기
  $("#write-post").hide();
});

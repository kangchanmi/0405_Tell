$(function () {

    /* //////////// 전화번호 입력 시작 //////////// */
    $("input").keyup(function () {
        var noChk = $(this).val(); // chk = check

        if (isNaN(noChk)) {
            alert("숫자만 가능합니다.");
            $(this).val("").focus(); // 커서가 해당 위치에 표시됨
            // 다시 입력할 수 있도록 해당 칸에 적었던 내용을 지워버림(초기화)
        }
    });

    /*입력란 1번에서 2번으로 포커스 자동변경 (=자동 이동)*/
    $("#tel1").keyup(function () {
        var noLen = $(this).val().length; // length = 갯수
        if (noLen == 3) $("#tel2").focus();
    });

    /*입력란 2번에서 3번으로 포커스 자동변경*/
    $("#tel2").keyup(function () {
        var noLen = $(this).val().length;
        if (noLen == 4) $("#tel3").focus();
    });
    /* //////////// 전화번호 입력 끝 //////////// */

    /* //////////// 전화번호 재입력 //////////// */

    $("button").click(function () {
        var retVal = confirm("전화번호를 재입력 하시겠습니까?");
        // return value => retVal, 반환 값
//        alert("retVal : " + retVal);

            /* retVal만 입력해도 OK */
        if (retVal == true) {
            $("input").val(""); // 모든 input요소의 내용을 공백으로 만듦
            $("#tel1").focus();
        //  alert("확인을 누르셨어요!");
        } else {
            alert("취소를 누르셨어요!");
        }
    });

    /* //////////// 전화번호 재입력 //////////// */
});

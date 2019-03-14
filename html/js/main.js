function main() {
    windowResize();
    setInterval('time()', 1000);
    setInterval('getFaceInfo()', 100);
}

function time() {
    var now = new Date();
    $('#timeSet').html('現在時刻：' + now.toLocaleTimeString());
}

function getFaceInfo() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.43.203:9999/get',
        dataType: 'json',
        success: function (face) {
            if (face.Match > -1) {
                if (face.Match == 0) {
                    $('#match').html(' 一致率は、85%' + '未満で、一致していません。');
                } else {
                    $('#match').html(' 一致率は、85%' + '以上で、一致しています。');
                }
                $('#face_origin').children('img').attr('src', './images/' + face.Image + '?' + new Date());
                $('#face_object').children('img').attr('src', './images/capture.jpg?' + new Date());
            }
        },
        error: function () {
            alert("読み込み失敗");
        }
    });
}

function windowResize() {
    $(window).on('load resize', function () {
        var width = window.innerWidth;
        var height = window.innerHeight;

        $('#timeSet').css({
            'left': `${width * 0.025}px`,
            'top': `${height * 0.08}px`
        });

        $('#webstream').css({
            'left': `${width * 0.025}px`,
            'top': `${height * 0.08 + 110}px`
        });

        $('#match').css({
            'left': `${width * 0.025}px`,
            'top': `${height * 0.2 + 400}px`
        });
        
        $('#face_origin').css({
            'left': `${width * 0.025}px`,
            'top': `${height * 0.2 + 500}px`
        });

        $('#face_object').css({
            'left': `${width * 0.025 + 210}px`,
            'top': `${height * 0.2 + 500}px`
        });
    });
}

main();

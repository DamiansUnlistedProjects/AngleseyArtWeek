    function easy_background(e, t) {
        var n = document.createElement("div");
        n.innerHTML = " ", n.classList.add("easy_slider"), document.body.insertBefore(n, document.body.firstChild), t.slide.forEach(function(e, n) {
            var o;
            e && (document.querySelector(".easy_slider").innerHTML += (o = e) ? "<img src='" + o + "'>" : "", void 0 !== t.delay[n] && "" != typeof t.delay[n] && 0 != t.delay[n] || (t.delay[n] = 3e3))
        }), document.querySelector(".easy_slider").style.display = "none", document.querySelector(e).style.backgroundSize = "cover", document.querySelector(e).style.backgroundRepeat = "no-repeat", document.querySelector(e).style.backgroundPosition = "center center", setTimeout(function() {
            void 0 === t.transition_timing && (t.transition_timing = "ease-in"), void 0 === t.transition_duration && (t.transition_duration = 500);
            var n = "all " + t.transition_duration + "ms " + t.transition_timing;
            document.querySelector(e).style.WebkitTransition = n, document.querySelector(e).style.MozTransition = n, document.querySelector(e).style.MsTransition = n, document.querySelector(e).style.OTransition = n, document.querySelector(e).style.transition = n
        }, 100);
        var o = 1,
            r = 0;

        function i() {
            t.slide.forEach(function(n, i) {
                o > 1 ? (setTimeout(function() {
                    document.querySelector(e).style.backgroundImage = "url('" + n + "')"
                }, r), r += t.delay[i]) : (o++, r = t.delay[i], document.querySelector(e).style.backgroundImage = "url('" + n + "')")
            })
        }
        i(), setInterval(function() {
            i()
        }, t.delay.length)
    }
lib.navigation.footer = COA
lib.navigation.footer {
    wrap = <ul class="list-1">|</ul>
    10 = HMENU
    10 {
        1 = TMENU
        1 {
            expAll = 1

            NO = 1
            NO {
                wrapItemAndSub = <li>|</li>
                stdWrap.htmlSpecialChars = 1
                linkWrap = |<span class="menu-bg"></span>
            }

            ACT = 1
            ACT {
                wrapItemAndSub = <li class="current">|</li>
                linkWrap = |<span class="menu-bg"></span>
            }

            IFSUB < .NO
            IFSUB {
                ATagParams = class="sf-with-ul"
            }
        }
    }
}
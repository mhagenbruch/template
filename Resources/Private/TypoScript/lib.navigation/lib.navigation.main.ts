lib.navigation.main = COA
lib.navigation.main {
	wrap = <ul class="nav navbar-nav">|</ul>
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

		2 = TMENU
		2 {
			expAll = 1
			wrap = <ul>|</ul>

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
			}
		}
	}
}
lib.navigation.main = TEXT
lib.navigation.main.value = HALLO
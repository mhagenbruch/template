variables {
    templateName = TEXT
    templateName.stdWrap {
        cObject = TEXT
        cObject {
            data = levelfield:-2, backend_layout_next_level, slide
            override.field = backend_layout
            split {
                token = pagets__
                1.current = 1
                1.wrap = |
            }
        }
        ifEmpty = default
    }
    content < styles.content.get
    content.select.where = colPos = 0

    slider < styles.content.get
    slider.select.where = colPos = 1
    slider.slide = -1

    contentRight < styles.content.get
    contentRight.select.where = colPos = 2

    contentSidebar < styles.content.get
    contentSidebar.select.where = colPos = 3
    contentSidebar.slide = -1

    contentFooter < styles.content.get
    contentFooter.select.where = colPos = 4
    contentFooter.slide = -1
    contentFooter.wrap = <div class="row"><div class="col-xs-12">|</div></div>

    mainMenu = COA
    mainMenu {
        wrap = <ul class="nav navbar-nav">|</ul>
        10 = HMENU
        10 {
            excludeUidList = 74,75,76
            1 = TMENU
            1 {
                submenuObjSuffixes = a |*| b
                expAll = 1
                NO = 1
                NO {
                    wrapItemAndSub = <li>|</li>
                    stdWrap.htmlSpecialChars = 1
                }

                ACT = 1
                ACT {
                    wrapItemAndSub = <li class="active">|</li>
                }

                IFSUB = 1
                IFSUB {
                    wrapItemAndSub  = <li class="dropdown">|</li>
                    ATagParams = class="dropdown-toggle" data-toggle="dropdown"||class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expand="false"
                    ATagBeforeWrap = 1
                    linkWrap = |<span class="caret"></span>
                }
                ACTIFSUB = 1
                ACTIFSUB {
                    wrapItemAndSub = <li class="active dropdown">|</li>
                    ATagParams = class="dropdown-toggle" data-toggle="dropdown"||class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expand="false"
                    ATagBeforeWrap = 1
                    linkWrap = |<span class="caret"></span>
                }
            }
            2a = TMENU
            2a {
                wrap = <ul class="dropdown-mega"><div class="row">|</div></ul>
                expAll = 1

                NO = 1
                NO {
                    wrapItemAndSub = <div class="col-lg-3 col-md-3 col-sm-3"><li>|</li></div>
                }
            }
            2b = TMENU
            2b {
                wrap = <ul class="dropdown-menu">|</ul>
                expAll = 1
                NO = 1
                NO {
                    wrapItemAndSub = <li>|</li>
                }
            }

            3 = TMENU
            3 {
                expAll = 1
                wrap = <ul class="third-level">|</ul>
                NO = 1
                NO {
                    wrapItemAndSub = <li>|</li>
                }
            }
        }
    }
    mainMenuMobile = COA
    mainMenuMobile {
        wrap = <ul class="nav navbar-nav">|</ul>
        10 = HMENU
        10 {
            excludeUidList = 34,7,8
            1 = TMENU
            1 {
                expAll = 1
                NO = 1
                NO {
                    wrapItemAndSub = <li>|</li>
                }
                ACT = 1
                ACT {
                    wrapItemAndSub = <li class="active">|</li>
                }
                IFSUB = 1
                IFSUB {
                    wrapItemAndSub = <li class="dropdown">|</li>
                    linkWrap = |<span class="caret"></span>
                    ATagBeforeWrap = 1
                    ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                }
                ACTIFSUB = 1
                ACTIFSUB {
                    wrapItemAndSub = <li class="active dropdown">|</li>
                    ATagBeforeWrap = 1
                    linkWrap = |<span class="caret"></span>
                    ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                }
            }
            2 = TMENU
            2 {
                wrap = <ul class="dropdown-menu">|</ul>
                expAll = 1
                NO = 1
                NO {
                    wrapItemAndSub = <li>|</li>
                }
            }
            3 = TMENU
            3 {
                expAll = 1
                NO = 1
                NO {
                    wrapItemAndSub = <li>|</li>
                }
            }
        }
    }

    langMenu = HMENU
    langMenu {
        special = language
        special.value = 0,1
        special.normalWhenNoLanguage = 0
        wrap = <ul id="language-select"> | </ul>
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                linkWrap = <li>|</li>
                stdWrap.override = [de] || [en]
                doNotLinkIt = 1
                stdWrap.typolink.parameter.data = page:uid
                stdWrap.typolink.additionalParams = &L=0 || &L=1
                stdWrap.typolink.addQueryString = 1
                stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
                stdWrap.typolink.addQueryString.method = GET
                stdWrap.typolink.useCacheHash = 1
                stdWrap.typolink.no_cache = 0
            }
            ACT < .NO
            ACT.linkWrap = <li class="active">|</li>

            USERDEF1 < .NO
            USERDEF2 < . ACT
        }
    }
    footerMenu = HMENU
    footerMenu {
        special = directory
        special.value = 93
        wrap = <div>|</div>
        1 = TMENU
        1 {
            expAll = 1
            NO = 1
            NO {
                wrapItemAndSub = |<span>&nbsp;&#124;&nbsp;</span> |*| |<span>&nbsp;&#124;&nbsp</span> |*| |
            }
        }
    }


    copyright = COA
    copyright.10 = TEXT
    copyright.10 {
        data = date:U
        strftime = %Y
        wrap = &copy; | Hasenauer+Koch GmbH + Co. KG
    }
    copyright.20 = TEXT
    copyright.20.typolink.parameter = 34
    copyright.20.wrap = &nbsp;&#124;&nbsp; |
    copyright.20.noTrimWrap = &#124; |

    copyright.30 = TEXT
    copyright.30.typolink.parameter = 7
    copyright.30.wrap = &nbsp;&#124;&nbsp; |
    copyright.30.noTrimWrap = &#124; |

    searchbox = COA_INT
    searchbox {
        10 < plugin.tx_kesearch_pi1
        10.resultPage = 8
        #10.cssFile >
        #wrap = <div class="pull-right">|</div>
    }

    headerimage = IMAGE
    headerimage {
        file {
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
        }
        params = class="header-image img-responsive"
    }



}
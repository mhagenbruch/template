lib.searchbox = COA_INT
lib.searchbox {
  stdWrap.prefixComment = 2 | lib.searchbox
  10 = TEXT
  10.typolink.parameter = 20
  10.typolink.returnLast = url
  10.wrap = <div id="indexedsearchbox" style="text-align:right; margin-top:20px;"><form class="form-inline" action="|" method="post" id="indexedsearch">
  20 = COA
  20 {
    10 = TEXT
    10.data = GP:tx_indexedsearch|sword
    10.htmlSpecialChars = 1
    10.wrap = <div class="form-group"><input style="margin-right:10px;" placeholder="Volltextsuche" name="tx_indexedsearch[sword]" value="|" id="searchInput" class="form-control" type="text" /></div>
    20 = COA
    20 {
      10 = TEXT
      10.value = <input type="hidden" name="tx_indexedsearch[sections]" value="0" />
      20 = TEXT
      20.value = <input name="tx_indexedsearch[submit_button]" value="Search" type="hidden" />
      30 = TEXT
      30.value = <button name="search" value="Suchen" class="btn btn-default" type="submit">Suchen</button>
    }
  }
  wrap = | </form></div>
}
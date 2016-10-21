lib.content.startpage = COA
lib.content.startpage {

	# Slider
	10 < styles.content.get
	10.select.where = colPos = 0
	10.wrap = <!-- ========== SLIDER ========== -->|

	# Welcome
	20 < styles.content.get
	20.select.where = colPos = 1
	20.wrap = <!-- ========== WELCOME ========== -->|

	# Teaser
	30 < styles.content.get
	30.select.where = colPos = 2
	30.wrap = <!-- ========== TEASER ========== -->|

	# News
	40 < styles.content.get
	40.select.where = colPos = 3
	40.wrap = <!-- ========== NEWS ========== -->|

	50 < styles.content.get
	50.select.where = colPos = 4
	50.wrap = <!-- ========== FOOTER ========== -->|
	50.slide = -1
}

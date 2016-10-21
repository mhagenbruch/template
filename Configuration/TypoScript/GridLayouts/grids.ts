# Ausgabe der Grid Elemente anpassen
tt_content.gridelements_pi1.20.10.setup {

	// 1 spalte 100%
	1spalte < lib.gridelements.defaultGridSetup
	1spalte {
		wrap = <div class="row">|</div>
		columns {
			0 < .default
			0.wrap = <div class="col-xs-12">|</div>
		}
	}
	// 2 spalten 50%/50%
	2spalten < lib.gridelements.defaultGridSetup
	2spalten {
		wrap = <div class="row">|</div>
		columns {
			1 < .default
			1.wrap = <div class="col-xs-6">|</div>

			2 < .default
			2.wrap = <div class="col-xs-6">|</div>
		}
	}
	// 3 spalten 33%/33%/33%
	3spalten < lib.gridelements.defaultGridSetup
	3spalten {
		wrap = <div class="row">|</div>
		columns {
			1 < .default
			1.wrap = <div class="col-xs-4">|</div>

			2 < .default
			2.wrap = <div class="col-xs-4">|</div>

			3 < .default
			3.wrap = <div class="col-xs-4">|</div>
		}
	}
	// container
	container < lib.gridelements.defaultGridSetup
	container {
		wrap = <div class="container">|</div>
	}
	// container fluid
	container-fluid < lib.gridelements.defaultGridSetup
	container-fluid {
		wrap = <div class="container-fluid">|</div>
	}
	// 4spalten
	4spalten < lib.gridelements.defaultGridSetup
	4spalten {
		wrap = <div class="row">|</div>
		columns {
			1 < .default
			1.wrap = <div class="col-xs-3">|</div>

			2 < .default
			2.wrap = <div class="col-xs-3">|</div>

			3 < .default
			3.wrap = <div class="col-xs-3">|</div>

			4 < .default
			5.wrap = <div class="col-xs-3">|</div>
		}
	}
}
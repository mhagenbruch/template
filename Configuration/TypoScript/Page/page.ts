page = PAGE
page {


	10 = FLUIDTEMPLATE
	10 {
		file = EXT:template/Resources/Private/Templates/index.html
		layoutRootPath = EXT:template/Resources/Private/Templates/Layouts/
		partialRootPath = EXT:template/Resources/Private/Templates/Partials/
		templateRootPath = EXT:template/Resources/Private/Templates/

		<INCLUDE_TYPOSCRIPT: source="FILE: EXT:template/Configuration/TypoScript/Page/variables.ts">
	}
	# Include variables

	headerData {
		10 = TEXT
		10.value = <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
		20 = TEXT
		20.field = subtitle // title
		20.wrap = <title>|</title>
	}

	meta {
		keywords.field = keywords
		#keywords.ifEmpty = DMS Hasenauer, DMS Hasenauer+Koch, Reutlingen, Deutsche Möbelspedition, DMS, Möbelspedition
		description.field = description
		#description.ifEmpty = DMS Hasenauer+Koch - Deutsche Möbelspedition
		robots = index, follow
		revisit-after = 5 days
		viewport = width=device-width,initial-scale=1.0,user-scalable=0
	}


	# CSS files to be included
	includeCSS {
		file1 = EXT:template/Resources/Public/Css/bootstrap.css
		file2 = EXT:template/Resources/Public/stylesheets/screen.css
		file3 = EXT:template/Resources/Public/Libraries/jquery.bxslider/jquery.bxslider.css
	}

	includeJS {
		#file1 = EXT:template/Resources/Public/Js/jquery.js
		file1 = //ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
		file1.external = 1
		file2 = EXT:template/Resources/Public/Js/bootstrap.min.js
		file3 = EXT:template/Resources/Public/Libraries/jquery.bxslider/jquery.bxslider.js
		file4 = EXT:template/Resources/Public/Js/app.js
	}

	shortcutIcon = EXT:template/Resources/Public/favicon.ico


	# Add some good classes to the bodytag to make a styling of special pages easier
	bodyTagCObject = COA
	bodyTagCObject   {
		stdWrap.wrap = <body class="|">

		# Add page UID
		10 = TEXT
		10 {
			value = page-{field:uid}
			insertData = 1
			noTrimWrap = || |
		}

		# Add uid of the backend-layout
		20 = TEXT
		20 {
			wrap = template-|
			data = levelfield:-2, backend_layout_next_level, slide
			override.field = backend_layout
			noTrimWrap = || |
			split {
				token = pagets__
				1.current = 1
				1.wrap = |
			}
			ifEmpty = default
		}
	}

}

lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class =
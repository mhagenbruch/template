config {
	#standards-setup:
	no_cache = 1
	doctype = html5
	#xmlprologue = none
	#xhtml_cleaning = all
	#disablePrefixComment = 1
	#meaningfulTempFilePrefix = 100

	# remove inline CSS/JS to external
	#removeDefaultJS = 1
	inlineStyle2TempFile = 1
	compressJs = 0
	compressCss = 0
	concatenateJs = 0
	concatenateCss = 0


	### from old page begin ###
	#simulateStaticDocuments = 1
	#simulateStaticDocuments_addTitle = 0
	#simulateStaticDocuments_noTypeIfNoTitle = 1
	spamProtectEmailAddresses = 1
	#spamProtectEmailAddresses_atSubst = (at)
	additionalHeaders = Content-Type:text/html;charset)utf-8
	htmlTag_langKey = de_DE
	index_enable = 1
	index_externals = 1
	language = de
	metaCharset = utf-8
	noPageTitle = 2
	tx_realurl_enable = 1
	absRefPrefix = /
	#baseURL = http://dms-hasenauer.localhost:8080/
	### from old page end ###


	extTarget = _top
	uniqueLinkVars = 1

	#admPanel = 1

	#English Language, sys_language_uid = 0
	sys_language_uid = 0
	locale_all = de_DE.UTF8
	sys_language_mode = content_fallback
	sys_language_overlay = 1
	linkVars = L
}

[globalVar = GP:L = 1]
	config {
		sys_language_uid = 1
		language = en
		locale_all = en_GB.UTF8
		htmlTag_langKey = en_GB
	}
[global]


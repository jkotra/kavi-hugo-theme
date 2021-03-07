# kavi-hugo-theme

Based on [ezhil](https://github.com/vividvilla/ezhil)

```toml

baseURL = "https://example.org/"
languageCode = "en-us"
title = "Example"
theme = "kavi-hugo-theme"
enableRobotsTXT = true
enableEmoji = true
paginate = 6 # Set the number of posts to show before overflowing to the next page.
summaryLength = 10 # Configure how long the post summary should be on the homepage.

pygmentsstyle = "tango"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true


[params]
subtitle = "Blog"
utterances = ""
favicon = "/static/chip.png"
logo = "/static/chip.svg"
blinkingcursor = true

googleAnalytics = ""
googleAdsense = ""

[[params.social]]
name = "Mail"
icon = "mail"
url = "mailto:jagadeesh@stdin.top"

[[params.social]]
name = "Github"
icon = "github"
url = "https://github.com/jkotra/"

[[params.social]]
name = "Twitter"
icon = "twitter"
url = "https://twitter.com/jagadeesh_kotra"

[[params.social]]
name = "RSS"
icon = "rss"
url = "index.xml"


# Menu links along the sidebar navigation.
[[menu.main]]
	identifier = "about"
	name = "About"
	url = "/about/"
	weight = 1 # Weight is an integer used to sort the menu items. The sorting goes from smallest to largest numbers. If weight is not defined for each menu entry, Hugo will sort the entries alphabetically.

[[menu.main]]
	identifier = "tags"
	name = "Tags"
	url = "/tags/"
	weight = 2

[[menu.main]]
	name = "Portfolio"
	identifier = "portfolio"
	url = "/portfolio/"
	weight = 3

[[menu.main]]
	name = "Lab"
	identifier = "playground"
	url = "http://lab.stdin.top"
	weight = 4

[[menu.main]]
	name = "PGP"
	identifier = "pgp"
	url = "/pgp/"
	weight = 5

# Privacy configurations: https://gohugo.io/about/hugo-and-gdpr/
[privacy]
  [privacy.disqus]
    disable = false
  [privacy.googleAnalytics]
    anonymizeIP = true
    disable = false
    respectDoNotTrack = false
    useSessionStorage = false
  [privacy.instagram]
    disable = false
    simple = false
  [privacy.twitter]
    disable = false
    enableDNT = false
    simple = false
  [privacy.vimeo]
    disable = false
    simple = false
  [privacy.youtube]
    disable = false
    privacyEnhanced = true
    
```

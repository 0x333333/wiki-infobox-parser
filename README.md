Wikipedia Infobox Parser  
======
[![build status](https://travis-ci.org/zp-j/wiki-infobox-parser.svg?branch=master)](https://travis-ci.org/zp-j/wiki-infobox-parser) [![npm version](https://badge.fury.io/js/wiki-infobox-parser.svg)](https://badge.fury.io/js/wiki-infobox-parser)

A parser for [Wikipedia Inforbox](https://en.wikipedia.org/wiki/Help:Infobox), as described in Wikipedia help page:

> An infobox is a fixed-format table designed to be added to the top right-hand corner of articles to consistently present a summary of some unifying aspect that the articles share and sometimes to improve navigation to other interrelated articles.

<img src="https://nodei.co/npm/wiki-infobox-parser.png?downloads=true&downloadRank=true"
		 alt="alt nodejs_infobox_screenshot"
		 width="300"
		 height="60">

 <img src="https://nodei.co/npm-dl/wiki-infobox-parser.png"
 		 alt="alt nodejs_infobox_screenshot"
 		 width="350"
 		 height="40.6">

## Features

It's still on development, it needs to support more markup templates.

- Get Wikipedia Infobox by keyword
- Support keyword redirection
- Convert Wikipedia Markup text to JSON text

## Installation

	npm install wiki-infobox-parser

## Usage

```javascript
var wikiParser = require('wiki-infobox-parser');

wikiParser('france', function(err, result) {
  if (err) {
		console.error(err.message);
	} else {
		console.log(result);
	}
});
```

## Result

<img src="http://7sbqda.com1.z0.glb.clouddn.com/Screen%20Shot%202015-10-20%20at%2000.11.13.png"
		 alt="alt nodejs_infobox_screenshot"
		 width="240"
		 height="400">

The parsed result is

```json
{
    "name": "Node.js",
    "logo": "frameless",
    "author": "Ryan Dahl",
    "developer": "[https://github.com/ry/node/blob/master/AUTHORS Node.js Developers], Joyent, [https://github.com/joyent/node/graphs/contributors GitHub Contributors]",
    "operating system": "OS X, Linux, Solaris, FreeBSD, OpenBSD, Microsoft Windows (older versions require Cygwin), webOS, NonStop OS",
    "status": "Active",
    "released": "2009/05/27",
    "latest release version": "4.2.1",
    "latest release date": "2015/10/13",
    "programming language": "C, C++, JavaScript",
    "genre": "Event-driven networking",
    "license": "MIT",
    "website": "http://nodejs.org"
}
```

## How to contribute

### Todo

* Support map caption
* Support link & free link
* Support picture
* Support template: {{fake clarify}}
* Support template: {{fake citation needed}}
* Support template: {{fake elucidate}}
* Support template: {{fake heading}}
* Support template: {{fake notes and references}}
* Support template: {{dummy ref}}
* Support template: {{dummy backlink}}
* Support template: {{dummy footnote}}
* Support template: {{break}}
* Support template: {{break|5}}
* Support template: {{clear}}
* Support template: {{clear|left}}
* Support template: {{clear|right}}
* Support template: {{plainlist}}
* Support template: {{startflatlist}}
* Support template: {{flatlist}}
* Support template: {{hlist|first item|second item|third item|...}}
* Support template: {{bulleted list |item1 |item2 |...}}
* Support template: {{pagelist}}
* Support template: {{nowrap}}
* Support template: {{italics}}
* Support template: {{smallcaps|small caps}}
* Support template: {{pad|4.0em}}

### Issue tracker

![img](http://7sbqda.com1.z0.glb.clouddn.com/Screen%20Shot%202015-10-20%20at%2001.25.49.png)

- Please check this project on PivatalTracker: [https://www.pivotaltracker.com/n/projects/1451530](https://www.pivotaltracker.com/n/projects/1451530)
- Github issue: [https://github.com/zp-j/wiki-infobox-parser/issues](https://github.com/zp-j/wiki-infobox-parser/issues)

Don't hesitate to contact me when you have any issue or idea about this parser, both PivotalTracker and Github issue are welcomed!

### Tests

```shell
# Test with a small test cases set
make test

# Test with a full test cases set
# It will take ~2mins, depending on the network
make test-all
```

Before sending a PR please add corresponding tests, thanks!

## Contributors

- [Zhipeng Jiang](http://zp-j.github.io)
- [Sagar Karira](https://github.com/sagarkarira)
- [Evan Boyle](https://github.com/EvanBoyle)

## Reference

- [Wikipedia API](http://en.wikipedia.org/w/api.php)
- [Syntax of Wiki Markup](http://en.wikipedia.org/wiki/Help:Wiki_markup)

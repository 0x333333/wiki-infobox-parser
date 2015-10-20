test:
		./node_modules/.bin/mocha --timeout 10000 --recursive -b --reporter spec

.PHONY: test
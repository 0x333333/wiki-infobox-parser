test:
		./node_modules/.bin/mocha ./test/tests1.js --timeout 10000 --recursive -b --reporter spec

test-all:
	./node_modules/.bin/mocha --timeout 10000 --recursive -b --reporter spec

.PHONY: test

BIN         = ./node_modules/.bin
MOCHA       = $(BIN)/mocha
JSHINT      = $(BIN)/jshint
MOCHA_OPTS  = --timeout 2000 --recursive -b
TEST_FILE   = ./test/tests1.js
TEST_FILES  = ./test

lint:
	$(JSHINT) lib/* test/*

test: lint
	$(MOCHA) $(MOCHA_OPTS) --reporter spec $(TEST_FILE)

test-all:
	$(MOCHA) $(MOCHA_OPTS) --reporter spec $(TEST_FILES)

.PHONY: test

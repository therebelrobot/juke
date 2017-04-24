PHONY: clean build develop lint test

clean:
	rm -rf ./build

build: clean
	yarn run babel -- . --ignore node_modules,build --source-maps -d build --copy-files

node_modules:
	yarn
	touch node_modules

develop: node_modules
	yarn run nodemon -- src/index.js -e js --watch ./src --ignore scripts/ --exec babel-node

lint:
	yarn run standard

test:
	yarn run ava -- ./**/*.test.js --ignore ./build --verbose

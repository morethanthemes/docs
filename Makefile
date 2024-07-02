.PHONY: build

build:
	yarn build
	rm -rf docs/*
	cp -r build/* docs/
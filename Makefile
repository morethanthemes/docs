.PHONY: build

serve:
	yarn start
build:
	yarn build
	rm -rf docs/*
	echo "The site is ready for deployment in the build folder."
default: build

build:
	bundle exec jekyll build

deploy: build
	scp -r _site aws.lfire.net:
	ssh aws.lfire.net ./deploy.sh

install-npm:
	npm ci || npm install

install-yarn:
	yarn install --frozen-lockfile || yarn install

pretty:
	npx prettier --write src

lint:
	npx eslint --fix "src/**"

pre-commit: pretty lint

build-prod: pretty lint
	npx tsc && vite build

build-dev: pretty lint
	npx vite build --mode development

preview:
	npx vite preview

start:
	npx vite --host 0.0.0.0 --port 4000

.DEFAULT_GOAL := help
.PHONY: help setup install lint plan
.ONESHELL:

ifdef env
ifeq ($(shell echo $(env) | egrep "development|test|production"),)
$(error env should be one of development|test|production)
endif
endif

help: ## Print the help documentation
	@grep -h -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install runtime dependencies
	npm install

lint: ## Static code analysis
	npm run lint

test: ## Run tests
	npm test

check:
	if [[ -z "${env}" ]]; then echo "env must be set to development|test|production";false; fi

plan: lint check ## Pulumi up
	pulumi up -s $(env) $(args)

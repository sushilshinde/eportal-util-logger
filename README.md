# Eportal Util Logger

![Latest NPM Release](https://img.shields.io/npm/v/eportal-util-logger.svg)
![NPM Downloads](https://img.shields.io/npm/dm/eportal-util-logger.svg)

This lib used by eportal internal projects for logging


## Features 
- Provides loggers for local and aws env

## ENV Specific setting
### In local environment, no env var is required to be setup 
### For AWS env for are the env vars required to be setup
```bash
LOG_LEVEL, AWS_LOG_GROUP_NAME,AWS_LOG_GROUP_NAME,
AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION

```
Provided role assumed by hosting service has access to cloudwatch 

## Installing

Using npm:

```bash
$ npm install eportal-util-logger
```

Using bower:

```bash
$ bower install eportal-util-logger
```

Using yarn:

```bash
$ yarn add eportal-util-logger
```

Using pnpm:

```bash
$ pnpm add eportal-util-logger
```

### Usage

```bash
const logger = require("eportal-util-logger")

logger.info("hello logger")

```


### License
NA
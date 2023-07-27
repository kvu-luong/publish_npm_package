#### Reference
- Guideline: https://mayar-elabbasy.hashnode.dev/creating-publishing-your-first-npm-package-with-typescript

- Eslint error: https://typescript-eslint.io/rules

### Start
- config eslint in eslintrc.js and .eslintignore
- config pretterrc
- make sure the lib package with the right version in the package.json 
- Setup in package.json script to able to pushlish this package.

  ```
   "format": "prettier --write \"src/**/*.ts\"",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\"",
    "lint:fix": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "build": "tsc",
    "prepare": "npm run build",
    "prepublish": "npm run lint",
    "version" : "npm run format && git add -A src"
  ```
- command
  npm pack -> checking the contain information of the package
  loign to the npm by basic token:
  npm login 
  ``` npm config set //registry.npmjs.org/:_authToken=npm_6cOsdfdfdsfdfrhH4vWTUADvxxiKxdxMzsBzxaprrqH16SkTK ```
  and 
  ``` npm config set registry https://registry.npmjs.org ```

  - npm publish -> push the package


[npm](https://www.npmjs.com/settings/rayfromvn/packages) package content after publish successful

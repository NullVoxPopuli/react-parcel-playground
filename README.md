# Playing with [Parcel](https://parceljs.org/getting_started.html)

```
yarn global add parcel-bundler
parcel index.html
```

Notes:
 - `parcel index.html` auto-refreshes / re-builds upon change of package.json
 - does not support decorators out of the box
 - browser appears to require refresh if there is a compilation error / doesn't recover once fixed
 - decorators are supported by converting to typecsript, which didn't work with react 'out of the box' -- needed to add tsconfig.json

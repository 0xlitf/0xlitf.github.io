npm -v
node -v

npm init -y

npm install typescript --save-dev

npm install @types/node --save-dev

npx tsc --init--rootDirsrc--outDir lib --esModuleInterop--resolveJsonModule--lib esnext,dom --module commonjs

open tsconfig.json，add include files and exclude

```
  "include": ["src/**/*"],
  "files": ["src/index.ts"],
  "exclude": ["node_modules"]
```


set `ts-node` and  `nodemon` to compile and run in real time, and listen modify:

```
npm install --save-dev ts-node
npm install --save-dev nodemon
```

open `package.json` to add npm script:

```
"scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch src/**/*.ts --exec ts-node src/index.ts"
},
```



```
npm run start
```

in index.ts:

```
import * as fs from "fs";

const path = "./message.txt";
const data = "Hello World!";
const encoding = "utf8";

console.log(data);

fs.writeFile(path, data, encoding, error => {
    if (error) {
        console.log(error);
    }
});
```

# Hello World

## JavaScript

* build: `N/A`
* run:
```bash
$ cat 01-hello_world.js 
// Standard JS (e.g. no types)
console.log(`Hello, Gigel!`);

const x = 123;
console.log(`x = ${x}`);

$ node 01-hello_world.js 
Hello, Gigel!
x = 123
```

## Typescript

* build (translate from TS to standard JS):
```bash
#
$ tsc 02-hello_world.ts 

$ ls -l 02*
-rw-r--r--  1 dn  staff  102 May  6 19:17 02-hello_world.js
-rw-r--r--  1 dn  staff  107 May  6 19:16 02-hello_world.ts

$ cat 02-hello_world.js 
// Typescript (e.g., types)
console.log('Hello, Gigel!');
var x = 123;
console.log("x = ".concat(x));
```

* run:
```bash
$ node 02-hello_world.js 
Hello, Gigel!
x = 123
```

## C++ 

* build:
```bash
$ em++ 03-hello_world.cpp -o 03-hello_world.js

$ ls -l 03-hello_world.*                      
-rw-r--r--  1 dn  staff     163 May  6 19:24 03-hello_world.cpp
-rw-r--r--  1 dn  staff  172344 May  6 19:29 03-hello_world.js
-rwxr-xr-x  1 dn  staff  162865 May  6 19:29 03-hello_world.wasm
```

* run:
```bash
$ node 03-hello_world.js
Hello, Gigel!
x = 123
```

### WASM file

```bash
$ file 03-hello_world.wasm 
03-hello_world.wasm: WebAssembly (wasm) binary module version 0x1 (MVP)

$ ls -l 03-hello_world.wasm 
-rwxr-xr-x  1 dn  staff  162865 May  6 19:29 03-hello_world.wasm
```

## Load WASM Into browser

* terminal 1: start a http server
```bash
$ python3 -m  http.server
```

* terminal 2: build/generate a mock web application which runs our JS file into browser
```bash
$ em++ 03-hello_world.cpp -o 03-hello_world.html
$ ls -l 03-hello_world.*
-rw-r--r--  1 dn  staff     163 May  6 19:34 03-hello_world.cpp
-rw-r--r--  1 dn  staff   22073 May  6 20:13 03-hello_world.html
-rw-r--r--  1 dn  staff  172344 May  6 20:13 03-hello_world.js
-rwxr-xr-x  1 dn  staff  162865 May  6 20:13 03-hello_world.wasm
```

* Open [http://localhost:8000/03-hello_world.html](http://localhost:8000/03-hello_world.html) in your favourite browser!

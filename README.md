# WASM demo

This repo contains a brief demo for WebAssembly and Emscripten.

## Emscripten

Links:
* [WASM](https://webassembly.github.io/spec/core/intro/introduction.html#scope)
* [emscripten](https://github.com/emscripten-core/emscripten)
* [Emscripten Documentation](https://emscripten.org/docs/index.html)
  * [Download and install](https://emscripten.org/docs/getting_started/downloads.html)
  * [Emscripten tutorial](https://emscripten.org/docs/getting_started/Tutorial.html#tutorial)
  * [Embind](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html)
  * [emscripten::val](https://emscripten.org/docs/api_reference/val.h.html)

## Setup

* Install emscripten (MAC OS and Ubuntu):
```bash
$ ./install.sh
[...]
~/dn/wasm-demo/third_party/emsdk [main] $ ./emsdk activate latest
Resolving SDK alias 'latest' to '3.1.59'
Resolving SDK version '3.1.59' to 'sdk-releases-e20ee09a8a740544c4bc6de5d4ba5f81f74b74d6-64bit'
Setting the following tools as active:
   node-16.20.0-64bit
   python-3.9.2-64bit
   releases-e20ee09a8a740544c4bc6de5d4ba5f81f74b74d6-64bit

Next steps:
- To conveniently access emsdk tools from the command line,
  consider adding the following directories to your PATH:
    /Users/dn/dn/wasm-demo/third_party/emsdk
    /Users/dn/dn/wasm-demo/third_party/emsdk/upstream/emscripten
- This can be done for the current shell by running:
    source "/Users/dn/dn/wasm-demo/third_party/emsdk/emsdk_env.sh"
- Configure emsdk in your shell startup scripts by running:
    echo 'source "/Users/dn/dn/wasm-demo/third_party/emsdk/emsdk_env.sh"' >> $HOME/.zprofile
```

* Export paths to compilers:
```bash
source "/Users/dn/dn/wasm-demo/third_party/emsdk/emsdk_env.sh"
```

* Check compiler version:
```bash
[wasm-demo] $ em++ --version
shared:INFO: (Emscripten: Running sanity checks)
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 3.1.59 (0e4c5994eb5b8defd38367a416d0703fd506ad81)
Copyright (C) 2014 the Emscripten authors (see AUTHORS.txt)
This is free and open source software under the MIT license.
There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

Note: If you prefer Docker environment, you can find an official [emsdk Docker](https://hub.docker.com/r/emscripten/emsdk).

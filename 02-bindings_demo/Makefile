TARGET_WASM=demo_main
CXX=em++
CXXFLAGS_BASE=-std=c++17 -Wall -Wextra 

EMSCRIPTEN_CLOSURE_FLAGS=--language_in ECMASCRIPT_2020 --language_out ECMASCRIPT_2020 --compilation_level ADVANCED_OPTIMIZATIONS --externs wasm/demo_main.extern.js 
EMSCRIPTEN_FLAGS=-fno-rtti -DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0 -g -Wno-deprecated-declarations -gseparate-dwarf -Wno-limited-postlink-optimizations -D DEBUG --emit-symbol-map --bind -s NO_EXIT_RUNTIME=1 -s ALLOW_MEMORY_GROWTH=1 -s ERROR_ON_UNDEFINED_SYMBOLS=1 -s WASM=1 -s MAX_WEBGL_VERSION=2 -s FULL_ES2=1 -s OFFSCREENCANVAS_SUPPORT=1 -s ENVIRONMENT=node --oformat=js -fdiagnostics-color -fno-strict-aliasing -funsigned-char -no-canonical-prefixes -s PRINTF_LONG_DOUBLE=1 -s GL_DEBUG=1 -s GL_ASSERTIONS=1 -s DEMANGLE_SUPPORT=1 -s ASSERTIONS=2 -s SAFE_HEAP=1 -s STACK_OVERFLOW_CHECK=2 --no-entry -s MODULARIZE=1 \
	--closure 1 								  \
	--closure-args "${EMSCRIPTEN_CLOSURE_FLAGS}"  \


CXXFLAGS_DEBUG=-g -O0
CXXFLAGS_RELEASE=-O3 -fno-exceptions -fno-rtti

CXXFLAGS=${CXXFLAGS_BASE} ${CXXFLAGS_DEBUG} ${EMSCRIPTEN_FLAGS} 
# CXXFLAGS=${CXXFLAGS_BASE} ${CXXFLAGS_RELEASE} ${EMSCRIPTEN_FLAGS} 

build: build_wasm build_ts 

build_ts:
	tsc -p tsconfig.json
	cp build/demo_main.js build/demo_main.cjs

build_wasm:
	${CXX} ${CXXFLAGS} -Iwasm/src -o build/${TARGET_WASM}.js \
		wasm/demo_main.cpp                                   \
		wasm/src/pm2unpm.cpp                                 \
		wasm/test/utils.cpp  					             

run:
	node build/main.js

clean:
	rm -rf tsconfig.tsbuildinfo main.js *.js *.wasm *.html build/*

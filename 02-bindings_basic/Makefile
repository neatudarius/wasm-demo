TARGET_WASM=demo_main
CXX=em++
CXXFLAGS_BASE=-std=c++17 -Wall -Wextra 

EMSCRIPTEN_FLAGS=                                    \
	-s ENVIRONMENT=node                              \
	-fno-rtti -DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0  \
	--emit-symbol-map                                \
	--bind                                           \
	-s NO_EXIT_RUNTIME=1                             \
	-s ALLOW_MEMORY_GROWTH=1                         \
	-s ERROR_ON_UNDEFINED_SYMBOLS=1                  \
	-s WASM=1                                        \
	-s FULL_ES2=1                                    \
	-s MODULARIZE=1                                  \
	--no-entry                                       \
	--closure 1 								     \
	--closure-args "--language_in ECMASCRIPT_2022 --language_out ECMASCRIPT_2022 --compilation_level ADVANCED_OPTIMIZATIONS --externs wasm/demo_main.extern.js"

CXXFLAGS_DEBUG=-D DEBUG -g -O0

CXXFLAGS=${CXXFLAGS_BASE} ${CXXFLAGS_DEBUG} ${EMSCRIPTEN_FLAGS} 

build: install build_wasm build_ts 

install:
	mkdir -p build
	npm install

build_ts:
	tsc -p tsconfig.json
	cp build/demo_main.js build/demo_main.cjs

build_wasm:
	${CXX} ${CXXFLAGS}             \
		-Iwasm/src                 \
		-o build/${TARGET_WASM}.js \
		wasm/demo_main.cpp

run:
	node build/main.js

clean:
	rm -rf tsconfig.tsbuildinfo main.js *.js *.wasm *.html build/* node_modules


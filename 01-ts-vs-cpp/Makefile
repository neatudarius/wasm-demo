TARGET_TS=pm2unpm_ts
TARGET_WASM=pm2unpm_wasm
CXX=em++
CXXFLAGS_BASE=-std=c++17 -Wall -Wextra 
EMSCRIPTEN_FLAGS=-sALLOW_MEMORY_GROWTH
CXXFLAGS_DEBUG=-g -O0

# https://emscripten.org/docs/optimizing/Optimizing-Code.html
CXXFLAGS_RELEASE=-O3 -fno-exceptions -fno-rtti

# CXXFLAGS=${CXXFLAGS_BASE} ${EMSCRIPTEN_FLAGS} ${CXXFLAGS_DEBUG}
CXXFLAGS=${CXXFLAGS_BASE} ${EMSCRIPTEN_FLAGS} ${CXXFLAGS_RELEASE}

build: build_ts build_wasm

build_ts:
	tsc ${TARGET_TS}.ts
	
build_wasm:
	${CXX} ${CXXFLAGS} ${TARGET_WASM}.cpp -o ${TARGET_WASM}.js

run_ts:
	node ${TARGET_TS}.js

run_wasm:
	node ${TARGET_WASM}.js

build_wasm_html:
	${CXX} ${CXXFLAGS} ${TARGET_WASM}.cpp -o ${TARGET_WASM}.html

start_server:
	python3 -m http.server

clean:
	rm -f ${TARGET_TS}.js ${TARGET_WASM}.js ${TARGET_WASM}.wasm ${TARGET_WASM}.html

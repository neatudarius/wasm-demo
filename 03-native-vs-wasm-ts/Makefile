TARGET_TS=algorithm_ts
TARGET_WASM=algorithm_wasm
TARGET_NATIVE=algorithm_native

CXX=em++
CXXFLAGS_BASE=-std=c++17 -Wall -Wextra 
CXXFLAGS_DEBUG=-g -O0
CXXFLAGS_RELEASE=-O3 -fno-exceptions -fno-rtti 
EMSCRIPTEN_FLAGS=-sALLOW_MEMORY_GROWTH

# https://emscripten.org/docs/optimizing/Optimizing-Code.html

# CXXFLAGS=${CXXFLAGS_BASE} ${CXXFLAGS_DEBUG}
CXXFLAGS=${CXXFLAGS_BASE} ${CXXFLAGS_RELEASE}

build: build_wasm build_ts build_native

# Compiles the C++ code to WebAssembly.
build_wasm:
	em++ ${CXXFLAGS} ${EMSCRIPTEN_FLAGS} ${TARGET_WASM}.cpp -o ${TARGET_WASM}.html

# Compiles the TypeScript code to JavaScript.
build_ts: build_wasm
	tsc ${TARGET_TS}.ts
	
	# Generates a mirror html (replace ${TARGET_WASM}.js with ${TARGET_TS},js)
	cp ${TARGET_WASM}.html ${TARGET_TS}.html
	# This works on MACOS only
	sed -i "" "s/${TARGET_WASM}/${TARGET_TS}/g" "${TARGET_TS}.html" 2>&1 &> /dev/null || true
	# This works on Linux only
	sed -i "s/${TARGET_WASM}/${TARGET_TS}/g" "${TARGET_TS}.html" 2>&1 &> /dev/null || true

# Compiles the C++ code to native code.
build_native:
	clang++ ${CXXFLAGS} ${TARGET_WASM}.cpp -o ${TARGET_NATIVE}

clean:
	rm -f                     \
		${TARGET_TS}.js       \
		${TARGET_TS}.html     \
		${TARGET_WASM}.js     \
		${TARGET_WASM}.wasm   \
		${TARGET_WASM}.html   \
		${TARGET_NATIVE}      \
	
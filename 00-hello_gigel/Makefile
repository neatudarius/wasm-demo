TARGET=main

CXX=em++
CXXFLAGS=-Wall -Wextra -g

build: build_wasm
	
build_wasm:	
	${CXX} ${CXXFLAGS} ${TARGET}.cpp -o ${TARGET}.js

run_wasm:
	node ${TARGET}.js

clean:
	rm -f ${TARGET}.js ${TARGET}.wasm

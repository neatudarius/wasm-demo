build: build_wasm

build_wasm:
	emcc arguments.c -o arguments.js

run_wasm:
	node arguments.js first_param second_param

.PHONY: clean

clean:
	rm arguments.js arguments.wasm

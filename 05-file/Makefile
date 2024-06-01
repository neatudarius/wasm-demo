build: build_wasm_preload_file build_wasm_preload_directory

build_wasm_preload_file:
	emcc file.c -o file.js --preload-file ./1-file.txt

build_wasm_preload_directory:
	emcc file.c -o file.js --preload-file ./

run_wasm_file_1:
	node file.js 1-file.txt

run_wasm_file_2:
	node file.js 2-file.txt

.PHONY: clean

clean:
	rm file.data file.js file.wasm

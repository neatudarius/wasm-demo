# Compile all targets.
build: build_js build_ts build_wasm

# N/A, JS cannot be comopiled
build_js:

# Compiles TS to JS: creates 02-hello_world.js
build_ts:
	tsc 02-hello_world.ts 

# Compiles C++ to JS: creates 03-hello_world.js + 03-hello_world.wasm
# Also, creates an html for loading WASM into browser.
build_wasm:	
	em++ 03-hello_world.cpp -o 03-hello_world.html

# Runs JS target.
run_js:
	node 01-hello_world.js

# Runs TS target (compiled into JS).
run_ts:
	node 02-hello_world.js
	
# Runs C++ target (compiled into WASM, loaded from JS).
run_wasm:
	node 03-hello_world.js

clean:
	rm -f                       \
		02-hello_world.js       \
		03-hello_world.js       \
		03-hello_world.wasm     \
		03-hello_world.html     \

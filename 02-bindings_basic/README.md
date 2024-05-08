# App from Scratch

In real applications, we need to build our own skel, to be able to customize it.

```bash
$ tree .
.
├── Makefile                   # root Makefile, builds everything
├── README.md               
├── build                      # build directory
├── node_modules               # npm build directory
├── main.ts                    # app entry point: let's assume we run a main() function from JS which never stops
├── module.d.ts
├── package-lock.json
├── package.json
├── ts
│   └── myapp_util.ts
├── tsconfig.json
└── wasm
    ├── DemoModuleLoader.ts
    ├── demo_main.cpp
    ├── demo_main.extern.js
    └── emscriptenAPI.d.ts
```


## Tasks

### TODO1: Play with uggly infinite loop
Uncomment TODO1's code.

### TODO2: Play with do_work
Uncomment TODO2's code.

### TODO3: Add Demodule.increment()

Add a Demodule.increment() function: TS pass a number to the function and the function will increment it by 1.
Implementation in C++.

Possible solution:
```bash
diff --git a/02-bindings_basic/main.ts b/02-bindings_basic/main.ts
index 11e1afc..7466910 100644
--- a/02-bindings_basic/main.ts
+++ b/02-bindings_basic/main.ts
@@ -23,9 +23,14 @@ async function main() {
 
     // TODO3: Add a Demodule.increment() function: TS pass a number to the function and the function will increment it by 1.
     // Implementation in C++.
-    // var x: number = 1;
-    // var y: number = demoModule.increment(x);
-    // console.log(`Increment ${x} by 1: ${y}`);
+    var x: number = 1;
+    var y: number = demoModule.increment(x);
+    console.log(`Increment ${x} by 1: ${y}`);
+
+    for (var i = 1; i <= 10; ++i) {
+        console.log(`Calling increment(${i})...`);
+        console.log(`Result: ${demoModule.increment(i)}`);
+    }
 }
 
 await main();
diff --git a/02-bindings_basic/wasm/DemoModuleLoader.ts b/02-bindings_basic/wasm/DemoModuleLoader.ts
index f54cce9..05c30ea 100644
--- a/02-bindings_basic/wasm/DemoModuleLoader.ts
+++ b/02-bindings_basic/wasm/DemoModuleLoader.ts
@@ -7,6 +7,12 @@ export interface DemoModule extends EmscriptenModule {
      * Note: Implemented in C++ only!
      */
     hello_world(): void;
+
+    /**
+     * TS prototype for the increment() function.
+     * Note: Implemented in C++ only!
+     */
+    increment(x: number): number;
 }
 
 /**
diff --git a/02-bindings_basic/wasm/demo_main.cpp b/02-bindings_basic/wasm/demo_main.cpp
index 31d693f..9dcaad5 100644
--- a/02-bindings_basic/wasm/demo_main.cpp
+++ b/02-bindings_basic/wasm/demo_main.cpp
@@ -10,9 +10,21 @@ void hello_world() {
     std::cout << "Hello Gigel!\n";
 }
 
+/**
+ * Binding for the increment() function.
+*/
+int increment(int value) {
+    return value + 1;
+}
+
 EMSCRIPTEN_BINDINGS(demo_module) {
     /**
      * Basic binding example.
      **/
     function("hello_world", &hello_world);
+
+    /**
+     * Binding for the increment() function.
+    */
+    function("increment", &increment);
 };
diff --git a/02-bindings_basic/wasm/demo_main.extern.js b/02-bindings_basic/wasm/demo_main.extern.js
index 2c89742..9a59276 100644
--- a/02-bindings_basic/wasm/demo_main.extern.js
+++ b/02-bindings_basic/wasm/demo_main.extern.js
@@ -1,4 +1,5 @@
 Module.hello_world = function () {};
+Module.increment = function () {};
 
 /** @type {!string} */
 Module.ASAN_OPTIONS;

```
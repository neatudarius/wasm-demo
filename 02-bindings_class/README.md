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

### TODO4: Create a class type in C++, instantiante it from TS

Solve TODO4.

Possible solution (diff relative to `02-bindings_basic`):
```bash
[wasm-demo] $ diff -r 02-bindings_basic 02-bindings_class
diff -r 02-bindings_basic/main.ts 02-bindings_class/main.ts
5,6d4
<     demoModule.hello_world();
< 
8,28c6,14
<     // Uggly implementation: infinit loop, call every 1000 ms hello_world().
<     // Homework: Implement in a better way => promise and recursion.
<     // while (true) {
<     //     await new Promise(resolve =>
<     //         setTimeout(() => {
<     //                 demoModule.hello_world();
<     //                 resolve(true);
<     //             },
<     //             1000
<     //         )
<     //     );
<     // }
< 
<     // TODO2: Add your code here.
<     // do_work(demoModule);
< 
<     // TODO3: Add a Demodule.increment() function: TS pass a number to the function and the function will increment it by 1.
<     // Implementation in C++.
<     // var x: number = 1;
<     // var y: number = demoModule.increment(x);
<     // console.log(`Increment ${x} by 1: ${y}`);
---
>     // Implement the Gigel class in C++ and use it here.
>     // Gigel.accumulate() should be implemented in C++. It should take a number and accumulate it.
>     // Gigel.get_sum() should be implemented in C++. It should return the accumulated sum.
>     // e.g.:
>     const gigel = new demoModule.Gigel();
>     gigel.accumulate(1);
>     console.log(gigel.get_sum());
>     gigel.accumulate(100);
>     console.log(gigel.get_sum());
diff -r 02-bindings_basic/package-lock.json 02-bindings_class/package-lock.json
2c2
<   "name": "02-bindings_basic",
---
>   "name": "02-bindings_class",
diff -r 02-bindings_basic/wasm/DemoModuleLoader.ts 02-bindings_class/wasm/DemoModuleLoader.ts
1a2,27
>  * TS interface for the Gigel class (implementation in C++).
>  */
> export interface Gigel {
>     /**
>      * Accumulates the given number.
>      * @param x - Number to accumulate.
>      */
>     accumulate(x: number): void;
> 
>     /**
>      * Returns the accumulated sum.
>      */
>     get_sum(): number;
> }
> 
> /**
>  * TS intermediate interface for the Gigel constructor.
>  */
> export interface GigelConstructor {
>     /**
>      * Creates the chimera rendering system
>      */
>     new (): Gigel;
> }
> 
> /**
9a36,40
> 
>     /**
>      * Provides access to the chimera constructor in the renderer module
>      */
>     Gigel: GigelConstructor;
diff -r 02-bindings_basic/wasm/demo_main.cpp 02-bindings_class/wasm/demo_main.cpp
12a13,24
> class Gigel {
>     int sum = 0;
> public:
>     void accumulate(int x) {
>         sum += x;
>     }
> 
>     int get_sum() {
>         return sum;
>     }
> };
> 
17a30,34
> 
>     class_<Gigel>("Gigel")
>         .constructor<>()
>         .function("accumulate", &Gigel::accumulate)
>         .function("get_sum", &Gigel::get_sum);
```

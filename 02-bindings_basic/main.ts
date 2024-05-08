import { loadDemoModule } from "./wasm/DemoModuleLoader.js";

async function main() {
    const demoModule = await loadDemoModule();
    demoModule.hello_world();

    // TODO1: Add your code here.
    // Uggly implementation: infinit loop, call every 1000 ms hello_world().
    // Homework: Implement in a better way => promise and recursion.
    // while (true) {
    //     await new Promise(resolve =>
    //         setTimeout(() => {
    //                 demoModule.hello_world();
    //                 resolve(true);
    //             },
    //             1000
    //         )
    //     );
    // }

    // TODO2: Add your code here.
    // do_work(demoModule);

    // TODO3: Add a Demodule.increment() function: TS pass a number to the function and the function will increment it by 1.
    // Implementation in C++.
    // var x: number = 1;
    // var y: number = demoModule.increment(x);
    // console.log(`Increment ${x} by 1: ${y}`);
}

await main();

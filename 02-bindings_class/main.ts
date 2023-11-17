import { loadDemoModule } from "./wasm/DemoModuleLoader.js";

async function main() {
    const demoModule = await loadDemoModule();
    // TODO4: Add your code here.
    // Implement the Gigel class in C++ and use it here.
    // Gigel.accumulate() should be implemented in C++. It should take a number and accumulate it.
    // Gigel.get_sum() should be implemented in C++. It should return the accumulated sum.
    // e.g.:
    const gigel = new demoModule.Gigel();
    gigel.accumulate(1);
    console.log(gigel.get_sum());
    gigel.accumulate(100);
    console.log(gigel.get_sum());
}

await main();

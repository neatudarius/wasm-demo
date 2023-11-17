import { generateData, runTest} from "./ts/test/utils.js"
import { pm2unpm_ts } from "./ts/pm2unpm.js";
import { loadDemoModule } from "./wasm/emscripten/DemoModuleLoader.js";
import {test_all_bindings} from "./test_bindings/_all.js";

async function main() {
    const demoModule = await loadDemoModule();
    demoModule.hello();
    
    test_all_bindings(demoModule);
    
    runTest("ts", generateData, pm2unpm_ts);
    // run_test("wasm", generate_data, () => { demoModule.pm2unpm();});
}

await main();

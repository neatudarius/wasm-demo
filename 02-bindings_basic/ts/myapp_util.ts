import { DemoModule } from "../wasm/DemoModuleLoader";

export function do_work(demoModule: DemoModule) {
    for (var i = 1; i <= 10; ++i) {
        console.log(`Calling hello_world() ${i} times...`);
        demoModule.hello_world();
    }
}
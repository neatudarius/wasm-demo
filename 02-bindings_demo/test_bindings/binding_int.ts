import { DemoModule } from "../wasm/emscripten/DemoModuleLoader.js";

export const test_binding_int_example = (demoModule: DemoModule) => {
    console.log(`==================== EMSCRIPTEN BINDINGS ========================`);
    console.log(`==================== integer values      ========================`);

    for (var i of [10, 100, 1000]) {
        const tsValue = i;
        const cppValue = demoModule.binding_int_example(tsValue);

        console.log(`[ ts ] test_integer(): tsValue = ${tsValue} vs cppValue = ${cppValue}`);
    }
};

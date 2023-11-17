import { DemoModule } from "../wasm/emscripten/DemoModuleLoader.js";

export const test_binding_float_example = (demoModule: DemoModule) => {
    console.log(`==================== EMSCRIPTEN BINDINGS ========================`);
    console.log(`==================== float values        ========================`);

    for (var i of [10, 0.8, 100]) {
        const tsValue = i;
        const cppValue = demoModule.binding_float_example(tsValue);

        console.log(`[ ts ] test_float(): tsValue = ${tsValue} vs cppValue = ${cppValue}`);
    }
};

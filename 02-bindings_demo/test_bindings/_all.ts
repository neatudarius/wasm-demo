
import { DemoModule } from "../wasm/emscripten/DemoModuleLoader.js";
import { test_binding_int_example } from "./binding_int.js";
import { test_binding_float_example } from "./binding_float.js";
import { test_binding_enum_example } from "./binding_enum.js";

export const test_all_bindings = (demoModule: DemoModule) => {
    console.log(`==================== EMSCRIPTEN BINDINGS ========================`);
    console.log(`==================== begin testing ...   ========================`);
    console.log(``);

    test_binding_int_example(demoModule);
    test_binding_float_example(demoModule);
    test_binding_enum_example(demoModule);

    console.log(``);
    console.log(`==================== end testing !!!    ========================`);
}

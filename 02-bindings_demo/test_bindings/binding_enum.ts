// import { EmscriptenEnum } from "../wasm/emscripten/BindingUtils.js";
import { DemoModule } from "../wasm/emscripten/DemoModuleLoader.js";
import { EncodingType } from "../ts/enum_example.js";

export const test_binding_enum_example = (demoModule: DemoModule) => {
    console.log(`==================== EMSCRIPTEN BINDINGS ========================`);
    console.log(`==================== enum values         ========================`);

    for (var i in EncodingType) {
        if (Number(EncodingType[i]) >= 0) {
            // const tsValue = Number(EncodingType[i]) as EncodingType;
            // const cppValue = ((demoModule.binding_enum_example({value: tsValue} as unknown as EncodingType) as unknown) as EmscriptenEnum<EncodingType>).value;
            // console.log(`[ts  ] ${tsValue == cppValue ? "match " : " !match"}: ${EncodingType[tsValue]} vs ${EncodingType[cppValue]}`);

            demoModule.binding_enum_example(demoModule.dependencies.EncodingType.jpeg);
        }
    }
};
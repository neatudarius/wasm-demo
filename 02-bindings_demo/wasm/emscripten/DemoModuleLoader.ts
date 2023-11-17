import { EncodingType } from "../../ts/enum_example.js";

export interface DemoModuleDependencies {
    EncodingType: typeof EncodingType;
}

export const DEFAULT_DEMO_MODULE_DEPENDENCIES: DemoModuleDependencies = {
    EncodingType,
};

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/emscripten/index.d.ts
 */
export interface DemoModule extends EmscriptenModule {
    dependencies: DemoModuleDependencies;

    /**
     * Basic example API binding.
     */
    hello(): void;

    /**
     * Pass value - binding examples.
     */
    binding_int_example(value: number): number;
    binding_float_example(value: number): number;

    /**
     * Pass enum value - binding example.
     */
    binding_enum_example(encodingType: EncodingType): EncodingType;
}

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/emscripten/index.d.ts
 */
interface DemoModuleInit extends EmscriptenModuleFactory<DemoModule> {
    default: (init: Partial<DemoModule>) => Promise<DemoModule>;
}

/**
 * Loads DemoModule.
 * 
 * @returns WASM loaded module.
 */
export async function loadDemoModule(): Promise<DemoModule> {
    const init = (await import(`../../../build/demo_main.cjs`)) as DemoModuleInit;

    const demoModule = await init.default({
        dependencies: DEFAULT_DEMO_MODULE_DEPENDENCIES,
        locateFile(path: string) {
            if (path.endsWith(".wasm")) {
                return new URL(`../../../build/demo_main.wasm`, import.meta.url).href;
            } else {
                return path;
            }
        }
    });

    return demoModule;
}

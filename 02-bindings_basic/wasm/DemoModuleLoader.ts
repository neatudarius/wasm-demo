/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/emscripten/index.d.ts
 */
export interface DemoModule extends EmscriptenModule {
    /**
     * TS prototype for the hello_world() function.
     * Note: Implemented in C++ only!
     */
    hello_world(): void;
}

/**
 * Init wrapper for DemoModule.
 * 
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
    /**
     * Loads demo_main.js from storage.
     */
    const init = (await import(`../../build/demo_main.cjs`)) as DemoModuleInit;

    /**
     * Loads demo_main.wasm from storage.
     */
    const demoModule = await init.default({
        locateFile(path: string) {
            if (path.endsWith(".wasm")) {
                return new URL(`../../build/demo_main.wasm`, import.meta.url).href;
            } else {
                return path;
            }
        }
    });

    /**
     * WASM module was loaded, it can be used now.
     */
    return demoModule;
}

declare module "*.wasm" {
    const url: string;
    // eslint-disable-next-line import/no-default-export -- need the url to be default
    export default url;
}

declare module "*/demo_main.js" {}
declare module "*/demo_main.cjs" {}

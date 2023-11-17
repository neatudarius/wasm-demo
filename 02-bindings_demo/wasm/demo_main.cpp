#include "src/pm2unpm.h"

#include <iostream>
#include <emscripten/bind.h>

#include "test/utils.h"
#include "src/enum_example.h"

using namespace emscripten;

void hello() {
    std::cout << "Hello Gigel!\n";
}

int binding_int_example(int value) {
    std::cout << "[wasm] binding_int_example(): " << value << "\n";
    return value + 1;
}

float binding_float_example(float value) {
    std::cout << "[wasm] binding_float_example(): " << value << "\n";
    return value * 0.25;
}

EncodingType binding_enum_example(EncodingType encodingType) {
    std::cout << "[wasm] get_enum(): " << static_cast<int>(encodingType) << "\n";
    return encodingType;
}

EMSCRIPTEN_BINDINGS(demo_module) {
    /**
     * Basic binding example.
     **/
    function("hello", &hello);

    /**
     * Function with primitives types in paramters / returned values.
     **/
    function("binding_int_example", &binding_int_example);
    function("binding_float_example", &binding_float_example);

    /**
     * Function with enum values in paramters / returned values.
     * 
     * Depends on other bindings: EncodingType.
     **/
    function("binding_enum_example", &binding_enum_example);
    /**
     * Binding for enum class EncodingType.
     **/
    enum_<EncodingType>("EncodingType")
        .value("rgba", EncodingType::rgba)
        .value("jpeg", EncodingType::jpeg)
        .value("png", EncodingType::png)
        .value("webp", EncodingType::webp)
        .value("yuv420", EncodingType::yuv420);

};

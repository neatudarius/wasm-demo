#include <iostream>
#include <emscripten/bind.h>

using namespace emscripten;

/**
 * C++ implementation for the hello_world() function.
*/
void hello_world() {
    std::cout << "Hello Gigel!\n";
}

EMSCRIPTEN_BINDINGS(demo_module) {
    /**
     * Basic binding example.
     **/
    function("hello_world", &hello_world);
};

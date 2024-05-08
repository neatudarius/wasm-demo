#include <iostream>
#include <emscripten/bind.h>

using namespace emscripten;

/**
 * C++ implementation for the hello_world() function.
*/
void hello_world() {
    std::cout << "Hello Gigel!\n";
}

class Gigel {
    int sum = 0;
public:
    void accumulate(int x) {
        sum += x;
    }

    int get_sum() {
        return sum;
    }
};

EMSCRIPTEN_BINDINGS(demo_module) {
    /**
     * Basic binding example.
     **/
    function("hello_world", &hello_world);

    class_<Gigel>("Gigel")
        .constructor<>()
        .function("accumulate", &Gigel::accumulate)
        .function("get_sum", &Gigel::get_sum);
};

#include "utils.h"
#include "../src/pm2unpm.h"

#include <algorithm>
#include <chrono>
#include <iostream>
#include <numeric>
#include <string_view>

std::vector<uint8_t> generate_data() {
    const int n = 100'000'000;
    std::vector<uint8_t> pixels(n * 4);
    for (int i = 0; i < n; i += 4) {
        pixels[i    ] = i % 255;
        pixels[i + 1] = i % 255;
        pixels[i + 2] = i % 255;
        pixels[i + 3] = i % 255;
    }

    return pixels;
}

void run_test() {
    auto pixels = generate_data();

    auto start = std::chrono::steady_clock::now();
    pm2unpm(pixels);
    auto end = std::chrono::steady_clock::now();

    std::chrono::duration<double> duration = end - start;
    std::cout << "[wasm] execution time " << duration.count() << "s\n";

    long long sum = std::accumulate(std::begin(pixels), std::end(pixels), 0LL);
    std::cout << "[wasm] sum = " << sum << "\n";
}

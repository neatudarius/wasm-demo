#include <algorithm>
#include <chrono>
#include <iostream>
#include <numeric>
#include <vector>

void pm2unpm(std::vector<uint8_t>& pixels) {
    for (std::size_t i = 0; i < pixels.size(); i += 4) {
        const auto a = pixels[i + 3];
        if (a == 0) {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = a;
            continue;
        }

        pixels[i] = (pixels[i] * 255) / a;
        pixels[i + 1] = (pixels[i + 1] * 255) / a;
        pixels[i + 2] = (pixels[i + 2] * 255) / a;
    }
}

int main() {
    const int n = 100'000'000;
    std::vector<uint8_t> pixels(n * 4);
    for (int i = 0; i < n; i += 4) {
        pixels[i    ] = i % 255;
        pixels[i + 1] = i % 255;
        pixels[i + 2] = i % 255;
        pixels[i + 3] = i % 255;
    }

    auto start = std::chrono::steady_clock::now();
    pm2unpm(pixels);
    auto end = std::chrono::steady_clock::now();

    std::chrono::duration<double> duration = end - start;
    std::cout << "[wasm] execution time " << duration.count() << "s\n";

    long long sum = std::accumulate(std::begin(pixels), std::end(pixels), 0LL);
    std::cout << "[wasm] sum = " << sum << "\n";

    return 0;
}
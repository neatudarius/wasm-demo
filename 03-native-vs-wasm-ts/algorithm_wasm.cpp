#include <algorithm>
#include <chrono>
#include <iostream>
#include <numeric>
#include <vector>

/**
 * Convert **INPLACE** premultiplied alpha to unpremultiplied alpha.
 * 
 * @param pixels - The pixel data. 
 */
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

/**
 * Generate pixel data.
 * 
 * @return The pixel data.
 * 
 */
auto generate_data(const std::size_t n) {
    std::vector<uint8_t> pixels(n * 4);
    for (std::size_t i = 0; i < n; i += 4) {
        pixels[i    ] = i % 255;
        pixels[i + 1] = i % 255;
        pixels[i + 2] = i % 255;
        pixels[i + 3] = i % 255;
    }
    return pixels;
}

/**
 * Basic control sum printed to console.
 * 
 * @param pixels - The pixel data.
 */
void print_control_sum(const std::vector<uint8_t>& pixels) {
    long long sum = std::accumulate(std::begin(pixels), std::end(pixels), 0LL);
    std::cout << "[cpp] sum = " << sum << "\n";
}

/**
 * Main entry.
 */
int main() {
    const std::size_t n = 250'000'000;
    const auto pixels = generate_data(n);
    const auto repeat_times = 1;

    {
        // Print control sum.
        auto new_pixels = pixels;
        pm2unpm(new_pixels);
        print_control_sum(new_pixels);
    }

    {
        // Performance test.
        auto start = std::chrono::steady_clock::now();
        for (int i = 1; i <= repeat_times; ++i) {
            auto new_pixels = pixels;
            pm2unpm(new_pixels);
        }
        auto end = std::chrono::steady_clock::now();

        std::chrono::duration<double> duration = end - start;
        std::cout << "[cpp] execution time " << duration.count() << "s\n";
    }
    return 0;
}

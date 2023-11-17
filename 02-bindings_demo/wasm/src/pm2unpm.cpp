#include "pm2unpm.h"

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

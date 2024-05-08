/**
 * Convert **INPLACE** premultiplied alpha to unpremultiplied alpha.
 * 
 * @param pixels - The pixel data. 
 */
function pm2unpm(pixels: Uint8ClampedArray): void {
    for (let i = 0; i < pixels.length; i += 4) {
        const a = pixels[i + 3];
        if (a === 0) {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = a;
            continue;
        }

        pixels[i] = Math.round((pixels[i] * 255) / a);
        pixels[i + 1] = Math.round((pixels[i + 1] * 255) / a);
        pixels[i + 2] = Math.round((pixels[i + 2] * 255) / a);
    }
}

/**
 * Generate pixel data.
 * 
 * @return The pixel data.
 * 
 */
function generate_data(n: number): Uint8ClampedArray {
    const pixels = new Uint8ClampedArray(n * 4);
    for (var i = 0; i < n; i += 4) {
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
function print_sum(pixels: Uint8ClampedArray): void {
    var sum: number = 0;
    for (var i = 0; i < pixels.length; ++i) {
        sum += pixels[i];
    }

    // Tried recuce and it's slower...
    // const sum: number = pixels.reduce((acc, value) => acc + value, 0);

    console.log(`[ts] sum = ${sum}`);
}

/**
 * Main entry.
 */
function main(): void {
    const n: number = 250_000_000;
    const pixels: Uint8ClampedArray = generate_data(n);
    const repeat_times: number = 1;

    {
        // Print control sum.
        var new_pixels = new Uint8ClampedArray(pixels);
        pm2unpm(new_pixels);
        print_sum(new_pixels);
    }

    {
        // Performance test.
        const start = performance.now();
        for (var i = 1; i <= repeat_times; ++i) {
            var new_pixels = new Uint8ClampedArray(pixels);
            pm2unpm(new_pixels);
        }
        const end = performance.now();
     
        const duration = (end - start) / 1000;
        console.log(`[ts] execution time = ${duration}s`);
    }
}

main();

/**
 * Generate dummy test data.
 */
export function generateData() {
    const n = 100000000;
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
 * Generate dummy test data.
 */
export function runTest(name: string, generate: () => Uint8ClampedArray, pm2unpm: (pixels: Uint8ClampedArray) => void ) {
    const pixels = generate();

    const start = performance.now();
    pm2unpm(pixels);
    const end = performance.now();
    const duration = (end - start) / 1000;
    console.log(`[${name}] execution time = ${duration}s`);

    var sum = 0;
    for (var i = 0; i < pixels.length; ++i) {
        sum += pixels[i];
    }

    console.log(`[${name}] sum = ${sum}`);
}
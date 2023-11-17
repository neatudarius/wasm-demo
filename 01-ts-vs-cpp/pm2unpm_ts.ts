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

function main(): void {
    const n = 100000000;
    const pixels = new Uint8ClampedArray(n * 4);
    for (var i = 0; i < n; i += 4) {
        pixels[i    ] = i % 255;
        pixels[i + 1] = i % 255;
        pixels[i + 2] = i % 255;
        pixels[i + 3] = i % 255;
    }

    const start = performance.now();
    pm2unpm(pixels);
    const end = performance.now();
    const duration = (end - start) / 1000;

    console.log(`[ts] execution time = ${duration}s`);

    var sum = 0;
    for (var i = 0; i < n; ++i) {
        sum += pixels[i];
    }
    console.log(`[ts] sum = ${sum}`);
}

main();

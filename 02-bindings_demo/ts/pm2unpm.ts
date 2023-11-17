// Premultiplied alpha to un-premultiplied alpha algorithm on CPU.
export function pm2unpm_ts(pixels: Uint8ClampedArray): void {
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

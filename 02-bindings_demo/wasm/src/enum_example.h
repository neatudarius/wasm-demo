#pragma once

#include <cstdint>

enum class EncodingType : uint32_t {
    /**
     * NO encoding (raw pixel format).
     */
    rgba = 1,

    /**
     * JPEG encoding.
     */
    jpeg = 2,

    /**
     * PNG encoding.
     */
    png = 3,

    /**
     * WEBP encoding.
     * FUTURE Add/check support for WEBP encoding.
     */
    webp = 4,

    /**
     * YUV420 encoding.
     */
    yuv420 = 5
};
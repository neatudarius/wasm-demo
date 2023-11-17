Module.hello = function () {};

Module.binding_int_example = function () {};
Module.binding_float_example = function () {};
Module.binding_enum_example = function () {};

/**
 * Enum for EncodingType
 * @enum {enum}
 */
Module.dependencies.EncodingType = {
    rgba: 1,
    jpeg: 2,
    png: 3,
    webp: 4,
    yuv420: 5
};

/** @type {!string} */
Module.ASAN_OPTIONS;

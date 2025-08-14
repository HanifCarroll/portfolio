(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/lib/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
function onError(err) {
    throw err; /* ↓ Check stack trace ↓ */ 
}
module.exports = function jiti(filename, opts) {
    const jiti = __turbopack_context__.r("[project]/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/dist/jiti.js [app-client] (ecmascript)");
    opts = {
        onError,
        ...opts
    };
    if (!opts.transform) {
        opts.transform = __turbopack_context__.r("[project]/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/dist/babel.js [app-client] (ecmascript)");
    }
    return jiti(filename, opts);
};
}}),
}]);

//# sourceMappingURL=ed4f2_jiti_lib_index_f6479db5.js.map
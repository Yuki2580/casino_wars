"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@hono";
exports.ids = ["vendor-chunks/@hono"];
exports.modules = {

/***/ "(rsc)/./node_modules/@hono/valibot-validator/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@hono/valibot-validator/dist/esm/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vValidator: () => (/* binding */ vValidator)\n/* harmony export */ });\n/* harmony import */ var hono_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hono/validator */ \"(rsc)/./node_modules/hono/dist/validator/index.js\");\n/* harmony import */ var valibot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! valibot */ \"(rsc)/./node_modules/valibot/dist/index.js\");\n\n\nconst vValidator = (target, schema, hook)=>(0,hono_validator__WEBPACK_IMPORTED_MODULE_0__.validator)(target, (value, c)=>{\n        const result = (0,valibot__WEBPACK_IMPORTED_MODULE_1__.safeParse)(schema, value);\n        if (hook) {\n            const hookResult = hook(result, c);\n            if (hookResult instanceof Response || hookResult instanceof Promise) {\n                return hookResult;\n            }\n        }\n        if (!result.success) {\n            return c.json(result, 400);\n        }\n        const data = result.output;\n        return data;\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGhvbm8vdmFsaWJvdC12YWxpZGF0b3IvZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1A7QUFDN0IsTUFBTUUsYUFBYSxDQUFDQyxRQUFRQyxRQUFRQyxPQUFTTCx5REFBU0EsQ0FBQ0csUUFBUSxDQUFDRyxPQUFPQztRQUMxRSxNQUFNQyxTQUFTUCxrREFBU0EsQ0FBQ0csUUFBUUU7UUFDakMsSUFBSUQsTUFBTTtZQUNOLE1BQU1JLGFBQWFKLEtBQUtHLFFBQVFEO1lBQ2hDLElBQUlFLHNCQUFzQkMsWUFBWUQsc0JBQXNCRSxTQUFTO2dCQUNqRSxPQUFPRjtZQUNYO1FBQ0o7UUFDQSxJQUFJLENBQUNELE9BQU9JLE9BQU8sRUFBRTtZQUNqQixPQUFPTCxFQUFFTSxJQUFJLENBQUNMLFFBQVE7UUFDMUI7UUFDQSxNQUFNTSxPQUFPTixPQUFPTyxNQUFNO1FBQzFCLE9BQU9EO0lBQ1gsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWZyb2cvLi9ub2RlX21vZHVsZXMvQGhvbm8vdmFsaWJvdC12YWxpZGF0b3IvZGlzdC9lc20vaW5kZXguanM/M2NkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2YWxpZGF0b3IgfSBmcm9tICdob25vL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBzYWZlUGFyc2UgfSBmcm9tICd2YWxpYm90JztcbmV4cG9ydCBjb25zdCB2VmFsaWRhdG9yID0gKHRhcmdldCwgc2NoZW1hLCBob29rKSA9PiB2YWxpZGF0b3IodGFyZ2V0LCAodmFsdWUsIGMpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBzYWZlUGFyc2Uoc2NoZW1hLCB2YWx1ZSk7XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgY29uc3QgaG9va1Jlc3VsdCA9IGhvb2socmVzdWx0LCBjKTtcbiAgICAgICAgaWYgKGhvb2tSZXN1bHQgaW5zdGFuY2VvZiBSZXNwb25zZSB8fCBob29rUmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tSZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gYy5qc29uKHJlc3VsdCwgNDAwKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdC5vdXRwdXQ7XG4gICAgcmV0dXJuIGRhdGE7XG59KTtcbiJdLCJuYW1lcyI6WyJ2YWxpZGF0b3IiLCJzYWZlUGFyc2UiLCJ2VmFsaWRhdG9yIiwidGFyZ2V0Iiwic2NoZW1hIiwiaG9vayIsInZhbHVlIiwiYyIsInJlc3VsdCIsImhvb2tSZXN1bHQiLCJSZXNwb25zZSIsIlByb21pc2UiLCJzdWNjZXNzIiwianNvbiIsImRhdGEiLCJvdXRwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@hono/valibot-validator/dist/esm/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@hono/node-server/dist/serve-static.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@hono/node-server/dist/serve-static.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serveStatic: () => (/* binding */ serveStatic)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n// src/serve-static.ts\n\n// node_modules/hono/dist/utils/filepath.js\nvar getFilePath = (options)=>{\n    let filename = options.filename;\n    if (/(?:^|[\\/\\\\])\\.\\.(?:$|[\\/\\\\])/.test(filename)) {\n        return;\n    }\n    let root = options.root || \"\";\n    const defaultDocument = options.defaultDocument || \"index.html\";\n    if (filename.endsWith(\"/\")) {\n        filename = filename.concat(defaultDocument);\n    } else if (!filename.match(/\\.[a-zA-Z0-9]+$/)) {\n        filename = filename.concat(\"/\" + defaultDocument);\n    }\n    filename = filename.replace(/^\\.?[\\/\\\\]/, \"\");\n    filename = filename.replace(/\\\\/, \"/\");\n    root = root.replace(/\\/$/, \"\");\n    let path = root ? root + \"/\" + filename : filename;\n    path = path.replace(/^\\.?\\//, \"\");\n    return path;\n};\n// node_modules/hono/dist/utils/mime.js\nvar getMimeType = (filename, mimes = baseMimes)=>{\n    const regexp = /\\.([a-zA-Z0-9]+?)$/;\n    const match = filename.match(regexp);\n    if (!match) {\n        return;\n    }\n    let mimeType = mimes[match[1]];\n    if (mimeType && mimeType.startsWith(\"text\") || mimeType === \"application/json\") {\n        mimeType += \"; charset=utf-8\";\n    }\n    return mimeType;\n};\nvar baseMimes = {\n    aac: \"audio/aac\",\n    avi: \"video/x-msvideo\",\n    avif: \"image/avif\",\n    av1: \"video/av1\",\n    bin: \"application/octet-stream\",\n    bmp: \"image/bmp\",\n    css: \"text/css\",\n    csv: \"text/csv\",\n    eot: \"application/vnd.ms-fontobject\",\n    epub: \"application/epub+zip\",\n    gif: \"image/gif\",\n    gz: \"application/gzip\",\n    htm: \"text/html\",\n    html: \"text/html\",\n    ico: \"image/x-icon\",\n    ics: \"text/calendar\",\n    jpeg: \"image/jpeg\",\n    jpg: \"image/jpeg\",\n    js: \"text/javascript\",\n    json: \"application/json\",\n    jsonld: \"application/ld+json\",\n    map: \"application/json\",\n    mid: \"audio/x-midi\",\n    midi: \"audio/x-midi\",\n    mjs: \"text/javascript\",\n    mp3: \"audio/mpeg\",\n    mp4: \"video/mp4\",\n    mpeg: \"video/mpeg\",\n    oga: \"audio/ogg\",\n    ogv: \"video/ogg\",\n    ogx: \"application/ogg\",\n    opus: \"audio/opus\",\n    otf: \"font/otf\",\n    pdf: \"application/pdf\",\n    png: \"image/png\",\n    rtf: \"application/rtf\",\n    svg: \"image/svg+xml\",\n    tif: \"image/tiff\",\n    tiff: \"image/tiff\",\n    ts: \"video/mp2t\",\n    ttf: \"font/ttf\",\n    txt: \"text/plain\",\n    wasm: \"application/wasm\",\n    webm: \"video/webm\",\n    weba: \"audio/webm\",\n    webp: \"image/webp\",\n    woff: \"font/woff\",\n    woff2: \"font/woff2\",\n    xhtml: \"application/xhtml+xml\",\n    xml: \"application/xml\",\n    zip: \"application/zip\",\n    \"3gp\": \"video/3gpp\",\n    \"3g2\": \"video/3gpp2\",\n    gltf: \"model/gltf+json\",\n    glb: \"model/gltf-binary\"\n};\n// src/serve-static.ts\nvar createStreamBody = (stream)=>{\n    const body = new ReadableStream({\n        start (controller) {\n            stream.on(\"data\", (chunk)=>{\n                controller.enqueue(chunk);\n            });\n            stream.on(\"end\", ()=>{\n                controller.close();\n            });\n        },\n        cancel () {\n            stream.destroy();\n        }\n    });\n    return body;\n};\nvar serveStatic = (options = {\n    root: \"\"\n})=>{\n    return async (c, next)=>{\n        if (c.finalized) {\n            return next();\n        }\n        const url = new URL(c.req.url);\n        const filename = options.path ?? decodeURIComponent(url.pathname);\n        let path = getFilePath({\n            filename: options.rewriteRequestPath ? options.rewriteRequestPath(filename) : filename,\n            root: options.root,\n            defaultDocument: options.index ?? \"index.html\"\n        });\n        if (!path) {\n            return next();\n        }\n        path = `./${path}`;\n        if (!(0,fs__WEBPACK_IMPORTED_MODULE_0__.existsSync)(path)) {\n            await options.onNotFound?.(path, c);\n            return next();\n        }\n        const mimeType = getMimeType(path);\n        if (mimeType) {\n            c.header(\"Content-Type\", mimeType);\n        }\n        const stat = (0,fs__WEBPACK_IMPORTED_MODULE_0__.lstatSync)(path);\n        const size = stat.size;\n        if (c.req.method == \"HEAD\" || c.req.method == \"OPTIONS\") {\n            c.header(\"Content-Length\", size.toString());\n            c.status(200);\n            return c.body(null);\n        }\n        const range = c.req.header(\"range\") || \"\";\n        if (!range) {\n            c.header(\"Content-Length\", size.toString());\n            return c.body(createStreamBody((0,fs__WEBPACK_IMPORTED_MODULE_0__.createReadStream)(path)), 200);\n        }\n        c.header(\"Accept-Ranges\", \"bytes\");\n        c.header(\"Date\", stat.birthtime.toUTCString());\n        const parts = range.replace(/bytes=/, \"\").split(\"-\", 2);\n        const start = parts[0] ? parseInt(parts[0], 10) : 0;\n        let end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;\n        if (size < end - start + 1) {\n            end = size - 1;\n        }\n        const chunksize = end - start + 1;\n        const stream = (0,fs__WEBPACK_IMPORTED_MODULE_0__.createReadStream)(path, {\n            start,\n            end\n        });\n        c.header(\"Content-Length\", chunksize.toString());\n        c.header(\"Content-Range\", `bytes ${start}-${end}/${stat.size}`);\n        return c.body(createStreamBody(stream), 206);\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGhvbm8vbm9kZS1zZXJ2ZXIvZGlzdC9zZXJ2ZS1zdGF0aWMubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0JBQXNCO0FBQ3VDO0FBRTdELDJDQUEyQztBQUMzQyxJQUFJRyxjQUFjLENBQUNDO0lBQ2pCLElBQUlDLFdBQVdELFFBQVFDLFFBQVE7SUFDL0IsSUFBSSwrQkFBK0JDLElBQUksQ0FBQ0QsV0FBVztRQUNqRDtJQUNGO0lBQ0EsSUFBSUUsT0FBT0gsUUFBUUcsSUFBSSxJQUFJO0lBQzNCLE1BQU1DLGtCQUFrQkosUUFBUUksZUFBZSxJQUFJO0lBQ25ELElBQUlILFNBQVNJLFFBQVEsQ0FBQyxNQUFNO1FBQzFCSixXQUFXQSxTQUFTSyxNQUFNLENBQUNGO0lBQzdCLE9BQU8sSUFBSSxDQUFDSCxTQUFTTSxLQUFLLENBQUMsb0JBQW9CO1FBQzdDTixXQUFXQSxTQUFTSyxNQUFNLENBQUMsTUFBTUY7SUFDbkM7SUFDQUgsV0FBV0EsU0FBU08sT0FBTyxDQUFDLGNBQWM7SUFDMUNQLFdBQVdBLFNBQVNPLE9BQU8sQ0FBQyxNQUFNO0lBQ2xDTCxPQUFPQSxLQUFLSyxPQUFPLENBQUMsT0FBTztJQUMzQixJQUFJQyxPQUFPTixPQUFPQSxPQUFPLE1BQU1GLFdBQVdBO0lBQzFDUSxPQUFPQSxLQUFLRCxPQUFPLENBQUMsVUFBVTtJQUM5QixPQUFPQztBQUNUO0FBRUEsdUNBQXVDO0FBQ3ZDLElBQUlDLGNBQWMsQ0FBQ1QsVUFBVVUsUUFBUUMsU0FBUztJQUM1QyxNQUFNQyxTQUFTO0lBQ2YsTUFBTU4sUUFBUU4sU0FBU00sS0FBSyxDQUFDTTtJQUM3QixJQUFJLENBQUNOLE9BQU87UUFDVjtJQUNGO0lBQ0EsSUFBSU8sV0FBV0gsS0FBSyxDQUFDSixLQUFLLENBQUMsRUFBRSxDQUFDO0lBQzlCLElBQUlPLFlBQVlBLFNBQVNDLFVBQVUsQ0FBQyxXQUFXRCxhQUFhLG9CQUFvQjtRQUM5RUEsWUFBWTtJQUNkO0lBQ0EsT0FB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LENBQUNNLE9BQU87WUFDVmpCLEVBQUVXLE1BQU0sQ0FBQyxrQkFBa0JFLEtBQUtFLFFBQVE7WUFDeEMsT0FBT2YsRUFBRVgsSUFBSSxDQUFDRixpQkFBaUJ6RSxvREFBZ0JBLENBQUNhLFFBQVE7UUFDMUQ7UUFDQXlFLEVBQUVXLE1BQU0sQ0FBQyxpQkFBaUI7UUFDMUJYLEVBQUVXLE1BQU0sQ0FBQyxRQUFRQyxLQUFLTSxTQUFTLENBQUNDLFdBQVc7UUFDM0MsTUFBTUMsUUFBUUgsTUFBTTNGLE9BQU8sQ0FBQyxVQUFVLElBQUkrRixLQUFLLENBQUMsS0FBSztRQUNyRCxNQUFNOUIsUUFBUTZCLEtBQUssQ0FBQyxFQUFFLEdBQUdFLFNBQVNGLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTTtRQUNsRCxJQUFJRyxNQUFNSCxLQUFLLENBQUMsRUFBRSxHQUFHRSxTQUFTRixLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU1SLEtBQUtDLElBQUksR0FBRztRQUMxRCxJQUFJQSxPQUFPVSxNQUFNaEMsUUFBUSxHQUFHO1lBQzFCZ0MsTUFBTVYsT0FBTztRQUNmO1FBQ0EsTUFBTVcsWUFBWUQsTUFBTWhDLFFBQVE7UUFDaEMsTUFBTUgsU0FBUzFFLG9EQUFnQkEsQ0FBQ2EsTUFBTTtZQUFFZ0U7WUFBT2dDO1FBQUk7UUFDbkR2QixFQUFFVyxNQUFNLENBQUMsa0JBQWtCYSxVQUFVVCxRQUFRO1FBQzdDZixFQUFFVyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFcEIsTUFBTSxDQUFDLEVBQUVnQyxJQUFJLENBQUMsRUFBRVgsS0FBS0MsSUFBSSxDQUFDLENBQUM7UUFDOUQsT0FBT2IsRUFBRVgsSUFBSSxDQUFDRixpQkFBaUJDLFNBQVM7SUFDMUM7QUFDRjtBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtZnJvZy8uL25vZGVfbW9kdWxlcy9AaG9uby9ub2RlLXNlcnZlci9kaXN0L3NlcnZlLXN0YXRpYy5tanM/OTEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2VydmUtc3RhdGljLnRzXG5pbXBvcnQgeyBjcmVhdGVSZWFkU3RyZWFtLCBleGlzdHNTeW5jLCBsc3RhdFN5bmMgfSBmcm9tIFwiZnNcIjtcblxuLy8gbm9kZV9tb2R1bGVzL2hvbm8vZGlzdC91dGlscy9maWxlcGF0aC5qc1xudmFyIGdldEZpbGVQYXRoID0gKG9wdGlvbnMpID0+IHtcbiAgbGV0IGZpbGVuYW1lID0gb3B0aW9ucy5maWxlbmFtZTtcbiAgaWYgKC8oPzpefFtcXC9cXFxcXSlcXC5cXC4oPzokfFtcXC9cXFxcXSkvLnRlc3QoZmlsZW5hbWUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCByb290ID0gb3B0aW9ucy5yb290IHx8IFwiXCI7XG4gIGNvbnN0IGRlZmF1bHREb2N1bWVudCA9IG9wdGlvbnMuZGVmYXVsdERvY3VtZW50IHx8IFwiaW5kZXguaHRtbFwiO1xuICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgZmlsZW5hbWUgPSBmaWxlbmFtZS5jb25jYXQoZGVmYXVsdERvY3VtZW50KTtcbiAgfSBlbHNlIGlmICghZmlsZW5hbWUubWF0Y2goL1xcLlthLXpBLVowLTldKyQvKSkge1xuICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuY29uY2F0KFwiL1wiICsgZGVmYXVsdERvY3VtZW50KTtcbiAgfVxuICBmaWxlbmFtZSA9IGZpbGVuYW1lLnJlcGxhY2UoL15cXC4/W1xcL1xcXFxdLywgXCJcIik7XG4gIGZpbGVuYW1lID0gZmlsZW5hbWUucmVwbGFjZSgvXFxcXC8sIFwiL1wiKTtcbiAgcm9vdCA9IHJvb3QucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICBsZXQgcGF0aCA9IHJvb3QgPyByb290ICsgXCIvXCIgKyBmaWxlbmFtZSA6IGZpbGVuYW1lO1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwuP1xcLy8sIFwiXCIpO1xuICByZXR1cm4gcGF0aDtcbn07XG5cbi8vIG5vZGVfbW9kdWxlcy9ob25vL2Rpc3QvdXRpbHMvbWltZS5qc1xudmFyIGdldE1pbWVUeXBlID0gKGZpbGVuYW1lLCBtaW1lcyA9IGJhc2VNaW1lcykgPT4ge1xuICBjb25zdCByZWdleHAgPSAvXFwuKFthLXpBLVowLTldKz8pJC87XG4gIGNvbnN0IG1hdGNoID0gZmlsZW5hbWUubWF0Y2gocmVnZXhwKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgbWltZVR5cGUgPSBtaW1lc1ttYXRjaFsxXV07XG4gIGlmIChtaW1lVHlwZSAmJiBtaW1lVHlwZS5zdGFydHNXaXRoKFwidGV4dFwiKSB8fCBtaW1lVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICBtaW1lVHlwZSArPSBcIjsgY2hhcnNldD11dGYtOFwiO1xuICB9XG4gIHJldHVybiBtaW1lVHlwZTtcbn07XG52YXIgYmFzZU1pbWVzID0ge1xuICBhYWM6IFwiYXVkaW8vYWFjXCIsXG4gIGF2aTogXCJ2aWRlby94LW1zdmlkZW9cIixcbiAgYXZpZjogXCJpbWFnZS9hdmlmXCIsXG4gIGF2MTogXCJ2aWRlby9hdjFcIixcbiAgYmluOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICBibXA6IFwiaW1hZ2UvYm1wXCIsXG4gIGNzczogXCJ0ZXh0L2Nzc1wiLFxuICBjc3Y6IFwidGV4dC9jc3ZcIixcbiAgZW90OiBcImFwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0XCIsXG4gIGVwdWI6IFwiYXBwbGljYXRpb24vZXB1Yit6aXBcIixcbiAgZ2lmOiBcImltYWdlL2dpZlwiLFxuICBnejogXCJhcHBsaWNhdGlvbi9nemlwXCIsXG4gIGh0bTogXCJ0ZXh0L2h0bWxcIixcbiAgaHRtbDogXCJ0ZXh0L2h0bWxcIixcbiAgaWNvOiBcImltYWdlL3gtaWNvblwiLFxuICBpY3M6IFwidGV4dC9jYWxlbmRhclwiLFxuICBqcGVnOiBcImltYWdlL2pwZWdcIixcbiAganBnOiBcImltYWdlL2pwZWdcIixcbiAganM6IFwidGV4dC9qYXZhc2NyaXB0XCIsXG4gIGpzb246IFwiYXBwbGljYXRpb24vanNvblwiLFxuICBqc29ubGQ6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICBtYXA6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICBtaWQ6IFwiYXVkaW8veC1taWRpXCIsXG4gIG1pZGk6IFwiYXVkaW8veC1taWRpXCIsXG4gIG1qczogXCJ0ZXh0L2phdmFzY3JpcHRcIixcbiAgbXAzOiBcImF1ZGlvL21wZWdcIixcbiAgbXA0OiBcInZpZGVvL21wNFwiLFxuICBtcGVnOiBcInZpZGVvL21wZWdcIixcbiAgb2dhOiBcImF1ZGlvL29nZ1wiLFxuICBvZ3Y6IFwidmlkZW8vb2dnXCIsXG4gIG9neDogXCJhcHBsaWNhdGlvbi9vZ2dcIixcbiAgb3B1czogXCJhdWRpby9vcHVzXCIsXG4gIG90ZjogXCJmb250L290ZlwiLFxuICBwZGY6IFwiYXBwbGljYXRpb24vcGRmXCIsXG4gIHBuZzogXCJpbWFnZS9wbmdcIixcbiAgcnRmOiBcImFwcGxpY2F0aW9uL3J0ZlwiLFxuICBzdmc6IFwiaW1hZ2Uvc3ZnK3htbFwiLFxuICB0aWY6IFwiaW1hZ2UvdGlmZlwiLFxuICB0aWZmOiBcImltYWdlL3RpZmZcIixcbiAgdHM6IFwidmlkZW8vbXAydFwiLFxuICB0dGY6IFwiZm9udC90dGZcIixcbiAgdHh0OiBcInRleHQvcGxhaW5cIixcbiAgd2FzbTogXCJhcHBsaWNhdGlvbi93YXNtXCIsXG4gIHdlYm06IFwidmlkZW8vd2VibVwiLFxuICB3ZWJhOiBcImF1ZGlvL3dlYm1cIixcbiAgd2VicDogXCJpbWFnZS93ZWJwXCIsXG4gIHdvZmY6IFwiZm9udC93b2ZmXCIsXG4gIHdvZmYyOiBcImZvbnQvd29mZjJcIixcbiAgeGh0bWw6IFwiYXBwbGljYXRpb24veGh0bWwreG1sXCIsXG4gIHhtbDogXCJhcHBsaWNhdGlvbi94bWxcIixcbiAgemlwOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICBcIjNncFwiOiBcInZpZGVvLzNncHBcIixcbiAgXCIzZzJcIjogXCJ2aWRlby8zZ3BwMlwiLFxuICBnbHRmOiBcIm1vZGVsL2dsdGYranNvblwiLFxuICBnbGI6IFwibW9kZWwvZ2x0Zi1iaW5hcnlcIlxufTtcblxuLy8gc3JjL3NlcnZlLXN0YXRpYy50c1xudmFyIGNyZWF0ZVN0cmVhbUJvZHkgPSAoc3RyZWFtKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgIHN0YXJ0KGNvbnRyb2xsZXIpIHtcbiAgICAgIHN0cmVhbS5vbihcImRhdGFcIiwgKGNodW5rKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShjaHVuayk7XG4gICAgICB9KTtcbiAgICAgIHN0cmVhbS5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2FuY2VsKCkge1xuICAgICAgc3RyZWFtLmRlc3Ryb3koKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYm9keTtcbn07XG52YXIgc2VydmVTdGF0aWMgPSAob3B0aW9ucyA9IHsgcm9vdDogXCJcIiB9KSA9PiB7XG4gIHJldHVybiBhc3luYyAoYywgbmV4dCkgPT4ge1xuICAgIGlmIChjLmZpbmFsaXplZCkge1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChjLnJlcS51cmwpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gb3B0aW9ucy5wYXRoID8/IGRlY29kZVVSSUNvbXBvbmVudCh1cmwucGF0aG5hbWUpO1xuICAgIGxldCBwYXRoID0gZ2V0RmlsZVBhdGgoe1xuICAgICAgZmlsZW5hbWU6IG9wdGlvbnMucmV3cml0ZVJlcXVlc3RQYXRoID8gb3B0aW9ucy5yZXdyaXRlUmVxdWVzdFBhdGgoZmlsZW5hbWUpIDogZmlsZW5hbWUsXG4gICAgICByb290OiBvcHRpb25zLnJvb3QsXG4gICAgICBkZWZhdWx0RG9jdW1lbnQ6IG9wdGlvbnMuaW5kZXggPz8gXCJpbmRleC5odG1sXCJcbiAgICB9KTtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuICAgIHBhdGggPSBgLi8ke3BhdGh9YDtcbiAgICBpZiAoIWV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgIGF3YWl0IG9wdGlvbnMub25Ob3RGb3VuZD8uKHBhdGgsIGMpO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG4gICAgY29uc3QgbWltZVR5cGUgPSBnZXRNaW1lVHlwZShwYXRoKTtcbiAgICBpZiAobWltZVR5cGUpIHtcbiAgICAgIGMuaGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIG1pbWVUeXBlKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdCA9IGxzdGF0U3luYyhwYXRoKTtcbiAgICBjb25zdCBzaXplID0gc3RhdC5zaXplO1xuICAgIGlmIChjLnJlcS5tZXRob2QgPT0gXCJIRUFEXCIgfHwgYy5yZXEubWV0aG9kID09IFwiT1BUSU9OU1wiKSB7XG4gICAgICBjLmhlYWRlcihcIkNvbnRlbnQtTGVuZ3RoXCIsIHNpemUudG9TdHJpbmcoKSk7XG4gICAgICBjLnN0YXR1cygyMDApO1xuICAgICAgcmV0dXJuIGMuYm9keShudWxsKTtcbiAgICB9XG4gICAgY29uc3QgcmFuZ2UgPSBjLnJlcS5oZWFkZXIoXCJyYW5nZVwiKSB8fCBcIlwiO1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgIGMuaGVhZGVyKFwiQ29udGVudC1MZW5ndGhcIiwgc2l6ZS50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiBjLmJvZHkoY3JlYXRlU3RyZWFtQm9keShjcmVhdGVSZWFkU3RyZWFtKHBhdGgpKSwgMjAwKTtcbiAgICB9XG4gICAgYy5oZWFkZXIoXCJBY2NlcHQtUmFuZ2VzXCIsIFwiYnl0ZXNcIik7XG4gICAgYy5oZWFkZXIoXCJEYXRlXCIsIHN0YXQuYmlydGh0aW1lLnRvVVRDU3RyaW5nKCkpO1xuICAgIGNvbnN0IHBhcnRzID0gcmFuZ2UucmVwbGFjZSgvYnl0ZXM9LywgXCJcIikuc3BsaXQoXCItXCIsIDIpO1xuICAgIGNvbnN0IHN0YXJ0ID0gcGFydHNbMF0gPyBwYXJzZUludChwYXJ0c1swXSwgMTApIDogMDtcbiAgICBsZXQgZW5kID0gcGFydHNbMV0gPyBwYXJzZUludChwYXJ0c1sxXSwgMTApIDogc3RhdC5zaXplIC0gMTtcbiAgICBpZiAoc2l6ZSA8IGVuZCAtIHN0YXJ0ICsgMSkge1xuICAgICAgZW5kID0gc2l6ZSAtIDE7XG4gICAgfVxuICAgIGNvbnN0IGNodW5rc2l6ZSA9IGVuZCAtIHN0YXJ0ICsgMTtcbiAgICBjb25zdCBzdHJlYW0gPSBjcmVhdGVSZWFkU3RyZWFtKHBhdGgsIHsgc3RhcnQsIGVuZCB9KTtcbiAgICBjLmhlYWRlcihcIkNvbnRlbnQtTGVuZ3RoXCIsIGNodW5rc2l6ZS50b1N0cmluZygpKTtcbiAgICBjLmhlYWRlcihcIkNvbnRlbnQtUmFuZ2VcIiwgYGJ5dGVzICR7c3RhcnR9LSR7ZW5kfS8ke3N0YXQuc2l6ZX1gKTtcbiAgICByZXR1cm4gYy5ib2R5KGNyZWF0ZVN0cmVhbUJvZHkoc3RyZWFtKSwgMjA2KTtcbiAgfTtcbn07XG5leHBvcnQge1xuICBzZXJ2ZVN0YXRpY1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWFkU3RyZWFtIiwiZXhpc3RzU3luYyIsImxzdGF0U3luYyIsImdldEZpbGVQYXRoIiwib3B0aW9ucyIsImZpbGVuYW1lIiwidGVzdCIsInJvb3QiLCJkZWZhdWx0RG9jdW1lbnQiLCJlbmRzV2l0aCIsImNvbmNhdCIsIm1hdGNoIiwicmVwbGFjZSIsInBhdGgiLCJnZXRNaW1lVHlwZSIsIm1pbWVzIiwiYmFzZU1pbWVzIiwicmVnZXhwIiwibWltZVR5cGUiLCJzdGFydHNXaXRoIiwiYWFjIiwiYXZpIiwiYXZpZiIsImF2MSIsImJpbiIsImJtcCIsImNzcyIsImNzdiIsImVvdCIsImVwdWIiLCJnaWYiLCJneiIsImh0bSIsImh0bWwiLCJpY28iLCJpY3MiLCJqcGVnIiwianBnIiwianMiLCJqc29uIiwianNvbmxkIiwibWFwIiwibWlkIiwibWlkaSIsIm1qcyIsIm1wMyIsIm1wNCIsIm1wZWciLCJvZ2EiLCJvZ3YiLCJvZ3giLCJvcHVzIiwib3RmIiwicGRmIiwicG5nIiwicnRmIiwic3ZnIiwidGlmIiwidGlmZiIsInRzIiwidHRmIiwidHh0Iiwid2FzbSIsIndlYm0iLCJ3ZWJhIiwid2VicCIsIndvZmYiLCJ3b2ZmMiIsInhodG1sIiwieG1sIiwiemlwIiwiZ2x0ZiIsImdsYiIsImNyZWF0ZVN0cmVhbUJvZHkiLCJzdHJlYW0iLCJib2R5IiwiUmVhZGFibGVTdHJlYW0iLCJzdGFydCIsImNvbnRyb2xsZXIiLCJvbiIsImNodW5rIiwiZW5xdWV1ZSIsImNsb3NlIiwiY2FuY2VsIiwiZGVzdHJveSIsInNlcnZlU3RhdGljIiwiYyIsIm5leHQiLCJmaW5hbGl6ZWQiLCJ1cmwiLCJVUkwiLCJyZXEiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXRobmFtZSIsInJld3JpdGVSZXF1ZXN0UGF0aCIsImluZGV4Iiwib25Ob3RGb3VuZCIsImhlYWRlciIsInN0YXQiLCJzaXplIiwibWV0aG9kIiwidG9TdHJpbmciLCJzdGF0dXMiLCJyYW5nZSIsImJpcnRodGltZSIsInRvVVRDU3RyaW5nIiwicGFydHMiLCJzcGxpdCIsInBhcnNlSW50IiwiZW5kIiwiY2h1bmtzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@hono/node-server/dist/serve-static.mjs\n");

/***/ })

};
;
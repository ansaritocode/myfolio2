/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\n\nconst DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';\nconst DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;\nasync function POST(request) {\n    if (!DEEPSEEK_API_KEY) {\n        console.error('DeepSeek API key is not configured');\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'DeepSeek API key is not configured'\n        }, {\n            status: 500\n        });\n    }\n    try {\n        const { messages } = await request.json();\n        // Validate messages\n        if (!messages || !Array.isArray(messages) || messages.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Invalid or empty messages array'\n            }, {\n                status: 400\n            });\n        }\n        // Log the request payload for debugging\n        console.log('Request Payload:', {\n            model: 'deepseek-chat',\n            messages: messages.map((msg)=>({\n                    role: msg.role,\n                    content: msg.content\n                })),\n            temperature: 0.7,\n            max_tokens: 2048,\n            top_p: 1,\n            frequency_penalty: 0,\n            presence_penalty: 0\n        });\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(DEEPSEEK_API_URL, {\n            model: 'deepseek-chat',\n            messages: messages.map((msg)=>({\n                    role: msg.role,\n                    content: msg.content\n                })),\n            temperature: 0.7,\n            max_tokens: 2048,\n            top_p: 1,\n            frequency_penalty: 0,\n            presence_penalty: 0\n        }, {\n            headers: {\n                'Content-Type': 'application/json',\n                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,\n                'Accept': 'application/json'\n            },\n            timeout: 60000 // 60 seconds\n        });\n        // Log the response for debugging\n        console.log('DeepSeek response status:', response.status);\n        console.log('DeepSeek response data:', response.data);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(response.data);\n    } catch (error) {\n        // Enhanced error logging\n        console.error('DeepSeek API Error:', {\n            message: error.message,\n            status: error.response?.status || 'No status code',\n            data: error.response?.data || 'No response data',\n            config: {\n                url: error.config?.url,\n                method: error.config?.method,\n                headers: {\n                    ...error.config?.headers,\n                    Authorization: 'Bearer [REDACTED]'\n                }\n            }\n        });\n        const errorMessage = error.response?.data?.error || error.message || 'Unknown error';\n        console.error('Detailed error:', errorMessage);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to get response from DeepSeek',\n            details: errorMessage,\n            status: error.response?.status || 500\n        }, {\n            status: error.response?.status || 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2pCO0FBRTFCLE1BQU1FLG1CQUFtQjtBQUN6QixNQUFNQyxtQkFBbUJDLFFBQVFDLEdBQUcsQ0FBQ0YsZ0JBQWdCO0FBRTlDLGVBQWVHLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUksQ0FBQ0osa0JBQWtCO1FBQ3JCSyxRQUFRQyxLQUFLLENBQUM7UUFDZCxPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUN0QjtZQUFFRCxPQUFPO1FBQXFDLEdBQzlDO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtJQUVBLElBQUk7UUFDRixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1MLFFBQVFHLElBQUk7UUFFdkMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQ0UsWUFBWSxDQUFDQyxNQUFNQyxPQUFPLENBQUNGLGFBQWFBLFNBQVNHLE1BQU0sS0FBSyxHQUFHO1lBQ2xFLE9BQU9mLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO2dCQUFFRCxPQUFPO1lBQWtDLEdBQzNDO2dCQUFFRSxRQUFRO1lBQUk7UUFFbEI7UUFFQSx3Q0FBd0M7UUFDeENILFFBQVFRLEdBQUcsQ0FBQyxvQkFBb0I7WUFDOUJDLE9BQU87WUFDUEwsVUFBVUEsU0FBU00sR0FBRyxDQUFDQyxDQUFBQSxNQUFRO29CQUM3QkMsTUFBTUQsSUFBSUMsSUFBSTtvQkFDZEMsU0FBU0YsSUFBSUUsT0FBTztnQkFDdEI7WUFDQUMsYUFBYTtZQUNiQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsbUJBQW1CO1lBQ25CQyxrQkFBa0I7UUFDcEI7UUFFQSxNQUFNQyxXQUFXLE1BQU0xQiw2Q0FBS0EsQ0FBQzJCLElBQUksQ0FDL0IxQixrQkFDQTtZQUNFZSxPQUFPO1lBQ1BMLFVBQVVBLFNBQVNNLEdBQUcsQ0FBQ0MsQ0FBQUEsTUFBUTtvQkFDN0JDLE1BQU1ELElBQUlDLElBQUk7b0JBQ2RDLFNBQVNGLElBQUlFLE9BQU87Z0JBQ3RCO1lBQ0FDLGFBQWE7WUFDYkMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLG1CQUFtQjtZQUNuQkMsa0JBQWtCO1FBQ3BCLEdBQ0E7WUFDRUcsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTFCLGtCQUFrQjtnQkFDN0MsVUFBVTtZQUNaO1lBQ0EyQixTQUFTLE1BQU0sYUFBYTtRQUM5QjtRQUdGLGlDQUFpQztRQUNqQ3RCLFFBQVFRLEdBQUcsQ0FBQyw2QkFBNkJXLFNBQVNoQixNQUFNO1FBQ3hESCxRQUFRUSxHQUFHLENBQUMsMkJBQTJCVyxTQUFTSSxJQUFJO1FBRXBELE9BQU8vQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDaUIsU0FBU0ksSUFBSTtJQUN4QyxFQUFFLE9BQU90QixPQUFZO1FBQ25CLHlCQUF5QjtRQUN6QkQsUUFBUUMsS0FBSyxDQUFDLHVCQUF1QjtZQUNuQ3VCLFNBQVN2QixNQUFNdUIsT0FBTztZQUN0QnJCLFFBQVFGLE1BQU1rQixRQUFRLEVBQUVoQixVQUFVO1lBQ2xDb0IsTUFBTXRCLE1BQU1rQixRQUFRLEVBQUVJLFFBQVE7WUFDOUJFLFFBQVE7Z0JBQ05DLEtBQUt6QixNQUFNd0IsTUFBTSxFQUFFQztnQkFDbkJDLFFBQVExQixNQUFNd0IsTUFBTSxFQUFFRTtnQkFDdEJOLFNBQVM7b0JBQ1AsR0FBR3BCLE1BQU13QixNQUFNLEVBQUVKLE9BQU87b0JBQ3hCTyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7UUFFQSxNQUFNQyxlQUFlNUIsTUFBTWtCLFFBQVEsRUFBRUksTUFBTXRCLFNBQVNBLE1BQU11QixPQUFPLElBQUk7UUFDckV4QixRQUFRQyxLQUFLLENBQUMsbUJBQW1CNEI7UUFFakMsT0FBT3JDLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1lBQ0VELE9BQU87WUFDUDZCLFNBQVNEO1lBQ1QxQixRQUFRRixNQUFNa0IsUUFBUSxFQUFFaEIsVUFBVTtRQUNwQyxHQUNBO1lBQUVBLFFBQVFGLE1BQU1rQixRQUFRLEVBQUVoQixVQUFVO1FBQUk7SUFFNUM7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2Fuc2FyL215Zm9saW8yL2FwcC9hcGkvY2hhdC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBERUVQU0VFS19BUElfVVJMID0gJ2h0dHBzOi8vYXBpLmRlZXBzZWVrLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zJztcbmNvbnN0IERFRVBTRUVLX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGlmICghREVFUFNFRUtfQVBJX0tFWSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0RlZXBTZWVrIEFQSSBrZXkgaXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRGVlcFNlZWsgQVBJIGtleSBpcyBub3QgY29uZmlndXJlZCcgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgLy8gVmFsaWRhdGUgbWVzc2FnZXNcbiAgICBpZiAoIW1lc3NhZ2VzIHx8ICFBcnJheS5pc0FycmF5KG1lc3NhZ2VzKSB8fCBtZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0ludmFsaWQgb3IgZW1wdHkgbWVzc2FnZXMgYXJyYXknIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBMb2cgdGhlIHJlcXVlc3QgcGF5bG9hZCBmb3IgZGVidWdnaW5nXG4gICAgY29uc29sZS5sb2coJ1JlcXVlc3QgUGF5bG9hZDonLCB7XG4gICAgICBtb2RlbDogJ2RlZXBzZWVrLWNoYXQnLFxuICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLm1hcChtc2cgPT4gKHtcbiAgICAgICAgcm9sZTogbXNnLnJvbGUsXG4gICAgICAgIGNvbnRlbnQ6IG1zZy5jb250ZW50XG4gICAgICB9KSksXG4gICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgbWF4X3Rva2VuczogMjA0OCxcbiAgICAgIHRvcF9wOiAxLFxuICAgICAgZnJlcXVlbmN5X3BlbmFsdHk6IDAsXG4gICAgICBwcmVzZW5jZV9wZW5hbHR5OiAwXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBERUVQU0VFS19BUElfVVJMLFxuICAgICAge1xuICAgICAgICBtb2RlbDogJ2RlZXBzZWVrLWNoYXQnLFxuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMubWFwKG1zZyA9PiAoe1xuICAgICAgICAgIHJvbGU6IG1zZy5yb2xlLFxuICAgICAgICAgIGNvbnRlbnQ6IG1zZy5jb250ZW50XG4gICAgICAgIH0pKSxcbiAgICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICAgICAgbWF4X3Rva2VuczogMjA0OCxcbiAgICAgICAgdG9wX3A6IDEsXG4gICAgICAgIGZyZXF1ZW5jeV9wZW5hbHR5OiAwLFxuICAgICAgICBwcmVzZW5jZV9wZW5hbHR5OiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtERUVQU0VFS19BUElfS0VZfWAsXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICB0aW1lb3V0OiA2MDAwMCAvLyA2MCBzZWNvbmRzXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIExvZyB0aGUgcmVzcG9uc2UgZm9yIGRlYnVnZ2luZ1xuICAgIGNvbnNvbGUubG9nKCdEZWVwU2VlayByZXNwb25zZSBzdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICBjb25zb2xlLmxvZygnRGVlcFNlZWsgcmVzcG9uc2UgZGF0YTonLCByZXNwb25zZS5kYXRhKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXNwb25zZS5kYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIC8vIEVuaGFuY2VkIGVycm9yIGxvZ2dpbmdcbiAgICBjb25zb2xlLmVycm9yKCdEZWVwU2VlayBBUEkgRXJyb3I6Jywge1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIHN0YXR1czogZXJyb3IucmVzcG9uc2U/LnN0YXR1cyB8fCAnTm8gc3RhdHVzIGNvZGUnLFxuICAgICAgZGF0YTogZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgJ05vIHJlc3BvbnNlIGRhdGEnLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHVybDogZXJyb3IuY29uZmlnPy51cmwsXG4gICAgICAgIG1ldGhvZDogZXJyb3IuY29uZmlnPy5tZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAuLi5lcnJvci5jb25maWc/LmhlYWRlcnMsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciBbUkVEQUNURURdJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZT8uZGF0YT8uZXJyb3IgfHwgZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcic7XG4gICAgY29uc29sZS5lcnJvcignRGV0YWlsZWQgZXJyb3I6JywgZXJyb3JNZXNzYWdlKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGdldCByZXNwb25zZSBmcm9tIERlZXBTZWVrJyxcbiAgICAgICAgZGV0YWlsczogZXJyb3JNZXNzYWdlLFxuICAgICAgICBzdGF0dXM6IGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwXG4gICAgICB9LFxuICAgICAgeyBzdGF0dXM6IGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF4aW9zIiwiREVFUFNFRUtfQVBJX1VSTCIsIkRFRVBTRUVLX0FQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiUE9TVCIsInJlcXVlc3QiLCJjb25zb2xlIiwiZXJyb3IiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJsb2ciLCJtb2RlbCIsIm1hcCIsIm1zZyIsInJvbGUiLCJjb250ZW50IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwidG9wX3AiLCJmcmVxdWVuY3lfcGVuYWx0eSIsInByZXNlbmNlX3BlbmFsdHkiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwidGltZW91dCIsImRhdGEiLCJtZXNzYWdlIiwiY29uZmlnIiwidXJsIiwibWV0aG9kIiwiQXV0aG9yaXphdGlvbiIsImVycm9yTWVzc2FnZSIsImRldGFpbHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fansar%2Fmyfolio2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fansar%2Fmyfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fansar%2Fmyfolio2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fansar%2Fmyfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ansar_myfolio2_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"/Users/ansar/myfolio2/app/api/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ansar_myfolio2_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFuc2FyJTJGbXlmb2xpbzIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYW5zYXIlMkZteWZvbGlvMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDTDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2Fuc2FyL215Zm9saW8yL2FwcC9hcGkvY2hhdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoYXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYW5zYXIvbXlmb2xpbzIvYXBwL2FwaS9jaGF0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fansar%2Fmyfolio2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fansar%2Fmyfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/get-intrinsic","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-symbols","vendor-chunks/delayed-stream","vendor-chunks/function-bind","vendor-chunks/es-set-tostringtag","vendor-chunks/get-proto","vendor-chunks/call-bind-apply-helpers","vendor-chunks/dunder-proto","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/has-flag","vendor-chunks/gopd","vendor-chunks/es-define-property","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/es-object-atoms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fansar%2Fmyfolio2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fansar%2Fmyfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
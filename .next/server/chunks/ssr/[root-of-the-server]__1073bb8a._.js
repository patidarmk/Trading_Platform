module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/utils.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "cn": ()=>cn
});
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.tsx [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/SimulationForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SimulationForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$yup$2f$dist$2f$yup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/yup/dist/yup.mjs [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/select'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/label'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().oneOf([
        'OKX',
        'Bybit',
        'Deribit'
    ]).required(),
    symbol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Symbol is required'),
    orderType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().oneOf([
        'Market',
        'Limit'
    ]).required(),
    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().oneOf([
        'Buy',
        'Sell'
    ]).required(),
    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"]().typeError('Quantity must be a number').positive('Must be greater than 0').required('Quantity required'),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"]().typeError('Price must be a number').positive('Price must be > 0').when('orderType', {
        is: 'Limit',
        then: (schema)=>schema.required('Price is required for limit orders'),
        otherwise: (schema)=>schema.notRequired()
    }),
    delay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"]().oneOf([
        0,
        5,
        10,
        30
    ]).required()
});
function SimulationForm({ onSubmitSim }) {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$yup$2f$dist$2f$yup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yupResolver"])(schema),
        defaultValues: {
            venue: 'OKX',
            symbol: 'BTC-USDT',
            orderType: 'Limit',
            side: 'Buy',
            quantity: 1,
            price: 30000,
            delay: 0
        }
    });
    const orderType = watch('orderType');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSubmitSim),
        className: "grid gap-4 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                        children: "Venue"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        value: watch('venue'),
                        onValueChange: (val)=>setValue('venue', val),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectTrigger, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectValue, {
                                    placeholder: "Select venue"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SimulationForm.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectContent, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "OKX",
                                        children: "OKX"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "Bybit",
                                        children: "Bybit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "Deribit",
                                        children: "Deribit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.venue?.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                        children: "Symbol"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        placeholder: "e.g. BTC-USDT",
                        ...register('symbol')
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.symbol?.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                        children: "Order Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        value: watch('orderType'),
                        onValueChange: (val)=>setValue('orderType', val),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectTrigger, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectValue, {
                                    placeholder: "Select order type"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SimulationForm.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectContent, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "Market",
                                        children: "Market"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "Limit",
                                        children: "Limit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.orderType?.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                        children: "Side"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        value: watch('side'),
                        onValueChange: (val)=>setValue('side', val),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectTrigger, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectValue, {
                                    placeholder: "Select side"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SimulationForm.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectContent, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "Buy",
                                        children: "Buy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "Sell",
                                        children: "Sell"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.side?.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            orderType === 'Limit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                        children: "Price"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        type: "number",
                        step: "0.01",
                        ...register('price')
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.price?.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                        children: "Quantity"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        type: "number",
                        step: "0.0001",
                        ...register('quantity')
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.quantity?.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                        children: "Execution Delay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        value: String(watch('delay')),
                        onValueChange: (val)=>setValue('delay', Number(val)),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectTrigger, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectValue, {
                                    placeholder: "Select delay"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SimulationForm.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectContent, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "0",
                                        children: "Immediate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "5",
                                        children: "5 seconds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "10",
                                        children: "10 seconds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                        value: "30",
                                        children: "30 seconds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SimulationForm.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SimulationForm.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.delay?.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/SimulationForm.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-full mt-4",
                children: "Simulate Order"
            }, void 0, false, {
                fileName: "[project]/src/components/SimulationForm.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SimulationForm.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/utils/simulationUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "computeCumulativeOrders": ()=>computeCumulativeOrders,
    "simulateOrderImpact": ()=>simulateOrderImpact
});
function simulateOrderImpact(orderbook, order) {
    const { side, quantity, orderType, price: limitPrice } = order;
    const levels = side === 'Buy' ? orderbook.asks : orderbook.bids;
    const bookSide = side === 'Buy' ? 'asks' : 'bids';
    let remainingQty = quantity;
    let filledQty = 0;
    let cost = 0;
    for (const level of levels){
        const levelPrice = level.price;
        const levelQty = level.quantity;
        // Market: take everything up to full quantity
        // Limit: stop if price worse than limit
        const limitReached = orderType === 'Limit' && (side === 'Buy' && levelPrice > (limitPrice ?? Infinity) || side === 'Sell' && levelPrice < (limitPrice ?? 0));
        if (limitReached) break;
        const tradeQty = Math.min(remainingQty, levelQty);
        cost += tradeQty * levelPrice;
        filledQty += tradeQty;
        remainingQty -= tradeQty;
        if (remainingQty <= 0) break;
    }
    const averageFillPrice = filledQty > 0 ? cost / filledQty : 0;
    const initialPrice = levels[0]?.price ?? 1;
    const slippage = filledQty > 0 ? (averageFillPrice - initialPrice) / initialPrice * 100 : 0;
    const marketImpact = filledQty > 0 ? (levels[Math.min(5, levels.length - 1)]?.price - initialPrice) / initialPrice : 0;
    const fillPercentage = filledQty / quantity * 100;
    return {
        filledQuantity: filledQty,
        averageFillPrice,
        slippage,
        marketImpact,
        fillPercentage
    };
}
function computeCumulativeOrders(orders, type) {
    let cumulative = 0;
    const sorted = [
        ...orders
    ].sort((a, b)=>type === 'bid' ? b.price - a.price : a.price - b.price);
    return sorted.map((order)=>{
        cumulative += order.quantity;
        return {
            ...order,
            total: cumulative
        };
    });
}
}),
"[project]/src/store/orderbookStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useOrderbookStore": ()=>useOrderbookStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useOrderbookStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        data: {
            OKX: {},
            Bybit: {},
            Deribit: {}
        },
        setOrderbook: (venue, symbol, bids, asks)=>{
            set((state)=>({
                    data: {
                        ...state.data,
                        [venue]: {
                            ...state.data[venue],
                            [symbol]: {
                                bids,
                                asks,
                                lastUpdated: Date.now()
                            }
                        }
                    }
                }));
        },
        getOrderbook: (venue, symbol)=>{
            return get().data[venue]?.[symbol];
        }
    }));
}),
"[project]/src/lib/orderbook/bybitService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "connectToBybit": ()=>connectToBybit,
    "disconnectFromBybit": ()=>disconnectFromBybit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/simulationUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/orderbookStore.ts [app-ssr] (ecmascript)");
;
;
const connections = {};
const connectToBybit = (symbol)=>{
    const wsUrl = 'wss://stream.bybit.com/v5/public/linear';
    if (connections[symbol] && connections[symbol].readyState === WebSocket.OPEN) {
        return;
    }
    const socket = new WebSocket(wsUrl);
    connections[symbol] = socket;
    socket.onopen = ()=>{
        const subscribeMsg = {
            op: 'subscribe',
            args: [
                `orderbook.50.${symbol}`
            ]
        };
        socket.send(JSON.stringify(subscribeMsg));
        console.log(`[Bybit] Subscribed to ${symbol}`);
    };
    socket.onmessage = (event)=>{
        const raw = JSON.parse(event.data);
        if (raw.type === 'snapshot' || raw.type === 'delta') {
            const bids = (raw.data.b || []).map(([p, q])=>({
                    price: parseFloat(p),
                    quantity: parseFloat(q)
                }));
            const asks = (raw.data.a || []).map(([p, q])=>({
                    price: parseFloat(p),
                    quantity: parseFloat(q)
                }));
            // 👇 Compute cumulative totals
            const bidsWithTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeCumulativeOrders"])(bids, 'bid');
            const asksWithTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeCumulativeOrders"])(asks, 'ask');
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrderbookStore"].getState().setOrderbook('Bybit', symbol, bidsWithTotal.slice(0, 15), asksWithTotal.slice(0, 15));
        }
    };
    socket.onerror = (err)=>{
        console.error('[Bybit WS ERROR]', err);
    };
    socket.onclose = ()=>{
        console.warn(`[Bybit] Disconnected from ${symbol}`);
        delete connections[symbol];
    };
};
const disconnectFromBybit = (symbol)=>{
    const socket = connections[symbol];
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
        delete connections[symbol];
    }
};
}),
"[project]/src/lib/orderbook/deribitService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "connectToDeribit": ()=>connectToDeribit,
    "disconnectFromDeribit": ()=>disconnectFromDeribit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/simulationUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/orderbookStore.ts [app-ssr] (ecmascript)");
;
;
const connections = {};
const connectToDeribit = (symbol)=>{
    const wsUrl = 'wss://www.deribit.com/ws/api/v2';
    if (connections[symbol] && connections[symbol].readyState === WebSocket.OPEN) {
        return;
    }
    const socket = new WebSocket(wsUrl);
    connections[symbol] = socket;
    socket.onopen = ()=>{
        const msg = {
            jsonrpc: '2.0',
            method: 'public/subscribe',
            id: 42,
            params: {
                channels: [
                    `book.${symbol}.none.10.100ms`
                ]
            }
        };
        socket.send(JSON.stringify(msg));
        console.log(`[Deribit] Subscribed to ${symbol}`);
    };
    socket.onmessage = (event)=>{
        const raw = JSON.parse(event.data);
        if (!raw.params || !raw.params.data) return;
        const data = raw.params.data;
        const bids = (data.bids || []).map(([price, quantity])=>({
                price,
                quantity
            }));
        const asks = (data.asks || []).map(([price, quantity])=>({
                price,
                quantity
            }));
        // 👇 Compute cumulative totals
        const bidsWithTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeCumulativeOrders"])(bids, 'bid');
        const asksWithTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeCumulativeOrders"])(asks, 'ask');
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrderbookStore"].getState().setOrderbook('Deribit', symbol, bidsWithTotal.slice(0, 15), asksWithTotal.slice(0, 15));
    };
    socket.onerror = (err)=>{
        console.error('[Deribit WS ERROR]', err);
    };
    socket.onclose = ()=>{
        console.warn(`[Deribit] Disconnected from ${symbol}`);
        delete connections[symbol];
    };
};
const disconnectFromDeribit = (symbol)=>{
    const socket = connections[symbol];
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
        delete connections[symbol];
    }
};
}),
"[project]/src/lib/orderbook/okxService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "connectToOKX": ()=>connectToOKX,
    "disconnectFromOKX": ()=>disconnectFromOKX
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/simulationUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/orderbookStore.ts [app-ssr] (ecmascript)");
;
;
const connections = {};
const connectToOKX = (symbol)=>{
    const wsUrl = 'wss://ws.okx.com:8443/ws/v5/public';
    // If already connected to this symbol, skip
    if (connections[symbol] && connections[symbol].readyState === WebSocket.OPEN) {
        return;
    }
    const socket = new WebSocket(wsUrl);
    connections[symbol] = socket;
    socket.onopen = ()=>{
        const subMsg = {
            op: 'subscribe',
            args: [
                {
                    channel: 'books5',
                    instId: symbol
                }
            ]
        };
        socket.send(JSON.stringify(subMsg));
        console.log(`[OKX] Subscribed to ${symbol}`);
    };
    socket.onmessage = (event)=>{
        try {
            const message = JSON.parse(event.data);
            if (message.data) {
                const [update] = message.data;
                const bids = update.bids.map(([p, q])=>({
                        price: parseFloat(p),
                        quantity: parseFloat(q)
                    }));
                const asks = update.asks.map(([p, q])=>({
                        price: parseFloat(p),
                        quantity: parseFloat(q)
                    }));
                const bidsWithTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeCumulativeOrders"])(bids, 'bid');
                const asksWithTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeCumulativeOrders"])(asks, 'ask');
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrderbookStore"].getState().setOrderbook('OKX', symbol, bidsWithTotal, asksWithTotal);
            }
        } catch (err) {
            console.error('[OKX] JSON parse error:', err);
        }
    };
    socket.onerror = (err)=>{
        console.error('[OKX WS ERROR]', err);
    };
    socket.onclose = ()=>{
        console.warn(`[OKX] Disconnected from ${symbol}`);
        delete connections[symbol];
    };
};
const disconnectFromOKX = (symbol)=>{
    const socket = connections[symbol];
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
        delete connections[symbol];
    }
};
}),
"[project]/src/components/DepthChart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
;
;
const DepthChart = ({ depthData })=>{
    const bids = depthData.filter((d)=>d.side === 'bid');
    const asks = depthData.filter((d)=>d.side === 'ask');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-64 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-2",
                children: "Market Depth Chart"
            }, void 0, false, {
                fileName: "[project]/src/components/DepthChart.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "price",
                            type: "number",
                            domain: [
                                'auto',
                                'auto'
                            ],
                            tickFormatter: (price)=>price.toFixed(2)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DepthChart.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                            dataKey: "cumulativeSize",
                            tickFormatter: (size)=>`${size}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/DepthChart.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                            formatter: (value, name)=>[
                                    value,
                                    name === 'cumulativeSize' ? 'Size' : name
                                ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/DepthChart.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                            type: "stepAfter",
                            dataKey: "cumulativeSize",
                            data: bids,
                            stroke: "#22c55e",
                            fill: "#22c55e40",
                            name: "Bids"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DepthChart.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                            type: "stepAfter",
                            dataKey: "cumulativeSize",
                            data: asks,
                            stroke: "#ef4444",
                            fill: "#ef444440",
                            name: "Asks"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DepthChart.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DepthChart.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/DepthChart.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DepthChart.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DepthChart;
}),
"[project]/src/components/ImbalanceIndicator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ImbalanceIndicator = ({ totalBids, totalAsks })=>{
    const totalVolume = totalBids + totalAsks;
    const bidPercentage = totalBids / totalVolume * 100;
    const askPercentage = 100 - bidPercentage;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-xl mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-2",
                children: "Order Book Imbalance"
            }, void 0, false, {
                fileName: "[project]/src/components/ImbalanceIndicator.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-6 w-full rounded overflow-hidden shadow-md border border-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-500 text-white text-xs flex items-center justify-end pr-2",
                        style: {
                            width: `${bidPercentage}%`
                        },
                        children: [
                            bidPercentage.toFixed(1),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImbalanceIndicator.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-500 text-white text-xs flex items-center justify-start pl-2",
                        style: {
                            width: `${askPercentage}%`
                        },
                        children: [
                            askPercentage.toFixed(1),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImbalanceIndicator.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImbalanceIndicator.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImbalanceIndicator.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ImbalanceIndicator;
}),
"[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TabsContent": ()=>TabsContent,
    "TabsList": ()=>TabsList,
    "TabsTrigger": ()=>TabsTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsList.displayName = 'TabsList';
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all', 'data-[state=active]:bg-background data-[state=active]:text-foreground', 'data-[state=inactive]:text-muted-foreground hover:text-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsTrigger.displayName = 'TabsTrigger';
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mt-2 rounded-md border border-border p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsContent.displayName = 'TabsContent';
;
}),
"[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript) <locals>");
}),
"[project]/src/components/TimingTabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>TimingTabs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const timings = [
    'Immediate',
    '5s',
    '10s',
    '30s'
];
function TimingTabs({ onSelect, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 mb-4",
        children: timings.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                // variant={active === label ? 'default' : 'outline'}
                onClick: ()=>onSelect(label),
                children: label
            }, label, false, {
                fileName: "[project]/src/components/TimingTabs.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/TimingTabs.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/OrderbookViewer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>OrderbookViewer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/orderbookStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DepthChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DepthChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImbalanceIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImbalanceIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimingTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TimingTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/simulationUtils.ts [app-ssr] (ecmascript)");
// import { simulateMarketImpact } from '@/lib/utils/simulationUtils';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function OrderbookViewer({ venue, symbol, simulatedOrder }) {
    const orderbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrderbookStore"])((state)=>state.getOrderbook(venue, symbol));
    if (!orderbook) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400",
            children: [
                "Loading orderbook for ",
                venue,
                " ",
                symbol,
                "..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/OrderbookViewer.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    }
    const { bids, asks } = orderbook;
    // const simulationResult = simulatedOrder
    //   ? simulateOrderImpact({ bids, asks }, simulatedOrder)
    //   : null;
    const simulateWithDelay = (delaySeconds)=>{
        // Clone and simulate slight changes for demo
        const cloneLevels = (levels, priceShift)=>levels.map((level, i)=>({
                    price: parseFloat((level.price * (1 + priceShift)).toFixed(2)),
                    quantity: Math.max(level.quantity + Math.floor(Math.random() * 3 - 1), 1)
                }));
        const shift = delaySeconds * 0.0002; // Adjust as needed
        const delayedBids = cloneLevels(bids, -shift);
        const delayedAsks = cloneLevels(asks, shift);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$simulationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simulateOrderImpact"])({
            bids: delayedBids,
            asks: delayedAsks
        }, simulatedOrder);
    };
    const scenarios = [
        {
            label: 'Immediate',
            delay: 0
        },
        {
            label: 'After 5s',
            delay: 5
        },
        {
            label: 'After 10s',
            delay: 10
        },
        {
            label: 'After 30s',
            delay: 30
        }
    ];
    const scenarioResults = simulatedOrder ? scenarios.map((s)=>({
            ...s,
            result: simulateWithDelay(s.delay)
        })) : [];
    const { price, quantity, side, orderType } = simulatedOrder || {};
    const totalBidVolume = bids.reduce((acc, level)=>acc + level.quantity, 0);
    const totalAskVolume = asks.reduce((acc, level)=>acc + level.quantity, 0);
    const [selectedTiming, setSelectedTiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Immediate');
    const isSimulatedLevel = (level, idx, isBid)=>{
        if (!simulatedOrder || !price || !quantity || orderType === 'Market') return false;
        if (side === 'Buy' && isBid) {
            return price >= level.price && idx === findInsertIndex(bids, price);
        }
        if (side === 'Sell' && !isBid) {
            return price <= level.price && idx === findInsertIndex(asks, price);
        }
        return false;
    };
    const findInsertIndex = (levels, price)=>{
        for(let i = 0; i < levels.length; i++){
            if (levels === bids && price >= levels[i].price || levels === asks && price <= levels[i].price) {
                return i;
            }
        }
        return levels.length;
    };
    const transformOrderbookToDepthChart = (bids, asks)=>{
        const bidData = [];
        const askData = [];
        let cumulativeBid = 0;
        for (const level of bids){
            cumulativeBid += level.quantity;
            bidData.push({
                price: level.price,
                cumulativeSize: cumulativeBid,
                side: 'bid'
            });
        }
        let cumulativeAsk = 0;
        for (const level of asks){
            cumulativeAsk += level.quantity;
            askData.push({
                price: level.price,
                cumulativeSize: cumulativeAsk,
                side: 'ask'
            });
        }
        return [
            ...bidData,
            ...askData
        ];
    };
    const transformedOrderbookData = transformOrderbookToDepthChart(bids.slice(0, 15), asks.slice(0, 15));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-2 bg-gray-800 text-gray-200 rounded-lg shadow-lg  max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 border border-gray-700 rounded-lg p-4 shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-green-400 font-semibold text-lg mb-2",
                                children: "📘 Bids"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "text-gray-400 border-b border-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "pb-1",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "pb-1",
                                                    children: "Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OrderbookViewer.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "text-green-300",
                                        children: bids.slice(0, 15).map((level, idx)=>{
                                            const isSim = isSimulatedLevel(level, idx, true);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `transition ${isSim ? 'bg-green-700/30 font-semibold' : 'hover:bg-green-800/10'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-1",
                                                        children: level.price.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-1",
                                                        children: level.quantity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, level.price, true, {
                                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 border border-gray-700 rounded-lg p-4 shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-red-400 font-semibold text-lg mb-2",
                                children: "📕 Asks"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "text-gray-400 border-b border-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "pb-1",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "pb-1",
                                                    children: "Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OrderbookViewer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "text-red-300",
                                        children: asks.slice(0, 15).map((level, idx)=>{
                                            const isSim = isSimulatedLevel(level, idx, false);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `transition ${isSim ? 'bg-red-700/30 font-semibold' : 'hover:bg-red-800/10'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-1",
                                                        children: level.price.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-1",
                                                        children: level.quantity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, level.price, true, {
                                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OrderbookViewer.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DepthChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    depthData: transformedOrderbookData
                }, void 0, false, {
                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/OrderbookViewer.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImbalanceIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    totalBids: totalBidVolume,
                    totalAsks: totalAskVolume
                }, void 0, false, {
                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/OrderbookViewer.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            scenarioResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "Immediate",
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "flex gap-2 bg-gray-800 p-1 rounded",
                            children: scenarioResults.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: s.label,
                                    children: s.label
                                }, s.label, false, {
                                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderbookViewer.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this),
                        scenarioResults.map(({ label, result })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TabsContent"], {
                                value: label,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow space-y-2 text-sm text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🧮 Filled Quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: result.filledQuantity.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "💰 Avg Fill Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: result.averageFillPrice.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "📉 Slippage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: result.slippage > 1 ? 'text-yellow-400' : 'text-green-400',
                                                        children: [
                                                            result.slippage.toFixed(2),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "📊 Market Impact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            (result.marketImpact * 100).toFixed(2),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "📦 Fill %"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            result.fillPercentage.toFixed(2),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    result.filledQuantity === 0 && orderType === 'Limit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-400 mt-2",
                                        children: "❗ Your limit price is too far from the current book — no fill."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderbookViewer.tsx",
                                        lineNumber: 275,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/src/components/OrderbookViewer.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OrderbookViewer.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/OrderbookViewer.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimingTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                active: selectedTiming,
                onSelect: setSelectedTiming
            }, void 0, false, {
                fileName: "[project]/src/components/OrderbookViewer.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OrderbookViewer.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// // // // 'use client';
// // // // import SimulationForm, {
// // // //   SimulationFormValues,
// // // // } from '@/components/SimulationForm';
// // // // import {
// // // //   connectToBybit,
// // // //   disconnectFromBybit,
// // // // } from '@/lib/orderbook/bybitService';
// // // // import {
// // // //   connectToDeribit,
// // // //   disconnectFromDeribit,
// // // // } from '@/lib/orderbook/deribitService';
// // // // import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// // // // import { useEffect, useState } from 'react';
// // // // import OrderbookViewer from '@/components/OrderbookViewer';
// // // // import { useOrderbookStore } from '@/store/orderbookStore';
// // // // const symbols = {
// // // //   OKX: 'BTC-USDT',
// // // //   Bybit: 'BTCUSDT',
// // // //   Deribit: 'BTC-PERPETUAL',
// // // // } as const;
// // // // export default function Home() {
// // // //   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
// // // //   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
// // // //   const symbol = symbols[venue];
// // // //   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);
// // // //   useEffect(() => {
// // // //     if (venue === 'OKX') connectToOKX(symbol);
// // // //     if (venue === 'Bybit') connectToBybit(symbol);
// // // //     if (venue === 'Deribit') connectToDeribit(symbol);
// // // //     return () => {
// // // //       if (venue === 'OKX') disconnectFromOKX(symbol);
// // // //       if (venue === 'Bybit') disconnectFromBybit(symbol);
// // // //       if (venue === 'Deribit') disconnectFromDeribit(symbol);
// // // //     };
// // // //   }, [venue, symbol]);
// // // //   const handleSubmit = (data: SimulationFormValues) => {
// // // //     setVenue(data.venue);
// // // //     setSimulatedOrder(data);
// // // //   };
// // // //   return (
// // // //     <main className="bg-gray-900 min-h-screen text-white p-6">
// // // //       <div className="max-w-7xl mx-auto space-y-6">
// // // //         <header className="flex flex-col md:flex-row md:items-center justify-between">
// // // //           <h1 className="text-2xl font-bold">
// // // //             📊 Real-Time Orderbook Simulator
// // // //           </h1>
// // // //           <div className="mt-4 md:mt-0">
// // // //             <label className="mr-2 font-semibold">Venue:</label>
// // // //             <select
// // // //               value={venue}
// // // //               onChange={(e) =>
// // // //                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
// // // //               }
// // // //               className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
// // // //             >
// // // //               <option value="OKX">OKX</option>
// // // //               <option value="Bybit">Bybit</option>
// // // //               <option value="Deribit">Deribit</option>
// // // //             </select>
// // // //           </div>
// // // //         </header>
// // // //         <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           {/* Raw Bids and Asks View */}
// // // //           <div className="bg-gray-800 p-4 rounded-lg shadow-md">
// // // //             <h2 className="text-lg font-semibold text-green-400 mb-2">
// // // //               📘 Bids ({symbol})
// // // //             </h2>
// // // //             <div className="text-sm max-h-96 overflow-y-auto space-y-1">
// // // //               {orderbook?.bids?.slice(0, 15).map((b, i) => (
// // // //                 <div key={i} className="text-green-300">
// // // //                   {b.price.toFixed(2)} × {b.quantity}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //           <div className="bg-gray-800 p-4 rounded-lg shadow-md">
// // // //             <h2 className="text-lg font-semibold text-red-400 mb-2">
// // // //               📕 Asks ({symbol})
// // // //             </h2>
// // // //             <div className="text-sm max-h-96 overflow-y-auto space-y-1">
// // // //               {orderbook?.asks?.slice(0, 15).map((a, i) => (
// // // //                 <div key={i} className="text-red-300">
// // // //                   {a.price.toFixed(2)} × {a.quantity}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //         {/* Simulation Form */}
// // // //         <section className="bg-gray-800 p-6 rounded-lg shadow-md">
// // // //           <h2 className="text-xl font-semibold mb-4 text-indigo-400">
// // // //             🧪 Simulate Order Placement
// // // //           </h2>
// // // //           <SimulationForm onSubmitSim={handleSubmit} />
// // // //         </section>
// // // //         {/* Visual Simulation Viewer */}
// // // //         {simulatedOrder && (
// // // //           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
// // // //             <h2 className="text-xl font-semibold mb-4 text-yellow-400">
// // // //               📍 Simulation Visualization
// // // //             </h2>
// // // //             <OrderbookViewer
// // // //               venue={simulatedOrder.venue}
// // // //               symbol={simulatedOrder.symbol}
// // // //               simulatedOrder={simulatedOrder}
// // // //             />
// // // //           </section>
// // // //         )}
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }
// // // 'use client';
// // // import SimulationForm, {
// // //   SimulationFormValues,
// // // } from '@/components/SimulationForm';
// // // import {
// // //   connectToBybit,
// // //   disconnectFromBybit,
// // // } from '@/lib/orderbook/bybitService';
// // // import {
// // //   connectToDeribit,
// // //   disconnectFromDeribit,
// // // } from '@/lib/orderbook/deribitService';
// // // import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// // // import { useEffect, useState } from 'react';
// // // import OrderbookViewer from '@/components/OrderbookViewer';
// // // import { useOrderbookStore } from '@/store/orderbookStore';
// // // const symbols = {
// // //   OKX: 'BTC-USDT',
// // //   Bybit: 'BTCUSDT',
// // //   Deribit: 'BTC-PERPETUAL',
// // // } as const;
// // // export default function Home() {
// // //   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
// // //   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
// // //   const symbol = symbols[venue];
// // //   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);
// // //   useEffect(() => {
// // //     if (venue === 'OKX') connectToOKX(symbol);
// // //     if (venue === 'Bybit') connectToBybit(symbol);
// // //     if (venue === 'Deribit') connectToDeribit(symbol);
// // //     return () => {
// // //       if (venue === 'OKX') disconnectFromOKX(symbol);
// // //       if (venue === 'Bybit') disconnectFromBybit(symbol);
// // //       if (venue === 'Deribit') disconnectFromDeribit(symbol);
// // //     };
// // //   }, [venue, symbol]);
// // //   const handleSubmit = (data: SimulationFormValues) => {
// // //     setVenue(data.venue);
// // //     setSimulatedOrder(data);
// // //   };
// // //   return (
// // //     <main className="bg-gray-950 min-h-screen text-white px-4 md:px-6 py-8">
// // //       <div className="max-w-7xl mx-auto space-y-10">
// // //         {/* Header */}
// // //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// // //           <h1 className="text-3xl font-bold text-white">
// // //             📊 Real-Time Orderbook Simulator
// // //           </h1>
// // //           <div className="flex items-center gap-3">
// // //             <label className="text-sm font-medium text-gray-300">Venue:</label>
// // //             <select
// // //               value={venue}
// // //               onChange={(e) =>
// // //                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
// // //               }
// // //               className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-md text-sm"
// // //             >
// // //               <option value="OKX">OKX</option>
// // //               <option value="Bybit">Bybit</option>
// // //               <option value="Deribit">Deribit</option>
// // //             </select>
// // //           </div>
// // //         </div>
// // //         {/* Orderbook Bids and Asks */}
// // //         <section className="grid md:grid-cols-2 gap-6">
// // //           <div className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-800">
// // //             <h2 className="text-lg font-semibold text-green-400 mb-4">
// // //               📘 Top 15 Bids — {symbol}
// // //             </h2>
// // //             <div className="max-h-96 overflow-y-auto space-y-1 text-sm">
// // //               {orderbook?.bids?.slice(0, 15).map((b, i) => (
// // //                 <div key={i} className="text-green-300">
// // //                   {b.price.toFixed(2)} × {b.quantity}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-800">
// // //             <h2 className="text-lg font-semibold text-red-400 mb-4">
// // //               📕 Top 15 Asks — {symbol}
// // //             </h2>
// // //             <div className="max-h-96 overflow-y-auto space-y-1 text-sm">
// // //               {orderbook?.asks?.slice(0, 15).map((a, i) => (
// // //                 <div key={i} className="text-red-300">
// // //                   {a.price.toFixed(2)} × {a.quantity}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>
// // //         {/* Simulation Form */}
// // //         <section className="bg-gray-900 p-6 rounded-xl shadow border border-gray-800">
// // //           <h2 className="text-xl font-semibold mb-4 text-indigo-400">
// // //             🧪 Simulate Order Placement
// // //           </h2>
// // //           <SimulationForm onSubmitSim={handleSubmit} />
// // //         </section>
// // //         {/* Simulation Result */}
// // //         {simulatedOrder && (
// // //           <section className="bg-gray-900 p-6 rounded-xl shadow border border-gray-800">
// // //             <h2 className="text-xl font-semibold mb-4 text-yellow-400">
// // //               📍 Simulation Visualization
// // //             </h2>
// // //             <OrderbookViewer
// // //               venue={simulatedOrder.venue}
// // //               symbol={simulatedOrder.symbol}
// // //               simulatedOrder={simulatedOrder}
// // //             />
// // //           </section>
// // //         )}
// // //       </div>
// // //     </main>
// // //   );
// // // }
// // 'use client';
// // import SimulationForm, {
// //   SimulationFormValues,
// // } from '@/components/SimulationForm';
// // import {
// //   connectToBybit,
// //   disconnectFromBybit,
// // } from '@/lib/orderbook/bybitService';
// // import {
// //   connectToDeribit,
// //   disconnectFromDeribit,
// // } from '@/lib/orderbook/deribitService';
// // import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// // import { useEffect, useState } from 'react';
// // import OrderbookViewer from '@/components/OrderbookViewer';
// // import { useOrderbookStore } from '@/store/orderbookStore';
// // const symbols = {
// //   OKX: 'BTC-USDT',
// //   Bybit: 'BTCUSDT',
// //   Deribit: 'BTC-PERPETUAL',
// // } as const;
// // export default function Home() {
// //   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
// //   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
// //   const symbol = symbols[venue];
// //   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);
// //   useEffect(() => {
// //     if (venue === 'OKX') connectToOKX(symbol);
// //     if (venue === 'Bybit') connectToBybit(symbol);
// //     if (venue === 'Deribit') connectToDeribit(symbol);
// //     return () => {
// //       if (venue === 'OKX') disconnectFromOKX(symbol);
// //       if (venue === 'Bybit') disconnectFromBybit(symbol);
// //       if (venue === 'Deribit') disconnectFromDeribit(symbol);
// //     };
// //   }, [venue, symbol]);
// //   const handleSubmit = (data: SimulationFormValues) => {
// //     setVenue(data.venue);
// //     setSimulatedOrder(data);
// //   };
// //   return (
// //     <main className="bg-gray-950 min-h-screen text-white px-6 py-10">
// //       <div className="max-w-7xl mx-auto space-y-10">
// //         <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// //           <h1 className="text-3xl font-bold text-white">
// //             📊 Real-Time Orderbook Simulator
// //           </h1>
// //           <div className="flex items-center gap-2">
// //             <label className="text-sm font-semibold text-gray-300">
// //               Select Venue:
// //             </label>
// //             <select
// //               value={venue}
// //               onChange={(e) =>
// //                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
// //               }
// //               className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             >
// //               <option value="OKX">OKX</option>
// //               <option value="Bybit">Bybit</option>
// //               <option value="Deribit">Deribit</option>
// //             </select>
// //           </div>
// //         </header>
// //         {/* Orderbook Panel */}
// //         <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div className="bg-gray-900 rounded-xl p-5 shadow-lg border border-gray-800">
// //             <h2 className="text-lg font-semibold text-green-400 mb-3">
// //               📘 Bids ({symbol})
// //             </h2>
// //             <div className="text-sm max-h-96 overflow-y-auto divide-y divide-gray-800">
// //               {orderbook?.bids?.slice(0, 20).map((b, i) => (
// //                 <div key={i} className="text-green-300 py-1">
// //                   {b.price.toFixed(2)} × {b.quantity}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="bg-gray-900 rounded-xl p-5 shadow-lg border border-gray-800">
// //             <h2 className="text-lg font-semibold text-red-400 mb-3">
// //               📕 Asks ({symbol})
// //             </h2>
// //             <div className="text-sm max-h-96 overflow-y-auto divide-y divide-gray-800">
// //               {orderbook?.asks?.slice(0, 20).map((a, i) => (
// //                 <div key={i} className="text-red-300 py-1">
// //                   {a.price.toFixed(2)} × {a.quantity}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //         {/* Simulation Form */}
// //         <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg">
// //           <h2 className="text-xl font-semibold text-indigo-400 mb-4">
// //             🧪 Simulate Order Placement
// //           </h2>
// //           <SimulationForm onSubmitSim={handleSubmit} />
// //         </section>
// //         {/* Simulation Output */}
// //         {simulatedOrder && (
// //           <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg">
// //             <h2 className="text-xl font-semibold text-yellow-400 mb-4">
// //               📍 Simulation Visualization
// //             </h2>
// //             <OrderbookViewer
// //               venue={simulatedOrder.venue}
// //               symbol={simulatedOrder.symbol}
// //               simulatedOrder={simulatedOrder}
// //             />
// //           </section>
// //         )}
// //       </div>
// //     </main>
// //   );
// // }
// 'use client';
// import SimulationForm, {
//   SimulationFormValues,
// } from '@/components/SimulationForm';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import {
//   connectToBybit,
//   disconnectFromBybit,
// } from '@/lib/orderbook/bybitService';
// import {
//   connectToDeribit,
//   disconnectFromDeribit,
// } from '@/lib/orderbook/deribitService';
// import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// import { useEffect, useState } from 'react';
// import OrderbookViewer from '@/components/OrderbookViewer';
// import { useOrderbookStore } from '@/store/orderbookStore';
// const symbols = {
//   OKX: 'BTC-USDT',
//   Bybit: 'BTCUSDT',
//   Deribit: 'BTC-PERPETUAL',
// } as const;
// export default function DashboardPage() {
//   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
//   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
//   const symbol = symbols[venue];
//   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);
//   useEffect(() => {
//     if (venue === 'OKX') connectToOKX(symbol);
//     if (venue === 'Bybit') connectToBybit(symbol);
//     if (venue === 'Deribit') connectToDeribit(symbol);
//     return () => {
//       if (venue === 'OKX') disconnectFromOKX(symbol);
//       if (venue === 'Bybit') disconnectFromBybit(symbol);
//       if (venue === 'Deribit') disconnectFromDeribit(symbol);
//     };
//   }, [venue, symbol]);
//   const handleSubmit = (data: SimulationFormValues) => {
//     setVenue(data.venue);
//     setSimulatedOrder(data);
//   };
//   return (
//     <main className="bg-gray-900 min-h-screen text-white p-6">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <header className="flex items-center justify-between">
//           <h1 className="text-2xl font-bold">📊 Trading Dashboard</h1>
//           <div>
//             <label className="mr-2 font-semibold">Venue:</label>
//             <select
//               value={venue}
//               onChange={(e) =>
//                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
//               }
//               className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
//             >
//               <option value="OKX">OKX</option>
//               <option value="Bybit">Bybit</option>
//               <option value="Deribit">Deribit</option>
//             </select>
//           </div>
//         </header>
//         {/* Dashboard Tabs */}
//         <div className="flex gap-4">
//           {/* Left Tabs Navigation */}
//           <Tabs defaultValue="simulation" className="flex w-full">
//             <TabsList className="flex flex-col bg-gray-800 rounded-md p-2 min-w-[180px]">
//               <TabsTrigger value="simulation" className="mb-2">
//                 🧪 Simulate Order
//               </TabsTrigger>
//               <TabsTrigger value="orderbook" className="mb-2">
//                 📘 Orderbook
//               </TabsTrigger>
//               <TabsTrigger value="details">📊 Market Depth</TabsTrigger>
//             </TabsList>
//             {/* Tabs Content */}
//             <div className="flex-1 bg-gray-800 p-6 rounded-md shadow ml-4">
//               <TabsContent value="simulation">
//                 <h2 className="text-xl font-semibold mb-4 text-indigo-400">
//                   🧪 Simulate Order Placement
//                 </h2>
//                 <SimulationForm onSubmitSim={handleSubmit} />
//               </TabsContent>
//               <TabsContent value="orderbook">
//                 <h2 className="text-xl font-semibold mb-4 text-green-400">
//                   🧾 Live Orderbook ({symbol})
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <h3 className="text-lg text-green-300 mb-2">Bids</h3>
//                     <div className="text-sm max-h-96 overflow-y-auto space-y-1">
//                       {orderbook?.bids?.slice(0, 15).map((b, i) => (
//                         <div key={i} className="text-green-200">
//                           {b.price.toFixed(2)} × {b.quantity}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg text-red-300 mb-2">Asks</h3>
//                     <div className="text-sm max-h-96 overflow-y-auto space-y-1">
//                       {orderbook?.asks?.slice(0, 15).map((a, i) => (
//                         <div key={i} className="text-red-200">
//                           {a.price.toFixed(2)} × {a.quantity}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="details">
//                 <h2 className="text-xl font-semibold mb-4 text-yellow-400">
//                   📍 Market Depth & Simulation Details
//                 </h2>
//                 {simulatedOrder ? (
//                   <OrderbookViewer
//                     venue={simulatedOrder.venue}
//                     symbol={simulatedOrder.symbol}
//                     simulatedOrder={simulatedOrder}
//                   />
//                 ) : (
//                   <div className="text-gray-400">
//                     Submit an order simulation to view details.
//                   </div>
//                 )}
//               </TabsContent>
//             </div>
//           </Tabs>
//         </div>
//       </div>
//     </main>
//   );
// }
__turbopack_context__.s({
    "default": ()=>DashboardPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SimulationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SimulationForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$bybitService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/orderbook/bybitService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$deribitService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/orderbook/deribitService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$okxService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/orderbook/okxService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderbookViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OrderbookViewer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/orderbookStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const symbols = {
    OKX: 'BTC-USDT',
    Bybit: 'BTCUSDT',
    Deribit: 'BTC-PERPETUAL'
};
function DashboardPage() {
    const [venue, setVenue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('OKX');
    const [simulatedOrder, setSimulatedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const symbol = symbols[venue];
    const orderbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderbookStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrderbookStore"])((s)=>s.data[venue]?.[symbol]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (venue === 'OKX') (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$okxService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectToOKX"])(symbol);
        if (venue === 'Bybit') (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$bybitService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectToBybit"])(symbol);
        if (venue === 'Deribit') (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$deribitService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectToDeribit"])(symbol);
        return ()=>{
            if (venue === 'OKX') (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$okxService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disconnectFromOKX"])(symbol);
            if (venue === 'Bybit') (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$bybitService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disconnectFromBybit"])(symbol);
            if (venue === 'Deribit') (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderbook$2f$deribitService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disconnectFromDeribit"])(symbol);
        };
    }, [
        venue,
        symbol
    ]);
    const handleSubmit = (data)=>{
        setVenue(data.venue);
        setSimulatedOrder(data);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-gray-900 min-h-screen text-white p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[100vw] mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold",
                            children: "📊 Trading Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mr-2 font-semibold",
                                    children: "Venue:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: venue,
                                    onChange: (e)=>setVenue(e.target.value),
                                    className: "bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "OKX",
                                            children: "OKX"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Bybit",
                                            children: "Bybit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Deribit",
                                            children: "Deribit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 581,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-gray-800 rounded-lg p-4 shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-indigo-400 mb-4",
                                    children: "🧪 Simulate Order Placement"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SimulationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onSubmitSim: handleSubmit
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 606,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 602,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-gray-800 rounded-lg p-4 shadow max-h-[85vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-green-400 mb-4",
                                    children: [
                                        "📘 Orderbook (",
                                        symbol,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 611,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-green-300 mb-2",
                                                    children: "Bids"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: orderbook?.bids?.map((level, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 text-xs text-green-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: level.price.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: level.quantity.toFixed(3)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 624,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: level.total?.toFixed(3) ?? '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-red-300 mb-2",
                                                    children: "Asks"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: orderbook?.asks?.map((level, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 text-xs text-red-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: level.price.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 638,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: level.quantity.toFixed(3)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 639,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: level.total?.toFixed(3) ?? '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 640,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-gray-800 rounded-lg p-4 shadow overflow-y-auto max-h-[85vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-yellow-400 mb-4",
                                    children: "📊 Market Depth & Simulation Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this),
                                simulatedOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderbookViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    venue: simulatedOrder.venue,
                                    symbol: simulatedOrder.symbol,
                                    simulatedOrder: simulatedOrder
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400",
                                    children: "Submit an order to view simulation results."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 579,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 578,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1073bb8a._.js.map
window.MathJax = {
    TeX: {
        equationNumbers: { autoNumber: "AMS" },
        Macros: {
            x: "{\\times}",
            bm: ["{\\boldsymbol{#1}}", 1],
            dd: ["{\\frac{\\partial #1}{\\partial #2}}", 2]
        }
    },
    CommonHTML: {
        scale: 90,
        mtextFontInherit: true
    }
}; 
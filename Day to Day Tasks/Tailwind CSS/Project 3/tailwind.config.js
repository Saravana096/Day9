/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./Task1.html"],

    theme: {
        extend: {

            colors: {
                primary: "#2563EB"
            },

            boxShadow: {
                product: "0 10px 30px rgba(0, 0, 0, 0.15)"
            }

        }
    },

    plugins: []
};
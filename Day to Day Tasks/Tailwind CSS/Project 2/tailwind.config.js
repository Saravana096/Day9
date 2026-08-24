/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./Task6.html"
    ],

    theme: {
        extend: {

            colors: {
                primary: "#4F46E5",
                secondary: "#7C3AED",
                profileBg: "#F5F3FF",
                darkText: "#1E1B4B"
            },

            fontFamily: {
                profile: ["Poppins", "sans-serif"]
            },

            borderRadius: {
                profile: "30px"
            }
        }
    },

    plugins: []
};
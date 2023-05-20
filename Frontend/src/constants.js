let key = '';

console.log(process.env.NODE_ENV);
console.log(process.env.VITE_GOOGLE_MAP_API_KEY);
if (process.env.NODE_ENV === 'development') {
    key = "YOUR_API_KEY_HERE"
} else {
    key = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
}

export const apiKey = key;

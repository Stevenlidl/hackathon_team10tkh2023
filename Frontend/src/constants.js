let key = '';

console.log(process.env.NODE_ENV);
console.log(process.env.GOOGLE_MAP_API_KEY);
if (process.env.NODE_ENV === 'development') {
    key = "YOUR_API_KEY_HERE"
} else {
    key = process.env.GOOGLE_MAP_API_KEY;
}

export const apiKey = key;

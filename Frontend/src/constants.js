let key = '';

if (process.env.NODE_ENV === 'development') {
    key = "YOUR_API_KEY_HERE"
} else {
    key = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
}

export const apiKey = key;

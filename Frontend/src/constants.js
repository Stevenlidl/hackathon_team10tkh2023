let key = '';

if (process.env.NODE_ENV === 'production') {
    key = process.env.GOOGLE_MAP_API_KEY;
} else {
    key = 'YOUR_API_KEY_HERE'
}

export const apiKey = key;
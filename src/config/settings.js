const settings = {
    development: {
        // apiUrl: 'http://localhost:5000',
        apiUrl: 'https://trade4all.herokuapp.com',
    },
    staging: {
        apiUrl: 'https://trade4all.herokuapp.com',
    },
    production: {
        apiUrl: 'https://trade4all.herokuapp.com',
    }
};


const getSettings = () => {
    if (!process.env.NODE_ENV) return settings.development;
    if (process.env.NODE_ENV === 'staging') return settings.staging;
    return settings.production;
};

export default getSettings();
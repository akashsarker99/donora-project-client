
'use server'

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const serverFetch = async( path) =>{
    const res = await fetch(`${baseUrl}${path}`, {
        cache: 'no-store',
    });
    const text = await res.text();
    const result = text ? JSON.parse(text) : null;

    if (!res.ok) {
        throw new Error(result?.message || 'Request failed');
    }

    return result;
}


export const serverMutation = async (path, data, method='POST') =>{
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    };

    if (data !== undefined && data !== null) {
        options.body = JSON.stringify(data);
    }

    const res = await fetch(`${baseUrl}${path}`, options);
    const text = await res.text();
    const result = text ? JSON.parse(text) : null;

    if (!res.ok) {
        throw new Error(result?.message || 'Request failed');
    }

    return result;
}

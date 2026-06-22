export const imageUpload = async (image) => {
    if (!(image instanceof File)) {
        throw new Error('Please select a valid image file');
    }

    const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY;
    if (!apiKey) {
        throw new Error('ImgBB API key is not configured');
    }

    const formData = new FormData();
    formData.append('image', image);
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
        method: 'POST',
        body: formData
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Image upload failed');
    }

    return data.data.display_url || data.data.url;
}

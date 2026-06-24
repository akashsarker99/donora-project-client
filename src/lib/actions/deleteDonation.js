export const deleteDonationRequest = async (id) => {
    console.log("id: ", id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/request/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }

    });
    const data = await res.json()
    console.log("data: ", data);
    return data;

}
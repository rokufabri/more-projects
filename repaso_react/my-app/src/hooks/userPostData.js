import React from 'react';

const userPostData = (url) => {
    const postData = async (data) => {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    };

    return { postData };
};

export default userPostData;

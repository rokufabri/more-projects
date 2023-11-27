import React from 'react'
import { useState, useEffect } from 'react'


const useFetchData = () => {
    const [data,setData] = useState([]);
    const API_GET = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(API_GET);
                const newData = await response.json();
                setData(newData)
            }catch(error){
                console.error("Error Fetching Data:",error)
            }
        };
        fetchData();
    },[]);

    return {data}
}

export default useFetchData
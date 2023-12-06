import axios from 'axios'
import { useState, useEffect } from 'react'
const DataFetcher = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users')
            setData(result.data)
            localStorage.setItem('myData', JSON.stringify(result.data))
        };

        const localData = localStorage.getItem('myData');
        if(localData) {
            setData(JSON.parse(localData));
        } else {
            fetchData();
        }
    },[])



    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.username}</div>
            ))}
        </div>
    )
}
export default DataFetcher
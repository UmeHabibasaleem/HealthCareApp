import axios from 'axios';
import {useState, useEffect} from 'react';


export default () => {
    const [result, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchResponse = async (category  ) => {
        try {
            const res = await axios.get('http://192.168.8.100:3000/users')
            const temp = res.data;
            if (category === 'ALL') {
                setResults(temp)
            } else {
                const CategoryWise = temp.filter((list) => list.category === category)
                setResults(CategoryWise);
            }
            setIsLoading(false);
        } catch (err) {
            setErrorMessage('something went wrong');
        }
    }
    useEffect(()=>{

        fetchResponse("ALL");

    },[]);



    return [fetchResponse,result,isLoading,errorMessage];
};

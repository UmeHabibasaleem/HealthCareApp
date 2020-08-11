import axios from 'axios';
import {useState, useEffect} from 'react';


export default () => {
    const [result, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchResponse = async (category  ) => {

        var resultCategory;
        if (typeof (category) === "string" || (typeof (category) === "object"  && (category.item ==='ALL')))
        {
            try{
                const res = await axios.get('http://192.168.8.104:3000/Projects')
                const temp = res.data.users;
                setResults(temp);
                setIsLoading(false);
            }catch (err) {
                setErrorMessage('something went wrong');
            }
        }
        else
        {
            resultCategory = (category.item);
            try{
                const res = await axios.get('http://192.168.8.104:3000/Projects')
                const temp = res.data.users;
                const CategoryWise = temp.filter( (list) => list.category ===  resultCategory)
                setResults( CategoryWise);
                setIsLoading(false);
            }catch (err) {
                setErrorMessage('something went wrong');
            }
        }
    }

    useEffect(()=>{

        fetchResponse("ALL");

    },[]);



    return [fetchResponse,result,isLoading,errorMessage];
};

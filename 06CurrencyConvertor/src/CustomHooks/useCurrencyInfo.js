import {useEffect , useState} from 'react'

// hooks majorly js return karte, to js file bnana shi rahega

function useCurrencyInfo(currency){
    const [data,setData] = useState({})            //useState mai hum empty object daal dete hain
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-0
            3-06/v1/currencies${currency}.json`)
            .then((res)  => res.json())
            .then((res) => setData(res[currency]))
         console.log(data);
    } , [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;


























































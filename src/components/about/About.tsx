import * as React from 'react';
import { hot } from 'react-hot-loader';
import Axios from 'axios';
import './about.scss';

const About : React.FC = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                setData(response.data)
            })
    },[])
    return (
        <>
            I am About Component
           <ul> {
                data.map((elem: any)=>{
                    return (
                        <li key={elem.id} className='list-item'>{elem.title}</li>
                    )
                })
            }</ul>
        </>
    )
}

export default hot(module)(About);
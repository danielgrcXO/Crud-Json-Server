import React, {useState} from 'react';


export default function CrudApi({title}){

    //state
    const [db, setDb] = useState([]);

    return(
        <div>
            <h2>{title}</h2>
        </div>
    );
}

CrudApi.defaultProps = { title : 'Crud with json'}
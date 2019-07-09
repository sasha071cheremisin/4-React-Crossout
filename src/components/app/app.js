import React from 'react';



const App = () => {
    const getResourse = async () => {
        const res = await fetch('https://crossoutdb.com/api/v1/items');

        if (!res.ok) {
            throw new Error(`Could not fetch`);
        }

        return await res.json();
    }

    getResourse().then((res)=>{
        console.log(res);
    });

    return (
        <div>App</div>
    );
};

export default App;

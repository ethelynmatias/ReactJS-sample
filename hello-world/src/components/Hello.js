import React from 'react'

const Hello = () =>{

    //jsx
    /*return (
        /<div>
            <h1>Hello, Ethel</h1>
        </div>
    )*/

    return React.createElement(
        'div', 
        {id:'test',className:'test'}, 
        React.createElement(
            'h1',
            null,
            'Hello, Ethel'
        )
    )
}

export default Hello
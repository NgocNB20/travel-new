import React from 'react'

function Error({error}) {
    return (
        <div>
            <h1 className="text-center">Error</h1>
        </div>
    )
}
Error.defaultProps = {
    error:"Error"
}

export default Error

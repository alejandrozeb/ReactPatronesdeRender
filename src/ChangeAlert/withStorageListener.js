import React from 'react';

function withStorageListener(WarppedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [StorageChange, setStorageChange] = React.useState(false);

        return <WarppedComponent 
                show={StorageChange}
                toggle={setStorageChange}
                />
    }
}

export{withStorageListener};
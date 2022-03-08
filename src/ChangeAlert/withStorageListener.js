import React from 'react';

function withStorageListener(WarppedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [StorageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1'){
                console.log('Hubo cambios en TODOS_V1');
                setStorageChange(true);
            }
        });


        return <WarppedComponent 
                show={StorageChange}
                toggle={setStorageChange}
                />
    }
}

export{withStorageListener};
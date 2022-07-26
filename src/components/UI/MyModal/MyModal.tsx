import React, {FC, PropsWithChildren} from 'react';

const MyModal :FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MyModal;
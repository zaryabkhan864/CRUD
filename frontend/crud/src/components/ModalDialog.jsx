import React, { useState } from 'react'

const ModalDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <ModalDialog isOpen={isOpen} setIsOpen={setIsOpen} />
            <button onClick={() => setIsOpen(true)}>Open Dialog</button>
        </div>
    )
}

export default ModalDialog
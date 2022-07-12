import React, { useState }  from 'react';

const CapturePopup = (props) => {
    const [nickname, setNickname] = useState(null)
    const [captureDate, setCaptureDate] = useState(null)
    const [captureLevel, setCaptureLevel] = useState(null)

    const handleSubmit = () => {
        // pull from state, set localstorage
    }

    const handleChange = () => {
        // monitor form for change
        // update state
    }

    return (
        <div>
            <h1>Capture Popup!</h1>
        </div>
    )
}

export default CapturePopup;
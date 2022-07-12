import React, { useState }  from 'react';

const CapturePopup = (props) => {
    const [nickname, setNickname] = useState(null)
    const [captureDate, setCaptureDate] = useState(null)
    const [captureLevel, setCaptureLevel] = useState(null)

    console.log(props)

    const handleSubmit = () => {
        // if at least date and level are present...
        // pull from state, set localstorage
        localStorage.setItem('key', {
            id: props.id,
            nickname: nickname,
            captureDate: captureDate,
            captureLevel: captureLevel
        })
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
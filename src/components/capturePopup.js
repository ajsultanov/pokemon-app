import React, { useState }  from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root")

const CapturePopup = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [nickname, setNickname] = useState(null)
    const [captureDate, setCaptureDate] = useState(null)
    const [captureLevel, setCaptureLevel] = useState(null)

    const handleSubmit = () => {
        setModalOpen(false)
        setCaptureDate(new Date())
        // if at least date and level are present...
        // pull from state, set localstorage
        localStorage.setItem('key', {
            nickname: nickname,
            captureDate: captureDate,
            captureLevel: captureLevel
        })
    }

    const handleChange = () => {
        // monitor form for change
        // update state
        console.log("a change was made!")
    }

    const getDate = () => {
        const d = new Date()
        return d.toDateString()
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            <Modal 
                // className='CapturePopup'
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                }}
                className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                }}
                closeTimeoutMS={100}
            >
                <form onChange={handleChange}>
                    <label for="nickname">Nickname</label>
                    <input id="nickname" placeholder="nickname"/>
                    <label for="date">Today's Date</label>
                    <input id="date" value={getDate()} disabled/>
                    <label for="level">Level when captured</label>
                    <input id="level" type="number" min="1" max="100" placeholder="5"/>
                </form>
                <button onClick={handleSubmit}>Capture</button>
            </Modal>
        </div>
    )
}

export default CapturePopup;
import React, { useState }  from 'react';
import { capitalize } from "../utils.js";
import Modal from 'react-modal';

Modal.setAppElement("#root")

const CapturePopup = (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [nickname, setNickname] = useState(null)
    const today = new Date()
    const captureDate = today.toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric" }) 
    const [captureLevel, setCaptureLevel] = useState(null)

    const handleSubmit = () => {
        setModalOpen(false)
        if (captureLevel !== null) {
            localStorage.setItem(props.id, JSON.stringify({
                nickname: nickname,
                captureDate: captureDate,
                captureLevel: captureLevel
            }))
            window.location.reload()
        }
    }

    const handleChange = (e) => {
        if (e.target.id === 'nickname') {
            setNickname(e.target.value)
        } else if (e.target.id === 'level') {
            setCaptureLevel(e.target.value)
        }
    }

    const getDate = () => {
        const d = new Date()
        return d.toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric" }) 
    }

    return (
        <div>
            <button 
                onClick={() => setModalOpen(true)}
                className="captureOpenButton"
            >
                Capture
            </button>
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
                <div className='captureForm'>
                    <h2>Capturing {capitalize(props.name)}:</h2>
                    <form onChange={handleChange}>
                        <div>
                            <label htmlFor="nickname">Nickname</label>
                            <input 
                                id="nickname" 
                                type="text"
                                placeholder={'(optional)'}
                            />
                        </div>
                        <div>
                            <label htmlFor="date">Today's Date</label>
                            <input 
                                id="date" 
                                value={getDate()} 
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="level">Level when captured</label>
                            <input 
                                id="level" 
                                type="number" min="1" max="100" 
                                placeholder={'(required)'}
                            />
                        </div>
                    </form>
                </div>
                <button 
                    onClick={handleSubmit}
                    className="captureOpenButton"
                >
                    Capture
                </button>
            </Modal>
        </div>
    )
}

export default CapturePopup;
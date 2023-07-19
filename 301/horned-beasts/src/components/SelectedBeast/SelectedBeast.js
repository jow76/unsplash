import React from 'react'

export default function SelectedBeast(modalContent) {
    return (
    <div className="selected-beast">
        <div className="sb-container">
            <img src={modalContent.image_url} alt={modalContent.title}></img>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.description}</p>
        </div>
    </div>
    )
}

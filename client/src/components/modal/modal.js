import { ReactDOM } from "react"
import React from "react"
const modal_styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transforn:'translate(-50%, -50%)',
    backgroundColor:'#fff',
    padding:'50px',
    zIndex:1000
}

const overlay_styles ={
    position: 'fixed',
    top: 0,
    left:0,
    right:0,
    bottom:0,
    background: 'rgba(0,0,0,.7)',
    zIndex:1000
}
const portal = document.getElementById('portal')
export default function Modal({open, children, onClose}) {
    
    if(!open) return null

    return (
        <>
        <div style={overlay_styles}>
            <div style={modal_styles}>
                <button onClick={onClose}>
                    <i class="bi bi-x"></i>
                </button>
                {children}
            </div>
        </div>
        </>
    )
}
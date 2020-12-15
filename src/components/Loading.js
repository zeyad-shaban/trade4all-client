import React from 'react';

export default function Loading({ full = false, size = 100, type = 'primary' }) {
    const loaderStyle = full ?
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        : {};
    return (
        <div style={loaderStyle}>
            <div className={`spinner-border text-${type}`} role="status" style={{ width: size, height: size }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
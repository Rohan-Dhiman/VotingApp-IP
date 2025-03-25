import React from 'react'

function Card({ photo, candidateName, partyName, onVote }) {
    return (
        <div style={{
            border: '1px solid gray',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
            color: 'black',
            maxWidth: '300px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <img 
                src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" 
                alt={`${candidateName}'s photo`} 
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px'
                }} 
            />
            <h2 style={{ margin: '16px 0 8px' }}>Raninder Singh</h2>
            <h4 style={{ margin: '0 0 16px', color: 'gray' }}>Ranno</h4>
            <hr style={{ margin: '16px 0', borderColor: 'gray' }} />
            <button 
                onClick={onVote} 
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Vote Now
            </button>
        </div>
    );
}



export default Card
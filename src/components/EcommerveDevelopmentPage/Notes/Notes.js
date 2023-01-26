import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import '../Notes/notes.css'



function Notes() {

    const [notes, setNotes] = useState(['Brooks’ Law, or How to make a late project even later', 'Why refactor?', 'Is it technical debt or just mess?'
    ])

    return (
        <div className='notes-section'>
            <div className="container">
                <Grid2 sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 8
                }}>
                    <Grid2 sx={{
                        width: '50%'
                    }}>
                        <div className='notes-title-div'>
                            <h3 className='notes-title'>Notes</h3>
                        </div>
                    </Grid2>
                    <Grid2 sx={{
                        width: '50%'
                    }}>
                        {notes.map((note, i) => <div key={i}>
                            <div className="notes-line"></div>
                            <div className='notes-nav-button'>
                                <p>{note}</p>
                                <div>
                                    <EastOutlinedIcon className='slide-left' />
                                </div>
                            </div>
                            {i !== notes.length - 1 ? '' : <div className="notes-line"></div>}
                        </div>)}
                    </Grid2>
                </Grid2>

            </div>
        </div>
    )
}

export default Notes
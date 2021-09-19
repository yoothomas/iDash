import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Bookmarks() {
    return (
        <Box
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                ml: 2,
                },
                mb: 3,
            }} 
            >
            <EmailIcon className="icon" color="primary" />
            <Link className="link" href="https://www.gmail.com/" target="_blank" rel="noopener">Gmail</Link>
            <AddToDriveIcon className="icon" color="primary" padding={2}/>
            <Link className="link" href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener">Drive</Link>
            <LinkedInIcon className="icon" color="primary" padding={2}/>
            <Link className="link" href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</Link>
        </Box>
    );
}
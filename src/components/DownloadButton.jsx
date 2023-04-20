import { Download } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

function DownloadButton({ filename, fileurl }) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileurl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <IconButton onClick={handleDownload}>
            <Download sx={{ fontSize: 30, color: '#fff' }} />
        </IconButton>
    );
}

export default DownloadButton;

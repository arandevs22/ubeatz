import { Download } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

function DownloadButton({ filename, fileurl }) {
    const handleDownload = async () => {
        const response = await fetch(fileurl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
    };

    return (
        <IconButton onClick={handleDownload}>
            <Download sx={{ fontSize: 30, color: '#fff' }} />
        </IconButton>
    );
}

export default DownloadButton;

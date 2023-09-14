import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';

const ChatApp = () => {

    const theme = useTheme();
    console.log(theme);
    return (
        <div>
            <Box sx={{
                background: theme.palette.background.paper, boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)", height:"100vh", width:"10%",
                padding:"2px"
            }}> 

            <div>


                 <p className='text-black mt-3'>VOcab Master</p>

            </div>

            </Box>
         
            
        </div>
    );
};

export default ChatApp;
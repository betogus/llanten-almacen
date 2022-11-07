import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Skeletons = () => {
  return (
    <Stack spacing={1} >
        
            <div className='item-cardContainer'>
                <div className='item-props'>
                    <Skeleton variant="rectangular" width={340} height={28} style={{marginBottom: "0.5rem"}}/>
                    <Skeleton variant="rectangular" width={170} height={10} style={{marginBottom: "0.5rem"}}/>    
                    <Skeleton variant="rectangular" width={170} height={10} style={{marginBottom: "0.5rem"}}/> 
                </div>
                <div className='item-buttonContainer'>
                    <i className="bi bi-chevron-compact-right"></i>
                </div>
            </div>
           
         
    </Stack>
  );
}

export default Skeletons
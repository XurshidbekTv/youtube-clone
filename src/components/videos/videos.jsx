import { Box } from '@mui/material'
import React from 'react'
import { VideoCard, ChanelCard } from '../indx'

const Videos = ({videos}) => {
    console.log(videos)
return <Box
gap={2}
display={'flex'}
flexWrap={'wrap'}
>
{
    videos.map(item=>(
        <Box key={item.id.videoId} display={'flex'} justifyContent={'center'}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.chanelId && <ChanelCard video={item}/>}
        </Box>
        )
    )
}
</Box>
}

export default Videos
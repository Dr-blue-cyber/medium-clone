import { Avatar, Box, Chip, Divider, Grid, IconButton, Typography } from '@mui/material'
import React, { PropsType } from 'react'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Image } from '@mui/icons-material';

const List = [
    {
        userName: "Ravi Kumar",
        userProfile: "https://miro.medium.com/v2/resize:fill:176:176/1*U4l1xrt117aCdARIs1a-QQ.jpeg",
        uploadDate: "Mar 16, 2022",
        postHeading: "Top 30 JavaScript Interview Questions and Answers for 2024",
        postSummary: "Prepare for your next JavaScript interview with confidence! Whether you’re a seasoned developer or just starting your career in tech, this",
        postTags: ["JavaScript"],
        readTime: "28 min read",

    },
    {
        userName: "Bret Cameron",
        userProfile: "https://miro.medium.com/v2/resize:fill:176:176/1*U4l1xrt117aCdARIs1a-QQ.jpeg",
        uploadDate: "Apr 16, 2024",
        postHeading: "Learn Rust by coding a command line Connect 4 game",
        postSummary: "In this article, we’ll explore how Rust can help us write command line applications by creating a simple version of Connect 4. I recently took on the challenge of learning Rust and, in a bid to take my own advice,",
        postTags: ["Rust"],
        readTime: "15 min read",

    },
    {
        userName: "Paul Walker",
        userProfile: "https://miro.medium.com/v2/resize:fill:176:176/1*U4l1xrt117aCdARIs1a-QQ.jpeg",
        uploadDate: "Feb 1, 2024",
        postHeading: "6 Legit Apps To Make Truly Passive Income By Having Your Computer Turned On.",
        postSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, iure in eos corporis laborum quidem porro beatae laboriosam, vero reiciendis eum? Harum reiciendis culpa maxime aperiam aut pariatur ratione, qui ipsam exercitationem similique quis mollitia necessitatibus ab deleniti dolor ad aspernatur dolore, adipisci officiis illum, natus asperiores rerum commodi. Expedita provident maiores numquam? Quod nesciunt quis modi esse rerum?",
        postTags: ["SQL", "React"],
        readTime: "17 min read",

    },
]

// /**
//  * @typedef {Object} TExportedDataResponse
//  * @property {{ status: 'SUCCESS' | 'FAILED', reportData: Object, exportType : 'exportnow' | 'sendtoemail'}} data
//  */


/**
 * @param {{ userName: string, userProfile: string, uploadDate: string, postHeading: string, postSummary: string, postTags: [string], readTime: string }} props - Article prop
 */
export const ArticleCard = (props) => {
    const { userName, userProfile, uploadDate, postHeading, postSummary, postTags, readTime } = props.item;
    console.log(userName, userProfile, uploadDate, postHeading, postSummary, postTags, readTime,)
    return (
        <>
            <Grid container rowGap={1} m={4}>
                <Grid>
                    <Grid display={'flex'} alignItems={'center'} gap={2}>
                        <Avatar sx={{ width: 26, height: 26 }} src={userProfile}></Avatar>
                        <Typography variant='h6'>{userName}</Typography>
                        <Typography variant='body1'>·{uploadDate}</Typography>
                    </Grid>
                </Grid>
                <Grid display={'flex'} columnGap={4}>

                    <Grid container width={'70%'} rowGap={1}>
                        <Grid marginBlock={1} >
                            <Typography variant='h6'>{postHeading}</Typography>
                            {postSummary}
                        </Grid>
                        <Grid container display={'flex'} alignItems={'center'} >

                            {postTags?.map(item => {
                                return <Chip label={item} />
                            })}
                            <Typography flexGrow={1} variant='body1' margin={1} >{readTime}</Typography>
                            <IconButton ><BookmarkAddOutlinedIcon /></IconButton>
                            <IconButton><RemoveCircleOutlineIcon /></IconButton>
                            <IconButton><MoreHorizOutlinedIcon /></IconButton>

                        </Grid>
                    </Grid>
                    <Grid width={"30%"}>
                        <img loading='lazy' height={"112px"} width={"112px"} src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JjBD7KLB6IiQCr4ZdWtrrw.gif' alt='image'  ></img>
                        {/* <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JjBD7KLB6IiQCr4ZdWtrrw.gif"  alt="side-image"></img> */}
                    </Grid>

                    <Divider />
                </Grid>
            </Grid >
            <Divider />

        </>
    )
}



export const PostCard = () => {
    return (
        <Grid >

            {List?.map((item, index) => {
                return <ArticleCard item={item} />
            })
            }

        </Grid>
    )
}

// export const PostCard = () => {
//     return (
//         <Grid container rowGap={1}>
//             <Grid>
//                 <Grid display={'flex'} alignItems={'center'} gap={2}>
//                     <Avatar sx={{ width: 26, height: 26 }} src='https://miro.medium.com/v2/resize:fill:176:176/1*U4l1xrt117aCdARIs1a-QQ.jpeg'></Avatar>
//                     <Typography variant='h6'>Paul Phoenix</Typography>
//                     <Typography variant='body1'>·Feb 16, 2024</Typography>
//                 </Grid>
//             </Grid>
//             <Grid display={'flex'} columnGap={4}>

//                 <Grid container width={'70%'} rowGap={1}>
//                     <Grid marginBlock={1} >
//                         <Typography variant='h6'>6 Legit Apps To Make Truly Passive Income By Having Your Computer Turned On.</Typography>
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, iure in eos corporis laborum quidem porro beatae laboriosam, vero reiciendis eum? Harum reiciendis culpa maxime aperiam aut pariatur ratione, qui ipsam exercitationem similique quis mollitia necessitatibus ab deleniti dolor ad aspernatur dolore, adipisci officiis illum, natus asperiores rerum commodi. Expedita provident maiores numquam? Quod nesciunt quis modi esse rerum?
//                     </Grid>
//                     <Grid container display={'flex'} alignItems={'center'} >

//                         <Chip label='Make Money Online' />{/* pascalcase */}
//                         <Typography flexGrow={1} variant='body1' margin={1} >7 min read</Typography>
//                         <IconButton ><BookmarkAddOutlinedIcon /></IconButton>
//                         <IconButton><RemoveCircleOutlineIcon /></IconButton>
//                         <IconButton><MoreHorizOutlinedIcon /></IconButton>

//                     </Grid>
//                 </Grid>
//                 <Grid width={"30%"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate labore repellendus id facilis rem obcaecati, sequi, consequuntur, sapiente vel nam. Sequi magnam voluptas velit nulla beatae, pariatur labore non iste, inventore maxime quidem excepturi itaque facilis sed officia sunt!
//                 </Grid>

//             </Grid>
//         </Grid >
//     )
// }

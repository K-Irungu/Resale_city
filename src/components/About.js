import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Common components/Footer';

const About = () => {
    return (
        < >

            <Paper
                sx={{
                    position: 'relative',
                    borderRadius: 0,
                    color: '#fff',
                      mb: 2,

                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://images.unsplash.com/photo-1514988081842-feeaeac260e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
                }}
            >
                <CssBaseline />

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={12}>
                        <Box
                            sx={{
                                position: 'relative',
                                py: '130px'


                            }}
                        >
                            <Typography component="h1" variant="h3" align="center" color="inherit" >
                                About Us
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Paper>


            {/* Second Section: Our Mission */}

            <Paper
                sx={{
                    position: 'relative',
                    borderRadius: 0,
                    color: '#fff',
                    backgroundColor: "#EEEEEE"

                }}
            >
                <CssBaseline />

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />


                <Grid container>
                    <Grid item md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: '30vh',
                                backgroundColor: '#414a4c',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h4" align="center" color="inherit">
                                OUR MISSION
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item md={7}>

                        <Box
                            sx={{
                                position: 'relative',
                                height: "30vh",
                                backgroundColor: '#EEEEEE',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <Typography variant="body1" color="black" sx={{ textAlign: 'justify', mx: 'auto', maxWidth: '90%', paddingLeft: '4px', paddingRight: '4px' }}>
                                We're determined to ensure that customers receive clothes that match what they saw in the ads, avoiding any disappointing surprises. With transparency and trust as our guiding principles, we collaborate closely with thrift stores to provide accurate descriptions, high-quality images, and precise measurements for each item. Our goal is to create a seamless and reliable shopping experience, building a community of satisfied customers who can confidently explore and purchase pre-loved clothing.
                            </Typography>

                        </Box>




                    </Grid>
                </Grid>
            </Paper>

            {/* Third section: Our Vision */}
            <Paper
                sx={{
                    position: 'relative',
                    borderRadius: 0,
                    color: '#fff',
                    backgroundColor: "#EEEEEE"

                }}
            >
                <CssBaseline />

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />


                <Grid container>
                    <Grid item md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: '30vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0,0,0,.25)',

                            }}
                        >
                            <Typography component="h1" variant="h4" align="center" color="inherit">
                                OUR VISION
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item md={7}>

                        <Box
                            sx={{
                                position: 'relative',
                                height: "30vh",
                                backgroundColor: '#EEEEEE',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <Typography variant="body1" color="black" sx={{ textAlign: 'justify', mx: 'auto', maxWidth: '90%', paddingLeft: '4px', paddingRight: '4px' }}>
                                We envision a platform that connects buyers and sellers, fostering trust and transparency. By promoting conscious buying decisions and ethical practices, we aim to redefine thrift stores as a fashionable and responsible choice. Through our community-driven approach, we aspire to create a positive and inclusive environment, driving a shift towards a more sustainable fashion industry.
                            </Typography>

                        </Box>




                    </Grid>
                </Grid>
            </Paper>

            {/* Fourth section: Our values */}

            <Paper
                sx={{
                    position: 'relative',
                    borderRadius: 0,
                    color: '#fff',
                    backgroundColor: "#EEEEEE",
                    mb:2


                }}
            >
                <CssBaseline />

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />


                <Grid container>
                    <Grid item md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: '30vh',


                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h4" align="center" >


                                OUR VALUES
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item md={7}>

                        <Box
                            sx={{
                                position: 'relative',
                                height: "30vh",
                                backgroundColor: '#EEEEEE',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <Typography variant="body1" color="black" sx={{ textAlign: 'justify', mx: 'auto', maxWidth: '90%', paddingLeft: '4px', paddingRight: '4px' }}>

                                Our values: sustainability, integrity, community, quality, empowerment, and innovation. We are committed to transforming thrift store shopping into a sustainable, trusted, and empowering experience that makes a positive impact on the fashion industry and our planet.

                            </Typography>

                        </Box>




                    </Grid>
                </Grid>
            </Paper>
            {/* Fifth section: Staff */}


            <Paper
                sx={{
                    position: 'relative',
                    borderRadius: 0,
                    color: '#fff',
                    backgroundColor: "#EEEEEE"

                }}
            >
                <CssBaseline />

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />



                    <Grid container>

                        <Grid item md={3}>


                            <Box
                                sx={{
                                    position: 'relative',
                                    height: '300px',
                                    backgroundColor: 'black',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60g"
                                    alt="Person"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%)',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        padding: '16px',
                                    }}
                                >
                                    <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>
                                        Peter Macharia
                                    </Typography>
                                    <Typography variant="subtitle1" color="white" sx={{ fontSize: '14px' }}>
                                        CEO Resale City
                                    </Typography>
                                </Box>
                            </Box>


                        </Grid>
                        <Grid item md={3}>


<Box
    sx={{
        position: 'relative',
        height: '300px',
        backgroundColor: 'black',
        overflow: 'hidden',
    }}
>
    <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Person"
        style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
        }}
    />
    <Box
        sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '16px',
        }}
    >
        <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>
            Andrew Mutheu
        </Typography>
        <Typography variant="subtitle1" color="white" sx={{ fontSize: '14px' }}>
            Business Operations Lead
        </Typography>
    </Box>
</Box>


</Grid>
<Grid item md={3}>


<Box
    sx={{
        position: 'relative',
        height: '300px',
        backgroundColor: 'black',
        overflow: 'hidden',
    }}
>
    <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Person"
        style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
        }}
    />
    <Box
        sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '16px',
        }}
    >
        <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>
            Maria Wangui
        </Typography>
        <Typography variant="subtitle1" color="white" sx={{ fontSize: '14px' }}>
            Customer Success Specialist
        </Typography>
    </Box>
</Box>


</Grid>
<Grid item md={3}>


<Box
    sx={{
        position: 'relative',
        height: '300px',
        backgroundColor: 'black',
        overflow: 'hidden',
    }}
>
    <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Person"
        style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
        }}
    />
    <Box
        sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '16px',
        }}
    >
        <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>
            Jenniffer Okumu
        </Typography>
        <Typography variant="subtitle1" color="white" sx={{ fontSize: '14px' }}>
            Tech Support
        </Typography>
    </Box>
</Box>


</Grid>


                        


                    </Grid>




                
            </Paper>
            <Footer/>
        </>
    )
}

export default About
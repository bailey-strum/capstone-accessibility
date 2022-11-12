import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import {useState} from "react";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
import Header from "../../Components/Header";



const HomeScreen = () => {
    const [regredirect, setRegRedirect] = useState(false);

    async function getStarted() {
       
        setRegRedirect(true);


    }


    if (regredirect) {
        return <Navigate to = {'/register'}/>;
    }


    return (
        <div>
            

            <div className="container">
                
                <Header/>

                <main>
                    <Box  display="flex" justifyContent="center" className="row" sx={{ justifyContent: 'space-between', pt: 8 }}>
                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                
                                height="400"
                                image={require('./../../Assets/images/p.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more perceivable idk
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('./../../Assets/images/o.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more operable idk
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 350}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('./../../Assets/images/u.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more, i forgot what u stands for
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('./../../Assets/images/r.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more robust
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>
                    

                    <Box
                        style={{
                            paddingTop: 100,
                            justifyContent: "center",
                            paddingBottom: 20

                        }}>
                        <Typography align = "center" >To learn more about accesibility with examples, quizes, and track your progress...</Typography>

                    </Box>
                    <Button
                        style={{
                            display: "flex",
                            margin: '0 auto',
                            padding: 20
                        }}
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => getStarted()}>
                        Get Started
                    </Button>
                </main>
                

            </div>

            
                
        </div>

    )
}

export default HomeScreen;
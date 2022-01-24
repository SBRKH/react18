import React, {Suspense, useEffect, useState, useTransition} from "react";
import {
    Avatar,
    Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Skeleton,
    Typography
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useQuery, useQueryErrorResetBoundary} from "react-query";
import {fetchUser, fetchUsers, fetchUsers2} from "../../api/queries";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const MainSuspense = () => {
    const {data} = useQuery("projects", fetchUsers);

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader avatar={
                <Avatar
                    sx={{bgcolor: "#3498db"}}>{data[0].lastName.substring(0, 1)}{data[0].firstName.substring(0, 1)}</Avatar>
            }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={`${data[0].lastName} ${data[0].firstName}`}
                        subheader={new Date().toDateString()}
            />
            <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1563008887-170b34916b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Paella dish"
            />
            <CardContent>
                <Typography>{data[0].city}</Typography>
            </CardContent>
        </Card>
    );
};

const MainSuspense2 = () => {
    const {data} = useQuery("projects2", fetchUsers2);

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader avatar={
                <Avatar
                    sx={{bgcolor: "#3498db"}}>{data[0].lastName.substring(0, 1)}{data[0].firstName.substring(0, 1)}</Avatar>
            }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={`${data[0].lastName} ${data[0].firstName}`}
                        subheader={new Date().toDateString()}
            />
            <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1563008887-170b34916b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Paella dish"
            />
            <CardContent>
                <Typography>{data[0].city}</Typography>
            </CardContent>
        </Card>
    );
};

export const MainSuspenseSkeleton = () => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader avatar={<Skeleton animation="wave" variant="circular" width={40} height={40}/>}
                        title={<Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{marginBottom: 6}}
                        />}
                        action={
                            <IconButton aria-label="settings" disabled={true}>
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        subheader={<Skeleton
                            animation="wave"
                            height={10}
                            width="40%"
                        />}
            />
            <Skeleton sx={{height: 190}} animation="wave" variant="rectangular"/>
            <CardContent>
                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
            </CardContent>
        </Card>
    );
}

const ErrorBoundaryCmp = ({resetErrorBoundary}) => {
    return (
        <Card sx={{width: 345, maxWidth: 345}}>
            <CardHeader title={<Typography color={"error"} variant={"h4"}>Oops...</Typography>}/>
            <CardContent
                sx={{display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: "column"}}>
                <ErrorOutlineIcon color={"error"} fontSize={"large"}/>
                <Typography color={"error"}>Une erreur est survenue....</Typography>
            </CardContent>
            <CardActions>
                <Button variant={"outlined"} onClick={resetErrorBoundary} size={"small"}>Ré-esssayer</Button>
            </CardActions>
        </Card>
    );
}


export const SuspenseView = () => {
    const {reset} = useQueryErrorResetBoundary();

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Suspense fallback={<MainSuspenseSkeleton/>}>
                    <MainSuspense/>
                </Suspense>
            </Grid>
            <Grid item xs={6}>
                <ErrorBoundary onReset={reset} fallbackRender={({resetErrorBoundary}) => (
                    <ErrorBoundaryCmp resetErrorBoundary={resetErrorBoundary}/>)}
                >
                    <Suspense fallback={<MainSuspenseSkeleton/>}>
                        <MainSuspense2/>
                    </Suspense>
                </ErrorBoundary>
            </Grid>
        </Grid>
    )
}
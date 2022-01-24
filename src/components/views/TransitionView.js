import {Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import React, {Suspense, useEffect, useState, useTransition} from "react";
import {fetchUser} from "../../api/queries";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {useQuery} from "react-query";
import {MainSuspenseSkeleton} from "./SuspenseView";

function getNextId(currId) {
    return currId === 4 ? 0 : currId;
}

const MainSuspense3 = ({ress}) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader avatar={
                <Avatar
                    sx={{bgcolor: "#3498db"}}>{ress.lastName.substring(0, 1)}{ress.firstName.substring(0, 1)}</Avatar>
            }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={`${ress.lastName} ${ress.firstName}`}
                        subheader={new Date().toDateString()}
            />
            <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1563008887-170b34916b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Paella dish"
            />
            <CardContent>
                <Typography>{ress.city}</Typography>
            </CardContent>
        </Card>
    );
};

const Grr = () => {
    const [id, setId] = useState(0);
    const {data, refetch} = useQuery("user", () => fetchUser(id));
    const [isPending, startTransition] = useTransition({timeoutMs: 3000});

    useEffect(() => {
        console.log("ress==", data);
    }, [data]);

    return (
        <Grid container>
            <Grid item xs={6}>
                <MainSuspense3 ress={data}/>
                <Button variant={"outlined"} size={"small"} disabled={isPending} onClick={() => {
                    startTransition(() => {
                        setId(getNextId(data.id));
                        refetch();
                    });
                }}
                >
                    Suivant
                </Button>
            </Grid>

        </Grid>
    )
}

export const TransitionView = () => {
    return (
        <Suspense fallback={<MainSuspenseSkeleton/>}>
            <Grr />
        </Suspense>
    );
}
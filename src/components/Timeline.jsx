import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import SchoolIcon from '@material-ui/icons/School';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddIcon from '@material-ui/icons/Add';
import CachedIcon from '@material-ui/icons/Cached';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <Fragment>
            
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="white">
                        2001
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="red">
                        <ChildCareIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        <b><font face="florencesansregular">Born</font></b>
                        </Typography>
                        <Typography><font face="florencesansregular">Born in Tecuci - The City of Mustard!</font></Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="white">
                        2015
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="">
                        <AddIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            <b><font face="florencesansregular">Red Cross Volunteer</font></b>
                        </Typography>
                        <Typography><font face="florencesansregular">Member of the organizing team for a First Aid contest.</font></Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="white">
                        2017
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="">
                        <AccessibilityNewIcon></AccessibilityNewIcon>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                    <b><font face="florencesansregular">ATT Tecuci Volunteer</font></b>
                        </Typography>
                        <Typography><font face="florencesansregular">Member of the design crew.</font></Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
            <TimelineOppositeContent>
                    <Typography variant="body2" color="white">
                        2019
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        
                        <Typography variant="h6" component="h1">
                        <b><font face="florencesansregular">Graduated High School</font></b> 
                        </Typography>
                        <Typography><font face="florencesansregular">Graduated "Calistrat Hogas" National College in Tecuci, where I studied Mathematics and Computer Science intensive.</font></Typography>
                        
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="white">
                        2019
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="">
                        <CachedIcon></CachedIcon>
                    </TimelineDot>
                    
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                    <b><font face="florencesansregular">Started Universitary Studies</font></b>
                        </Typography>
                        <Typography><font face="florencesansregular">Started studying Economic Informatics at the Bucharest Univeristy of Economic Studies.</font></Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            

        </Timeline>
        </Fragment>
    );
}
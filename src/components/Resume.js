import React from 'react'
import Container from '@material-ui/core/Container';
import resume from "../images/cv.png"
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop:"1em"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    all:{
        color:"#880e4f"
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    paper: {
        zIndex: 1,
        position: "relative",
        margin: theme.spacing(2),
        background: 'rgba(206,226,250,0.30)'
      },
  }));
export default function Resume() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
return (
  // <div style={ {background: 'rgba(206,226,250,0.5)',margin:"4em"}}>
    <Container maxWidth="sm" >
       <div>
          <div className={classes.wrapper}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <Paper elevation={1} className={classes.paper}>

                  <img src={resume} alt="" width="100%" />
                  <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.all}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>Profile</Typography>
                    <Typography className={classes.secondaryHeading}>Lobana Alarabi</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                    Profile details
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.all}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>Work Experience</Typography>
                    <Typography className={classes.secondaryHeading}>
                    Work Experience sec
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                    Work Experience details
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.all}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography className={classes.heading}>Technical Skills</Typography>
                    <Typography className={classes.secondaryHeading}>
                    Technical Skills second 
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                    Technical Skills details
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.all}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography className={classes.heading}>WorkShop</Typography>
                    <Typography className={classes.secondaryHeading}>
                    WorkShop second 
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                    WorkShop Details
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.all}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography className={classes.heading}>Education</Typography>
                    <Typography className={classes.secondaryHeading}>
                    Education second 
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                    Education Details
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
              </Paper>
            </Slide>
          </div>
       </div>
     </Container>
    // </div>
)
}

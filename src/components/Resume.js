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
import Card from 'react-bootstrap/Card'
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
                    <Card >
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          My name is Lobana Alarabi.A Web Designer Junior.I was born in Aleppo Syria,
                          and now living in Turkey.I studied computer engineering in Aleppo Unevirsity my specialize
                          in artificial intelligence. Programing is my life,keeping learning more and more.
                      </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted"> Female | 9/march/1990 | syrian</Card.Footer>
                      </Card>
                    
                    
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
                   Aleppo University, Teaching institute, A private Libyan school,Travel Agent

                    </Typography>
                    
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>

                      <Card className="m-2">
                        <Card.Header >Assistant Charge Affaires teaching aids –Full Time</Card.Header>
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          AT Mathematical Statistics Department <a href="https://alepuniv.edu.sy/view-faculty/college-of-science">College of Science</a> I taught several subjects for
                          first second third and forth year students,
                          Concepts of Computers,Pascal,Visual Basic and C++ subjects. I was
                          responsible for the preparation of practical section and make
                          examination for student on paper and computer in laboratory
                          supervised by a professor at faculty of science at university of Aleppo,
                          as a member of technical staff.
                      </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Aleppo-Syria(24/06/2014 - 30/12/2015)</Card.Footer>
                      </Card>
                      <Card className="m-2">
                        <Card.Header >Trainer at ITC Teaching institute</Card.Header>
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          Worked as a trainer in <a href="http://www.itc-center.com/">ITC</a> for two courses 
                          web design level for beginner course -HTML CSS JS- responsible for student graduation projects 
                          and secretary for women course (including ICDL).
                      </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Istanbul-turkey(as I am in Istanbul)</Card.Footer>
                      </Card>
                      <Card className="m-2">
                        <Card.Header >Sales Officer at Alghareb Travel Agency</Card.Header>
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          I work as a social media marketing – designer at <a href="http://www.alghareb-tourism.com/">Alghareb Agency</a> 
                          Website supervisor and article editor 
                          Ticket and hotel booking on IATI System ,Amadeus and other airlines systems also on
                          Travel Insurance systems.
                      </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Istanbul-turkey(24/06/2016)</Card.Footer>
                      </Card>
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
                    <Card>
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          Good command of Microsoft Visual studio, Sql server 2008, Matlab.
                          I training on webots ,sql server 2008.
                          I develop myself in Neural Network, fuzzy logic.
                      </Card.Text>
                        </Card.Body>
                      </Card>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.all}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography className={classes.heading}>WorkShop </Typography>
                    <Typography className={classes.secondaryHeading}>
                    Syria - Turkey 
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                    <Card>
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          <ul >
                            <li>Advanced c#</li>
                            <li>Coded Front End Web Development</li>
                            <li>Game design</li>
                            <li>Photoshop</li>
                            <li>Markting</li>
                          </ul>
                      </Card.Text>
                        </Card.Body>
                      </Card>
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
                    B.A Degree
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>

                    <Card>
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          B.A. Informatics engineering at the <a href="https://alepuniv.edu.sy/view-faculty/faculty-of-informatics-engineering">Aleppo University</a> with
                          eleventh degree with competence in Artificial Intelligence with
                          average 80.77% 
                      </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">(2008 - 2013)</Card.Footer>
                      </Card>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>




                <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.all}>
                  <ExpansionPanelSummary>
                    <Typography className={classes.heading}>Languages</Typography>
                    <Typography className={classes.secondaryHeading}>
                    Arabic native - English Advanced - Turkish intermediate
                    </Typography>
                  </ExpansionPanelSummary>
                  
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

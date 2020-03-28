import React from 'react'
import resume from "../images/cv.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Container from 'react-bootstrap/Container'
import "../App.css"
export default function Resume() {
  
return (
  <Container fluid="md" >
       <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <Paper elevation={1} className="paper">
                  <div className="d-flex justify-content-center">
                    <img src={resume} alt="resume" height="70%" width="60%" />
                  </div>


                  <div className="container" style={{margin:"1em"}}>
                      <div className="row" style={{margin:"1em"}}>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-4">
                            <h3 className="colorChange">Profile</h3>
                            <span className="colorChange">Female | 9/march/1990 | syrian</span>
                            <p className="colorChange fontMobile">My name is Lobana Alarabi.A Web Designer Junior.I was born in Aleppo Syria,
                          and now living in Turkey.I studied computer engineering in Aleppo Unevirsity my specialize
                          in artificial intelligence. Programing is my life,keeping learning more and more..</p>
                          </div>
                        </div>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-2">
                            <h3 className="colorChange">Technical Skills</h3>
                            <span className="colorChange">Female | 9/march/1990 | syrian</span>
                            <p className="colorChange fontMobile">Good command of Microsoft Visual studio, Sql server 2008, Matlab.
                          I training on webots ,sql server 2008.
                          I develop myself in Neural Network, fuzzy logic.</p>
                          </div>
                        </div>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-3">
                            <h3 className="colorChange">WorkShop</h3>
                            <span className="colorChange">Female | 9/march/1990 | syrian</span>
                            <p className="colorChange fontMobile"><ul >
                            <li>Advanced c#</li>
                            <li>Coded Front End Web Development</li>
                            <li>Game design</li>
                            <li>Photoshop</li>
                            <li>Markting</li>
                          </ul></p>
                          </div>
                        </div>
                      </div>


                  
                      <div className="row" style={{margin:"1em"}}>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-1">
                            <h3 className="colorChange">Work Experience</h3>
                            <span className="colorChange">Assistant Charge Affaires–Full Time</span>
                            <p className="colorChange fontMobile">AT Mathematical Statistics Department <a href="https://alepuniv.edu.sy/view-faculty/college-of-science">College of Science</a> I taught several subjects for
                          first second third and forth year students,
                          Concepts of Computers,Pascal,Visual Basic and C++ subjects. I was
                          responsible for the preparation of practical section and make
                          examination for student on paper and computer in laboratory
                          supervised by a professor at faculty of science at university of Aleppo,
                          as a member of technical staff. <span>Aleppo-Syria(24/06/2014 - 30/12/2015)</span></p>
                          </div>
                        </div>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-1">
                            <h3 className="colorChange">Work Experience</h3>
                            <span className="colorChange">Trainer at ITC Teaching institute</span>
                            <p className="colorChange fontMobile">Worked as a trainer in <a href="http://www.itc-center.com/">ITC</a> for two courses 
                          web design level for beginner course -HTML CSS JS- responsible for student graduation projects 
                          and secretary for women course (including ICDL)<span>Istanbul-turkey(as I am in Istanbul)</span>.</p>
                          </div>
                        </div>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-1">
                            <h3 className="colorChange">Work Experience</h3>
                            <span className="colorChange">Sales Officer at Alghareb Travel Agency</span>
                            <p className="colorChange fontMobile"> I work as a social media marketing – designer at <a href="http://www.alghareb-tourism.com/">Alghareb Agency</a> 
                          Website supervisor and article editor 
                          Ticket and hotel booking on IATI System ,Amadeus and other airlines systems also on
                          Travel Insurance systems <span>present</span>.</p>
                          </div>
                        </div>
                      </div>




                      <div className="row" style={{margin:"1em"}}>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-6">
                            <h3 className="colorChange">Education</h3>
                            <span className="colorChange"> B.A Degree (2008 - 2013)</span>
                            <p className="colorChange fontMobile"> B.A. Informatics engineering at the <a href="https://alepuniv.edu.sy/view-faculty/faculty-of-informatics-engineering">Aleppo University</a> with
                          eleventh degree with competence in Artificial Intelligence with
                          average 80.77% </p>
                          </div>
                        </div>
                        <div className="col-md-4 mobileres">
                          <div className="cardR cardR-5">
                            <h3 className="colorChange">Languages</h3>
                            <span className="colorChange"></span>
                            <p className="colorChange fontMobile">Arabic native - English Advanced - Turkish intermediate</p>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                          <div className="cardR cardR-3">
                            <h3 className="colorChange">Theming</h3>
                            <span className="colorChange">Sales Officer at Alghareb Travel Agency</span>
                            <p className="colorChange"> I work as a social media marketing – designer at <a href="http://www.alghareb-tourism.com/">Alghareb Agency</a> 
                          Website supervisor and article editor 
                          Ticket and hotel booking on IATI System ,Amadeus and other airlines systems also on
                          Travel Insurance systems <span>present</span>.</p>
                          </div>
                        </div> */}
                      </div>


                    </div>
              </Paper>
            </Slide>
         
</Container>
)
}

import React from 'react'
import { 
    HeroContainer, AboutContainer,AboutH1, AboutH2,AboutH3,AboutP,Underline,
    AboutMeContainer,AboutMeH1,AboutDetailContainer,AboutPicture,AboutDetail,AboutNumber,AboutItem,DetailP,SpanP,GridContainer, LanguageContainer
} from './HeroElements' 
import Fade from 'react-reveal/Fade';

import Profil from 'C:/Users/fragm/Documents/cv websiTE/idriss/src/images/profile.png';

const HeroSection = () => {
    return (
        <div>
            <HeroContainer id='Home'>
            <AboutContainer className='AboutContainer'>
                <Fade left duration={1000}>
                <AboutH1>Hi, my name is</AboutH1>
                </Fade>
                <Fade right duration={1800}>
                <AboutH2>Taguine Idriss.</AboutH2>
                </Fade>
                <Fade left duration={1500}>
                <AboutH3>I create things for the web.</AboutH3>
                </Fade>
                <Fade left cascade>
                <AboutP>I'm a Junior Developper trying to specialize in Front End Development.<br /> Currently i'm focused on giving the best digital experiences to users.</AboutP>
                </Fade>
            </AboutContainer>
            
            <AboutMeContainer>            
            <Fade top duration={1200}><AboutMeH1>About Me <Fade left duration={1600}><Underline></Underline></Fade> </AboutMeH1></Fade>
                <AboutDetailContainer className='Hello'>
                    <AboutDetail>
                    <Fade left duration={2200}><DetailP>Hello ! My name is Idriss and i enjoy creating things ! My interest in Web Development started few years ago. It materialized in 2021 when i started my training at the IT-Akadmy in Lyon, France.
                        <br /><br />Fast-forward to today, I'm actively <SpanP> looking for an internship </SpanP>to get my degree and start using my <SpanP>newly acquired set of skills</SpanP> in a company.
                        <br /><br />I'm also a MMA Fighter/Boxing Trainer on my Freetime.
                        </DetailP></Fade>
                    </AboutDetail>
            <Fade top duration={2200}><AboutPicture><img src={Profil}alt='profil' style={{height:300,marginLeft:150, }} /></AboutPicture></Fade>
                </AboutDetailContainer>
                <Fade right duration={2000}><LanguageContainer>
                <GridContainer>
                    <AboutNumber>01. <AboutItem>JavaScript</AboutItem></AboutNumber>
                    <AboutNumber>02. <AboutItem>React</AboutItem></AboutNumber>                            
                    <AboutNumber>03. <AboutItem>Node.js</AboutItem></AboutNumber>                        
                </GridContainer>
                <GridContainer>
                    <AboutNumber>04. <AboutItem>Flutter</AboutItem></AboutNumber>
                    <AboutNumber>05. <AboutItem>PHP</AboutItem></AboutNumber>                            
                    <AboutNumber>06. <AboutItem>WordPress</AboutItem></AboutNumber>                        
                </GridContainer>
                </LanguageContainer></Fade>
            </AboutMeContainer>
            </HeroContainer>

        </div>
    )
}

export default HeroSection

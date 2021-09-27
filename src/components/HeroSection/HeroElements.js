import styled from 'styled-components';


export const HeroContainer = styled.div`
    background: #0a192f;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    height: 100%;
    width: 100%;
    z-index:0;
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    font-family: Roboto Mono;
`
//LeftNav //
export const LeftContainer = styled.div`
    height:100%;
    width:15%;
`

export const LeftNetwork = styled.div`
    height:837px;
    width:100%;
`

//End LeftNav//

//About Container //
export const AboutContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    height:920px;
    width:70%;
`
export const AboutH1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    font-family: 'Roboto Mono';
    font-size: 15px;
    margin: 0;
    word-spacing: 3px;
    color:#64ffda;
`
export const AboutH2 = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-family: Roboto Mono;
    font-size: 70px;
    font-weight:300;
    margin: 0;
    color:#ccd6f6;

`
export const AboutH3 = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-family: Roboto Mono;
    font-size: 70px;
    font-weight: 300;
    margin: 0;
    line-height:1;
    color:#7d87a2;
`
export const AboutP = styled.p`

    color:#8892b0;
`


//End MailNav//

//AboutMe//

export const AboutMeContainer = styled.div`
    display:block;
    width:65%;
`

export const AboutMeH1 = styled.div`
    font-family: 'Roboto Mono';
    font-size: 32px;
    color:white;
    height:80px;
`

export const Underline = styled.div`
    height:1px;
    width:25%;
    background: #8892b0;
`

export const AboutDetailContainer = styled.div`
    display:flex;
    width:100%;
`

export const AboutPicture = styled.div`
    width:50%;
`
export const AboutDetail = styled.div`
    height:100%;
    width:70%;
`
export const DetailP = styled.p`
    color:#8892b0;
    font-size:14px;
`

export const LanguageContainer = styled.div`
    display:flex;
    width: 30%;
`
export const GridContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    line-height:5px;
`
export const AboutNumber = styled.p`
    display:flex;
    font-size: 13px;
    color:#fff;
    word-spacing:10px;
    line-height:5px;
` 

export const AboutItem = styled.span`
    font-size: 13px;
    color: #8892b0;
    line-height:5px;
`

export const ProfileImg = styled.img`
    background-image: url('C:/Users/fragm/Documents/cv websiTE/idriss/src/images/profile.png');
`
//End AboutMe//


//Special Effect//
export const SpanP = styled.span`
    color:#64ffda;
    &:hover{
     }
`
//End Special Effect//
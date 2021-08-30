import styled, { createGlobalStyle } from 'styled-components';

// 전역 적용 css
const GlobalStyle = createGlobalStyle`
    html {
        background-color: #fefefe;
    }
`

// 화면 최상위 컨테이너. 단순 마진 패딩
const Container = styled.div`
    position: relative;
    width: 1000px;
    margin: 0 auto;
    margin-top: 50px;
    box-sizing: border-box;
    

    @media only screen and (max-width: 1000px) {
        width: 100%;
        padding: 0 50px;
    }

    @media only screen and (max-width: 384px) {
        padding: 0px;
        margin-top: 10px;
    }
`

const Post = styled.div`
    position: relative;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    min-height: 300px;
`

const SkillBadge = styled.div`
    position: relative;
    display: inline-block;
    flex-basis: 150px;
    flex-shrink: 0;
    width: 150px;
    height: 200px;
    background-color: #f2f2f2;
`

const Profile = styled.div`
    display: flex;
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    gap: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media only screen and (max-width: 970px) {
        flex-direction: column;
    }
`

export { Container, Post, SkillBadge, Profile };
export default GlobalStyle;
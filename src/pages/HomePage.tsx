import React from "react";
import {HomePageContainer, StyledLink} from "./HomePageStyles";

function Home() {
    return(
            <HomePageContainer>
                <span className="main-content">방금 먹은 식사의</span>
                <span className="main-content">영양성분을</span>
                <span className="main-content">분석해 드려요 </span>
                <StyledLink to="/userinfo">
                    <span className="start-button">분석 시작하기!</span>
                </StyledLink>
            </HomePageContainer>
    )
};

export default Home;
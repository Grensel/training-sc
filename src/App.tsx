import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBox } from "./style-components/components/app-box/AppBox";
import { Body } from "./style-components/components/body/Body.style";
import { Card } from "./style-components/components/card/Card.styled";
import { CardImage } from "./style-components/components/card/CardImage.styled";
import { CardTitle } from "./style-components/components/card/CardTitle.styled";
import { CardDescription } from "./style-components/components/card/CardDescription.styled";
import { CardButtons } from "./style-components/components/card/CardButtons.styled";
import { CardButton } from "./style-components/components/card/CardButton.styled";
import Rectangle from "./assets/image/Rectangle.svg";
import { CardContent } from "./style-components/components/card/CardContent";

function App() {
  return (
    <AppBox>
      <header></header>
      <Body>
        <Card>
          <CardImage src={Rectangle} alt="img" />
          <CardContent>
            <CardTitle>Headline</CardTitle>
            <CardDescription>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            </CardDescription>
            <CardButtons>
              <CardButton btnType={"primary"}>See more</CardButton>
              <CardButton btnType={"outline"}>Save</CardButton>
            </CardButtons>
          </CardContent>
        </Card>
      </Body>
    </AppBox>
  );
}

export default App;

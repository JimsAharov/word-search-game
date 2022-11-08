import React, { useEffect, useRef, useState } from "react";
import { Game } from "../Game/Game";
import {
  App,
  Badge,
  BlockTitle,
  Button,
  Icon,
  Link,
  List,
  ListItem,
  Navbar,
  NavLeft,
  NavRight,
  NavTitle,
  Page,
  Popup,
  Toolbar,
  View,
  Views,
} from "framework7-react";
import { StatsModal } from "../Modals/StatsModal/StatsModal";
import { EndGameModal } from "../Modals/EndGameModal/EndGameModal";
import { SettingsModal } from "../Modals/SettingsModal/SettingsModal";
import { Print } from "../Game/Print";

function Application() {
  
  return (
    <App theme="auto" name="My App" id="com.demoapp.test">
      {/* Your main view, should have "main" prop */}
      <View main>
        <Page bgColor={"lightblue"} colorTheme="white">
          <div title={"LOGO"}>
            <NavLeft>
              <Link popupOpen={".demo-popup-swipe"}>
                <Icon f7={"chart_bar_alt_fill"} />
              </Link>
            </NavLeft>

            <NavRight>
              <Link popupOpen={".demo-popup-settings"}>
                <Icon f7={"bars"}></Icon>
              </Link>
            </NavRight>
          </div>
          <Game />
          <StatsModal />
          <EndGameModal time={1000000000} bestTime={80000}/>
          <SettingsModal/>
          <Print/>
        </Page>
      </View>
    </App>
  );
}

export default Application;

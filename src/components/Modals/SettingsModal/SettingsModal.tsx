import React from "react";

import { useReactToPrint } from 'react-to-print';



import {
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Toggle,
  Button,
  Icon,
  Link,
  Page,
  Popup,
  View,
  Views,
  Menu,
  MenuItem,
  MenuDropdown,
  MenuDropdownItem,
} from "framework7-react";
import styles from "./SettingsModal.module.scss";
import { Print } from "../../Game/Print";

export function SettingsModal() {
  return (
    <Popup className="demo-popup-settings" id={styles.settingsPopup}>
      <Page className="padding">
      <div className="display-flex justify-content-end">
        <Link popupClose>
          <Icon f7={"multiply"}></Icon>
        </Link>
        </div>
        {/* <Views tabs>
        <View id="tab-1" main tab tabActive > */}
        {/* <div className={styles.settingsPanel}> */}
          {/* <div className={styles.settingsScreen}> */}
            {/* <div className={styles.settingsContent}> */}
              {/* <span className={styles.settingsClose}>
                <span className={styles.settingsCloseIcon}></span>
              </span> */}
              <h2 className={styles.settingsHdr}>Settings</h2>
              <div className={styles.settingsListScroller}>
                <div className={styles.settingsList}>
                  <span className={styles.settingsDesc}>
                    Display the game timer.
                  </span>
                  <div className={styles.settingsListItem}>
                    <label className={styles.settingsText}>Show Timer</label>
                    <Toggle defaultChecked color="blue"></Toggle>

                    <label className={styles.settingsLabel}></label>
                  </div>
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
        {/* </div>
       */}
      {/* </View>
      </Views> */}
      <div>
      <button onClick={() => window.print()}>PRINT</button>
      
    </div>
      </Page> 
    </Popup>
    
  );
}

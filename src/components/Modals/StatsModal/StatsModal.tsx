import React from "react";
import { Button, Icon, Link, Page, Popup, View, Views, Menu, MenuItem, MenuDropdown, MenuDropdownItem  } from "framework7-react";
import styles from "./StatsModal.module.scss"
import { Chart } from "../../Chart/Chart";


export function StatsModal() {
  return (
    <Popup className="demo-popup-swipe" swipeToClose>
      <Page className="padding">
        <div className="display-flex justify-content-end">
          <Link popupClose>
            <Icon f7={"multiply"}></Icon>
          </Link>
        </div>

        <div className="display-flex justify-content-center align-items-center">
          <Views tabs>
            <View id="tab-1" main tab tabActive >
              <Button tabLink={"#tab-2"} className={styles.buttonChoice}>◀  Stats  ▶</Button>
              <div className={styles.tabContent}>
                    
                    <Menu className={styles.statsMenu}>
                        <MenuItem className={styles.statsMenuItem} text="EASY" dropdown>
                            <MenuDropdown className={styles.statsMenuDropdownContent} center contentHeight="200px">
                              <MenuDropdownItem href="#" text="EASY" />
                              <MenuDropdownItem href="#" text="MEDIUM" />
                              <MenuDropdownItem href="#" text="HARD" />
                              <MenuDropdownItem href="#" text="EXPERT" />
                              <MenuDropdownItem href="#" text="NUMBERS" />
                            </MenuDropdown>
                        </MenuItem>
                    </Menu>
                    

                    <div className={styles.statsTableCon}>
                      <table className={styles.statsTable}>
                        <thead className={styles.statsTableHead}>
                          <tr className={styles.statsTableTr}>
                            <th className={'statsTh'}>
                              <span className={styles.statsThHdr}>Games</span>
                            </th>

                            <th className={"statsTh"}>
                              <span className={styles.statsThHdr}>Best</span>
                            </th>

                            <th className={"statsTh"}>
                              <span className={styles.statsThHdr}>Average</span>
                            </th>
                          </tr>
                        </thead>
                      
                        <tbody>
                          <tr className={styles.statsTableTr}>
                            <td className={styles.statsTd}>0</td>
                            <td className={styles.statsTd}>-</td>
                            <td className={styles.statsTd}>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div> 
                <div className={styles.statsChartLegendCon}>
                   <div className={styles.statsChartLegend}>
                        <div className={styles.statsChartLegendHdr}>
                          <span>Average </span>
                          <span className={styles.statsChartType}>Time</span>
                        </div>
                        <div className={styles.statsChartLegendDetails}>
                            <span className={styles.statsChartLegendDaily}></span>
                            <span> Daily </span>
                            <span className={styles.statsChartLegendLifetime}></span>
                            <span> Lifetime</span>
                         </div>
                     </div>
                  </div>
                  <Chart/>
                  <div className={styles.statsBottom}>
                    <input className={styles.statsResetBtn} type="button" value="Reset"/>
                 </div>
            </View>
            <View id="tab-2" tab>
              <Button tabLink={"#tab-1"} className={styles.buttonChoice}>◀  Achievements  ▶</Button>
              <div className={styles.statsAchievementsScroller}>
                <ul className={styles.statsAchievementsList}>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                    <li className={styles.statsAItem}>
                      <div className={styles.statsAProgress}>
                          <div className={styles.statsAIconTrue}>
                              <div className={styles.trophyStemTop}></div>
                              <div className={styles.trophyStemMiddle}></div>
                              <div className={styles.trophyStemBottom}></div>
                              <div className={styles.trophyStemBase}></div>
                              <div className={styles.trophyHandle}></div>
                              <div className={styles.trophyCup}></div>
                          </div>
                          <div className={styles.statsAPct}>100%</div>
                      </div>
                      <div className={styles.statsAAbout}>
                        <h5 className={styles.statsATitle}>Solve An Easy Puzzle</h5>
                        <p className={styles.statsADesc}>Solve an easy puzzle without using hint.</p>
                      </div>
                    </li>
                </ul>
              </div>
              <div className={styles.statsBottom}><input className={styles.statsResetBtn} type="button" value="Reset"/></div>
            </View>
          </Views>
        </div>
      </Page>
    </Popup>
  );
}

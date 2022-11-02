import React from "react";
import styles from "./EndGameModal.module.scss";
import {
  Button,
  Col,
  Icon,
  Link,
  Page,
  Popup,
  Row,
  View,
  Views,
} from "framework7-react";

type EndGameModalType = { time: number; bestTime: number };

export function EndGameModal({ time, bestTime }: EndGameModalType) {
  function msToTime(duration: number) {
    let seconds: number | string = Math.round((duration / 1000) % 60),
      minutes: number | string = Math.floor((duration / (1000 * 60)) % 60),
      hours: number | string = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (hours !== "00") {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  return (
    <Views>
      <View>
        <div id="endGamePanel" className={styles.showPanel}>
          <div className={styles.endGameContent}>
            <span className={styles.congratsMsg}>Great Going!</span>
            <span className={styles.congratsTimeMsg}>New Best Time!</span>
            <table className={styles.endGameTimes}>
              <tbody>
                <tr>
                  <td className={styles.endGameTimeLbl}>Time</td>
                  <td className={styles.endGameTime}>{msToTime(time)}</td>
                </tr>
                <tr>
                  <td className={styles.endGameTimeLbl}>Best</td>
                  <td className={styles.endGameTime}>{msToTime(bestTime)}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.endGameBtns}>
              <Row>
                <Col>
                  <Button className={styles.newGameBtn} large fill>
                    New Game
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className={styles.takeSurveyBtn} large fill>
                    Try a Survay
                  </Button>
                </Col>
              </Row>
              {/* <input id="newGameBtn" type="button" value="New Game" />
              <input id="takeSurveyBtn" type="button" value="Try A Survey" /> */}
            </div>
          </div>
        </div>
      </View>
    </Views>
  );
}

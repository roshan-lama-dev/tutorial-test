import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assest/img/header-img.svg";
export const Banner = () => {
  // loop number indicates the index which number is being displayed.
  const [loopNum, setLoopNum] = useState(0);
  // to determine if the word is being typed out or being deleted. it set to false because we start by typing in the words
  const [isDeleting, setIsdDeleting] = useState(false);
  // words to be displayed
  const toRotate = ["Web developer", "Web designer", "Ui/Ux Designer"];

  // this to let the component know which text is being displayed at the moment
  const [text, setText] = useState("");

  // this lets the component know how much time passes between one extra letter is being typed out
  const period = 2000;

  // we use delta to determine how fast does one letter comes after the another
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // couldnot understand this part of the code
  // this function is created to let the
  useEffect(() => {
    // delta will be the interval how fast the tick is being fired off
    let ticker = setInterval(() => {
      tick();
    }, delta);
    // on component unmount we need to clear the interval
    return () => {
      clearInterval(ticker);
    };
    // we want to run this function whenever the text gets updated
  }, [text]);

  const tick = () => {
    // i would be the index as to what text we are currently picking

    // since we only have three element in the array and want to go back to the first one. we use modulo here for this purpose as the this gives us the reminder of the operation
    let i = loopNum % toRotate.length;

    // fulltext will contain the current text
    let fullText = toRotate[i];

    // so if the current state is deleteing then get the one letter less than the current letter otherwise we will add one more letter than the current letter
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    // we update the state with our updated text
    setText(updateText);

    // udpate the delta and compate to previous delta and cut in half
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    // check if we are finished typing out the text
    if (!isDeleting && updateText === fullText) {
      setIsdDeleting(true);
      setDelta(period);
    }
    // check if we are done deleteing the text then we need to move
    else if (isDeleting && updateText === "") {
      setIsdDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome</span>

            <h1>
              {`Hi I'm webdecode `} <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              hic quod amet id, consectetur, quae ab officia aliquid eveniet
              incidunt impedit maiores neque unde est vero commodi, totam
              perferendis laboriosam!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

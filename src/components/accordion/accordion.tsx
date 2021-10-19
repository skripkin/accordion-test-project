import React, { useEffect, useRef, useState } from 'react';
import Icon from "../icon";
import { useHandleAccordionOpened } from './accordion-model';
import { Container } from "./styled";

export interface IProps {
  title: string;
  description: string | any;
};

const Accordion = ({ title, description }: IProps) => {
  //Открывашку этого компонента пришлось писать на чистом JS для того чтоб добавить плавную анимацию
  const [contentHeight, setContentHeight] = useState(0);
  const header = useRef(null);

  const handleAccordionOpened = useHandleAccordionOpened({
    headerElement: header,
    contentHeight,
    title
  });

  useEffect(() => {
    const content: HTMLElement | null = document.getElementById(
      "accordion__dropdown-" + title
    );

    if (content) {
      setContentHeight(content.clientHeight);
      content.style.height = "0px";
    }
  }, [title]);

  return (
    <Container>
      <div className="accordion">
        <div
          ref={header}
          onClick={handleAccordionOpened}
          className="accordion__header">

          {title}

          <div className="accordion__minus"><Icon type="Arrow" rotate={true}/></div>
          <div className="accordion__plus"><Icon type="Arrow" rotate={false}/></div>
        </div>

        <div
          id={`accordion__dropdown-${title}`}
          className={`accordion__dropdown`}
        >
          <div className="accordion__dropdown-text-wrapper">
            <p className="accordion__dropdown-text">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Accordion;

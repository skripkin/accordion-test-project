interface IModel {
  headerElement: React.MutableRefObject<null>;
  contentHeight: number;
  title: string;
}

export const useHandleAccordionOpened = ({
  headerElement,
  contentHeight,
  title
}: IModel) => {
  return () => {
    document.querySelectorAll<HTMLElement>('.accordion__header').forEach(item =>
      item.classList.remove('accordion__header_open')
    );
  
    const allAccordions = document.querySelectorAll<HTMLElement>('.accordion__dropdown');
    allAccordions.forEach(item => {
      item.style.height = '0px';
    });
  
    const content = document.getElementById("accordion__dropdown-" + title);
  
    if (content) {
      if (content.clientHeight === 0) {
        content.style.height = contentHeight + "px";
        // @ts-ignore
        headerElement.current?.classList.add('accordion__header_open');
      } else {
        content.style.height = "0px";
        // @ts-ignore
        headerElement.current?.classList.remove('accordion__header_open');
      }
    }
  }
};

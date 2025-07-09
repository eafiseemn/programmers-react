import LayoutBox from "./LayoutBox";


function EventPropagation() {

  // closure 형태
  const handleClick = (color:string) => {
    return (e:React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      console.log('click', color, e.target);
    }
  }

  return (
    <details open>
      <summary>
        <b>이벤트 전파 & 기본 동작 방지</b>
      </summary>
      <LayoutBox onClick={handleClick("cyan")} style={styles.cyan} title="레이아웃 박스" aria-label="레이아웃 박스">
        <LayoutBox onClick={handleClick("magenta")} style={styles.magenta} title="레이아웃 박스" aria-label="레이아웃 박스">
          <LayoutBox onClick={handleClick("yellow")} style={styles.yellow} title="레이아웃 박스" aria-label="레이아웃 박스">
          </LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  )
}

export default EventPropagation

const styles = {
  cyan: { "--color": "var(--cyan)" },
  magenta: { "--color": "var(--magenta)" },
  yellow: { "--color": "var(--yellow)" },
};
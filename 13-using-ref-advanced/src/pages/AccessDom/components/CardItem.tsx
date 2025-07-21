import type { MovieInfo } from "../type"
import S from '../style.module.css'
import VanillaTilt from "vanilla-tilt";
import { TILT_CONFIG } from "./tiltConfig";
import { useRef } from "react";

interface Props {
  item: MovieInfo;
  popup: boolean;
}

function CardItem({item, popup}:Props) {
  const { href, label, images } = item;
  const titleRef = useRef<HTMLParagraphElement | null>(null);

  const refCallback = (el:HTMLAnchorElement) => {
    // ref에는 함수도 전달 가능
    // ref={callback(el)} = 현재 ref로 잡힌 대상 (DOMElementNode)
    // 실제 DOM 요소 노드에 접근 가능
    // console.log(el);
    VanillaTilt.init(el, TILT_CONFIG);
  }

  const cardClassNames = `${S.card} ${popup ? S.popup : ''}`.trim();
  // tailwind twMerge / clsx / cva

  // 카드에 마우스 올렸을 때 label이 보이게
  const handleEnter = () => {
    const title = titleRef.current!;
    title.style.opacity = "1";
    
  }

  // 카드에서 마우스 떠났을 때 label이 안보이게
  const handleLeave = () => {
    const title = titleRef.current!;
    title.style.opacity = "0";
  }

  return (
    <a 
      ref={refCallback}
      href={href}
      title={label}
      aria-label={label} 
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      <figure className={cardClassNames}>
        <div className={S.wrapper}>
          <img src={images.src} alt="" />
        </div>
        <p ref={titleRef}>{label}</p>
        <img className={S.character} src={images.character} alt="" />
      </figure>
    </a>
  )
}
export default CardItem
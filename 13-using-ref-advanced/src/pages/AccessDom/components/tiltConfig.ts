import type { TiltOptions } from "vanilla-tilt";

export const TILT_CONFIG:TiltOptions = {
  reverse: true,  // 기울이는 방향 변경
  max: 15,        // 최대 기울기(deg)
  startX: 0,     // x축의 시작 기울기 (deg)
  startY: 0,     // y축의 시작 기울기 (deg)
  perspective: 1000,  // 값이 낮을수록 물체와 더 가까이 보임 (기울기가 심해짐)
  scale: 1.2,    // enter/exit 값이 커짐 / 작아짐
  speed: 600,    // enter/exit 전환 속도
  transition: true,   // enter/exit 전환 시 transition 효과 적용
  axis: null, // x축 | y축 활성화 (null = 양쪽 모두)
  easing: "cubic-bezier(.03,.98,.52,.99)",
  glare: false,   // 카드 빛나게 하는 효과
}
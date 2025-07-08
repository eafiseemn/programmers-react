import isTrueOrFalse from "@/utils/isTrueOrFalse";

export const statusMessage:StatusMessage[] = [
  '⌛️ 대기',
  '⏳ 로딩 중...',
  '🥳 로딩 성공!',
  '😵 로딩 실패'
]

export const imageType:ImageType[] = [
  'react',
  'vite',
  'kakao talk',
  'next.js'
]

export const isShowReactImage:boolean = isTrueOrFalse();
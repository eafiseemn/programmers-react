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

export const reactLibrary:ReactLibrary = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript Library',
  license: 'MIT'
}

export const statusMessageWithId:StatusMessageWithId[] = [
  { id: 'message-xyz', message: '🥹 대기' },
  { id: 'message-air', message: '🧐 로딩 중...' },
  { id: 'message-ckd', message: '🥳 로딩 성공!' },
  { id: 'message-eid', message: '😵 로딩 실패' }
]
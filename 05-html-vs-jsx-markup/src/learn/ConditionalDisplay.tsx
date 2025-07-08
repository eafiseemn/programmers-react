interface Props {
  isShowImage: boolean;
}

function ConditionalDisplay({isShowImage}:Props) {
  return (
    <>
      <dt>조건부 표시 (Conditional Display)</dt>
      <dd>
        <p>표시(Display) 여부에 따라 이미지가 화면에 감춰지거나 표시됩니다.</p>
        <picture hidden={isShowImage}>
          <source srcSet="/react/react.avif" type="image/avif" />
          <source src="/react/react.webp" type="image/webp" />
          <img src="/react/react.png" alt="React" height={40} />
        </picture>
      </dd>
    </>
  )
}

export default ConditionalDisplay

// Vue 에서 요소의 표시 여부를 토글하는 v-show 와 유사
// 주로 animation, animation을 사용하는 popup 등에 사용
// 보안이 필요한 내용은 조건부 표시로 만들면 안됨 -> 조건부 렌더링으로만 처리
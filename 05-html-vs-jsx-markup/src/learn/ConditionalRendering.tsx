import reactImagePath from "@/assets/react.svg?url";
import kakaoTalkImagePath from "@/assets/kakao-talk.svg?url";
import nextJsImagePath from "@/assets/next-js.svg?url";
import viteImagePath from "@/assets/vite.svg?url";
import getRandom from "@/utils/getRandom";
import isTrueOrFalse from "@/utils/isTrueOrFalse";
// 동적 자산인 svg를 가져올 때는 ?url 형태로 가져오도록 권장 (이미지가 깨지지 않도록)

interface Props {
  imageType: ImageType[];
}

function ConditionalRendering({imageType}:Props) {
  // let iconPath = `@/assets/${imageType}.svg?url`;
  let iconPath = '';

  const imageInput = imageType[getRandom(imageType.length)]
  
  switch(imageInput.toLowerCase().trim()) {
    case 'react':
      iconPath = reactImagePath;
      break;
    case 'kakao talk':
      iconPath = kakaoTalkImagePath;
      break;
    case 'next.js':
      iconPath = nextJsImagePath;
      break;
    case 'vite':
      iconPath = viteImagePath;
      break; 
    default:
      console.error('이미지 타입이 일치하지 않습니다.');
  }

  const tf = isTrueOrFalse();

  // const spinnerOrVite = imageInput === 'vite' ?
  const spinnerOrLogo = tf ?
    (<img src="/icons/spinner.svg" alt="로딩 중..."></img>) :
    (<img src={iconPath} alt="vite 로고" />)
            
  return (
    <>
      <dt>조건부 렌더링 (Conditional Rendering) ({tf ? "스피너 표시" : "로고" })</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          <img src={iconPath} alt="" />
          <p>{imageInput}</p>
        </div>
      </dd>
      <dd>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">
          { spinnerOrLogo }
        </div>
      </dd>
    </>
  )
}

export default ConditionalRendering
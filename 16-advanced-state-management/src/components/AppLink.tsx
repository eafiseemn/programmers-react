import tw from "@/utils/tw";
import { memo } from "react";
// import { Helmet } from "@dr.pogodin/react-helmet";

/* 
외부 사이트(external link)는 보통 현재 페이지를 유지한 채 새 탭에서 사이트를 열어주는게 국룰 

noopener
새로 열린 탭에서 window.opener로 원래 페이지에 접근하는걸 차단
이걸 안 넣으면 외부 사이트가 원래 페이지를 조작할 수 있음 (피싱, 리다이렉트 공격 취약)

noreferrer
브라우저가 현재 페이지의 URL을 referrer로 외부 사이트에 보내지 않음 
내가 어디서 이 링크를 클릭해서 들어왔는지 외부 사이트가 알 수 없게 차단
*/

interface Props {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  className?: string;
}


function AppLink( { children, href, isExternal, className, ...restProps }:Props ) {

  const externalProps = isExternal ? { target: "_blank", rel:"noreferrer noopener" } : {};
  return (
    // Child Component에 meta를 주면 중첩되어 쌓임
    // react-helmet 라이브러리를 사용해서 meta가 중첩되지 않고 자식이 부모를 override 하도록 처리
    <>
      {/* <Helmet>
        <title>Zustand | Child Component</title>
        <meta 
          property="og:description" 
          content="Front-End 개발자를 꿈꾸지만 어쩐지 맨날 Figma를 만지고 있습니다." 
        />
      </Helmet> */}
      <a 
        href={href}
        className={tw("text-in-500 hover:text-accent", className)}
        {...externalProps}
        {...restProps}
      >{ children }</a>
    </>
  )
}
export default memo(AppLink, () => true );
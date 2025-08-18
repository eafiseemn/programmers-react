import AppLink from "@/components/AppLink"

const htmlTag = (
  <>
    <title>Zustand | Home</title>
    <meta
      name="description"
      content="Zustand를 사용하면 Context, useReducer, useState 없이 보다 효과적으로, 더 빠르게, 더 가볍게 상태를 관리할 수 있습니다."
      />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/eafiseemn/" />
    <meta 
      property="og:description" 
      content="Front-End 개발자를 꿈꾸는 지망생입니다." 
    />
    <meta 
      property="og:image"
      content="https://avatars.githubusercontent.com/u/200383965?s=96&v=4"
    />
    <meta property="og:site:author" content="Eunjin(eafiseemn)" />
  </>
)

// const helmetTag = (
//   <Helmet>
//     <title>앱 글로벌 상태 관리 with Zustand</title>
//   </Helmet>
// )

function Home() {

  return (
    <section id="page">
      {/* react-v19 에서는 Component 안에 meta 태그 작성 시 head로 호이스팅 */}
      { htmlTag }
      {/* helmetTag */}

      <div className="learn">
        <h1>App Global State Management with Zustand</h1>
        <p>
          <AppLink
            href="https://zustand.docs.pmnd.rs/getting-started/introduction"
            isExternal
            className="text-red-400"
          >Zustand</AppLink> {' '} 
          라이브러리를 사용해 앱 또는 컴포넌트의 상태를 효과적으로 관리하는 방법을 학습합니다.</p>
      </div>
    </section>
  )
}
export default Home
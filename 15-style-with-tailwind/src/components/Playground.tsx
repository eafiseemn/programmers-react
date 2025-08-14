function Playground() {
  return (
    <div>
      <div className="bg-secondary lg:bg-amber-200 text-primary p-sm">Playground</div>
      {/* @theme custom variables */}
      {/* --color-* variable : 색깔이 필요한 모든 곳에서 사용할 수 있음 */}
      {/* media query: sm(>= 680px), md(>= 768px), lg(>= 1024px), xl(>= 1280px), 2xl(>= 1536px) */}
      {/* --spacing-* variable : spacing 관련 m- (margin), p- (padding), gap 등에서 사용 */}
      <div className="p-4 border-1 border-indigo-400 m-2 rounded-lg">
        <strong>@layer base 테스트</strong>
        <hr />
        <a href="#">어디로든 가는 LINK</a>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
      </div>

      <div className="p-4 border-1 border-indigo-400 m-2 rounded-lg">
        <strong>@layer utility 테스트</strong>
        <hr />
        <h1>h1</h1>
        <h2 className="highlight">h2</h2>
        <h3>h3</h3>
      </div>

      <div className="p-4 border-1 border-indigo-400 m-2 rounded-lg">
        <strong>@layer components 테스트</strong>
        <hr />
        <div className="card">
          <h2 className="highlight">Title</h2>
          <button>CTA</button>
        </div>
        <div className="card-tailwind">
          <h2 className="highlight">Title</h2>
          <button>CTA</button>
        </div>
      </div>
    </div>
  )
}
export default Playground
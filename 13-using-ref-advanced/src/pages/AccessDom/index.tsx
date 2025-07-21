import { useId, useState } from 'react'
import S from './style.module.css'
import CardList from './components/CardList';
import Conan from '@/pages/AccessDom/assets/conan.png';
import Ayong from '@/pages/AccessDom/assets/ayong.png';

const MOVIE_LIST = [
  {
    id: 1,
    href: 'https://cgv.co.kr/cnm/cgvChart/movieChart/89816',
    label: '명탐정 코난: 척안의 잔상',
    images: {
      src: 'https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89816/89816_320.jpg',
      character: Conan
    }
  },
  {
    id: 2,
    href: 'https://cgv.co.kr/cnm/cgvChart/movieChart/89676',
    label: '좀비딸',
    images: {
      src: 'https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89676/89676_320.jpg',
      character: Ayong
    }
  }
]

function AccessDom() {

  const checkboxId = useId();

  const [ movieList ] = useState(MOVIE_LIST);
  const [ usingPopup, setUsingPopup ] = useState(true);

  const handleToggle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsingPopup(e.target.checked);
  }

  return (
    <div className={S.container}>
      <h1>Access - DOM</h1>
      <div style={{marginBottom: '3rem'}}>
        <p>React DOM이 아닌, 실제 DOM 노드에 접근하여 조작하는 방법을 학습합니다.</p>
        <p><a href="https://micku7zu.github.io/vanilla-tilt.js/" title='vanilla-tilt GitHub'>vanilla-tilt.js</a>를 사용해 컴포넌트 DOM 노드에 3D 틸트 이펙트를 설정해보세요.</p>
        <label htmlFor={checkboxId}>
          <input type="checkbox" id={checkboxId} onChange={handleToggle} checked={usingPopup} />
          팝업 효과 켜기 / 끄기
        </label>
      </div>
      <CardList list={movieList} usingPopup={usingPopup} />
    </div>
  )
}
export default AccessDom
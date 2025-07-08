import { Fragment } from "react/jsx-runtime"

interface Props {
  reactLibrary: ReactLibrary;
  items: StatusMessageWithId[];
}

function RenderList({reactLibrary, items}:Props) {

  /* 객체의 리스트 렌더링 */
  const renderDefinitionList = (data:ReactLibrary) => {
    const defineDefinitionItem = Object.entries(data)
    .map(([key, value]) => (
      <Fragment key={key}>
        <dt>{key[0].toUpperCase() + key.slice(1)}</dt>
        <dd>{value}</dd>
      </Fragment> 
    ))

    return <dl className="reactLibrary">{defineDefinitionItem}</dl>
  }

  /* for...of를 사용한 배열의 리스트 렌더링 */
  const forOfStatusList = [];

  for (const item of items) {
    const {id, message} = item;
    forOfStatusList.push(<li key={id}>{message}</li>);
  }

  /* 배열의 메서드를 사용한 리스트 렌더링 */
  const methodStatusList = items.map(({id, message}:StatusMessageWithId) => 
            <li key={id}>{message}</li> );
  
  /* 함수를 사용한 배열의 리스트 렌더링 */
  const renderStatusList = (data:StatusMessageWithId[]) => 
    data.map(({id, message}) => <li key={id}>{message}</li>)

  /* 배열의 역순 리스트 렌더링 */
  const renderReverseList = (data:StatusMessageWithId[]) => {
    // const reversedList = [...data];
    // const reversedLi = reversedList.reverse()
    const reversedList = data.toReversed()    // es2023 이후부터 사용 가능
      .map(({id, message}, index) => <li key={id ?? index}>{message}</li>)
    return <ul>{reversedList}</ul>
  }

  return (
    <>
      <dt>리스트 렌더링 (List Rendering)</dt>
      <dd>
        <p>React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로 렌더링합니다.</p>
        { renderDefinitionList(reactLibrary) }
      </dd>
      <dd>
        <ul>
          { /* 표현식을 사용한 리스트 렌더링 */ 
            items.map(({id, message}:StatusMessageWithId) => 
            <li key={id}>{message}</li> )
          }
        </ul>
        <hr />
        <ul>
          { /* for...of를 사용한 리스트 렌더링 */ forOfStatusList }
        </ul>
        <hr />
        <ul>
          { /* 배열의 메서드를 사용한 리스트 렌더링 */ methodStatusList }
        </ul>
        <hr />
        <ul>
          { /* 함수를 사용한 리스트 렌더링 */ renderStatusList(items) }
        </ul>
      </dd>
      <dd>
        <p>상태 메시지(Status Message) 배열을 역순 정렬하여 렌더링합니다.</p>
          { /* 역순 리스트 렌더링 */ renderReverseList(items) }
      </dd>
    </>
  )
}

export default RenderList
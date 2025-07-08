import * as learnData from "@/data/learn"
import DataBinding from "./DataBinding"
import ConditionalRendering from "./ConditionalRendering"
import ConditionalDisplay from "./ConditionalDisplay";

function JSX_Markup() {
  const { imageType, statusMessage, isShowReactImage } = learnData;

  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage}></DataBinding>
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay isShowImage={isShowReactImage} />
    </dl>
  )
}

export default JSX_Markup

// dl = definition list
// dt = definition title
// dd = definition description

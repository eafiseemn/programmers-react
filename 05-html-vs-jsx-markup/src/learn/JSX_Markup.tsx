import * as learnData from "@/data/learn"
import DataBinding from "./DataBinding"
import ConditionalRendering from "./ConditionalRendering"

function JSX_Markup() {
  const { imageType, statusMessage } = learnData;
  
  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage}></DataBinding>
      <ConditionalRendering imageType={imageType} />
    </dl>
  )
}

export default JSX_Markup

// dl = definition list
// dt = definition title
// dd = definition description

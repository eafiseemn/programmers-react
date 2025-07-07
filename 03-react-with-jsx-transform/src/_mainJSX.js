/* -------------------------------------------------------------------------- */
/*                           Render Avatar with JSX                           */
/* -------------------------------------------------------------------------- */

import React, { createElement as h } from "https://esm.sh/react";
import ReactDOM, { createRoot } from "https://esm.sh/react-dom/client";
// import { avatarListData } from "./data/data.js";
// import { AvatarPage } from "./pages/AvatarPage.js";

function AvatarItem( { name, status = 'offline', size = 64 }) {
  let iconPath = `/icons/status-${status}.svg`;
  let statusMessage = '';

  switch (status) {
    case 'offline':
      statusMessage = '오프라인'
      break;
    case 'online':
      statusMessage = '온라인'
      break;
    case 'dont-disturb':
      statusMessage = '방해금지'
      break;
    case 'away':
      statusMessage = '자리비움'
      break;
  }

  const label = `${name}: ${statusMessage}`

  return (
    <li className="avatar">
      <figure aria-lable={label} title={label}>
        <div className="cover">
          <img src={`/avatar/${name}.png`} alt="" />
        </div>
        <figcaption>
          <img src={iconPath} alt="" />
        </figcaption>
      </figure>
    </li>
  )
}

function AvatarList() {
  return (
    <ul className="avatarList">
      <AvatarItem name="맹구" status="offline" />
      <AvatarItem name="짱구" status="dont-disturb" />
      <AvatarItem name="철수" status="online" />
      <AvatarItem name="유리" status="away" />
      <AvatarItem name="훈이" status="offline" />
    </ul>
  );
}

const container = document.getElementById('app');

if(container) {
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(<AvatarList />);
}

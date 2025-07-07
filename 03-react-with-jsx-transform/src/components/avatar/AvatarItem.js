import { createElement as h } from "https://esm.sh/react";

// type Props = {
//   name:string;
//   status?: 'online' | 'offline' | 'away' | 'dont-disturb';
//   size?: number;
// }

export function AvatarItem( { name, status = 'offline', size = 64 }) {
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



{/* <ul class="avatarList">
  <li class="avatar">
    <figure>
      <div class="cover">
        <img src="/avatar/맹구.png" alt="" />
      </div>
      <figcaption>
        <img src="/icons/status-online.svg" alt="" />
      </figcaption>
    </figure>
  </li>
</ul> */}
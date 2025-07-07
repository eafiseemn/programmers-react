import { createElement as h } from '../../lib/react.js';

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

  return h('li',
    {className: 'avatar'},
    h('figure', {'aria-label': label, title: label}, 
      h('div', {className: "cover", style: {width: size, height: size}}, 
        h('img', { src: `/avatar/${name}.png`, alt: ''})),
      h('figcaption', null,
        h('img', { src: iconPath, alt: ''})
      )
    ))
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
import React, { createElement as h } from '../../lib/react.js';

export function AvatarList ({ children }) {
  return h('ul', { className: "avatarList", children });
}

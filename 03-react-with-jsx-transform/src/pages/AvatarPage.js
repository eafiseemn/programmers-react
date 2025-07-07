import { AvatarItem } from '../components/avatar/AvatarItem.js';
import { AvatarList } from '../components/avatar/AvatarList.js';
import { avatarListData } from '../data/data.js';
import React, { createElement as h } from '../lib/react.js';

export function AvatarPage() {
  const children = avatarListData.items
    .map(li => h(AvatarItem, { ...li, key: li.id }));
  return h(AvatarList, { children });
}
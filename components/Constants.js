import React, { useState } from "react";

import ExitIcon from '../icons/logout.png';
import RightIcon from '../icons/right-arrow.png'

import ListIcon from '../icons/TabBar/list.png';
import ProfileIcon from '../icons/TabBar/profile.png';

import PlusIcon from '../icons/plus.png';
import TickIcon from '../icons/tick.png'


const Icons = {
    exit: ExitIcon,
    list: ListIcon,
    profile: ProfileIcon,
    right: RightIcon,
    plus: PlusIcon,
    tick: TickIcon,
}

const UserInfo = {
    id: '',
}

const ThemeColors = {
    main: '#0599FF',

}

export { Icons, UserInfo, ThemeColors };
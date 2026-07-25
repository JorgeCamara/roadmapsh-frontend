import type { ComponentPropsWithoutRef } from 'react';
import { getIconSource, type IconName } from '@containers/icon/Icon';

interface IconContainerPropsIntf
  extends Omit<ComponentPropsWithoutRef<'img'>, 'src' | 'alt'> {
  iconName: IconName,
  label?: string,
}

function IconContainer ({
    iconName,
    ...imageProps
}: IconContainerPropsIntf) {
    const iconSource = getIconSource(iconName);

    return (
        <img
            {...imageProps}
            className='iconContainer'
            src={iconSource}
        />
    );
}

export default IconContainer;
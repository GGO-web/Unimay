import React from 'react';

import {
  Button,
  ListBox,
  Popover,
  Text,
  SelectProps,
  SelectValue,
  Select as AriaSelect
} from 'react-aria-components';

import './styles/Select.scss';
import { Spinner } from '@components/Spinner/SpinnerIcon';
import { IconSprite } from '@components/Icon/IconSprite';

interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string;
  items?: Iterable<T>;
  isLoading?: boolean;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  isLoading = false,
  items,
  ...props
}: MySelectProps<T>) {
  return (
    <AriaSelect aria-label={label} {...props}>
      <Button className={'react-aria-Button justify-between'}>
        {isLoading ? 'Loading' : <SelectValue />}

        {isLoading ? (
          <Spinner style={{ width: 24, height: 24 }} />
        ) : (
          <span aria-hidden="true">
            <IconSprite
              style={{ width: 16, height: 16 }}
              iconName={'chevron-down'}
            />
          </span>
        )}
      </Button>

      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}

      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  );
}

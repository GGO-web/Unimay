import { AriaSwitchProps, useSwitch } from '@react-aria/switch';

import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { useFocusRing } from '@react-aria/focus';
import React from 'react';

interface SwitchProps extends AriaSwitchProps {
  isSelect: boolean;
}

export default function Switch(props: SwitchProps) {
  let state = useToggleState({ ...props, isSelected: props.isSelect });
  let ref = React.useRef(null);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  console.log(state);

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: props.isDisabled ? 0.4 : 1
      }}
    >
      {props.children}
      <VisuallyHidden>
        <input
          {...inputProps}
          {...focusProps}
          ref={ref}
          aria-label={props['aria-label']}
        />
      </VisuallyHidden>
      <svg width={40} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect x={4} y={4} width={32} height={16} rx={8} fill="#4d4d4d" />
        <circle cx={state.isSelected ? 28 : 12} cy={12} r={12} fill="#df4c4c" />
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={38}
            height={22}
            rx={11}
            fill="none"
            stroke="#4d4d4d"
            strokeWidth={2}
          />
        )}
      </svg>
    </label>
  );
}

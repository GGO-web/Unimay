import {
  Tab,
  TabList,
  TabPanel,
  Tabs as AriaTabs,
  TabsProps
} from 'react-aria-components';
import type { TabPanelProps, TabProps } from 'react-aria-components';
import React, { Key, useMemo, useState } from 'react';

export interface ITab {
  id: string;
  label: string;
  element: JSX.Element;
}

export interface ITabs extends TabsProps {
  tabs: ITab[];
}

export const Tabs = ({ tabs, ...props }: ITabs) => {
  const [selectedKey, setSelectedKey] = useState<Key>(tabs[0].id);

  const selectedItem = useMemo(() => {
    return document.querySelector(`.tabpanel-${selectedKey as string}`);
  }, [selectedKey]);

  return (
    <div className="flex justify-center">
      <AriaTabs
        selectedKey={selectedKey}
        onSelectionChange={setSelectedKey}
        className="w-full tabs"
        {...props}
      >
        <TabList className="flex space-x-1 tabs__list">
          {tabs.map(({ id, label }, index) => {
            return (
              <MyTab
                key={id}
                id={id}
                style={{ marginLeft: index ? '-6px' : 0 }}
              >
                {label}
              </MyTab>
            );
          })}
        </TabList>

        <div
          className={`tabs__tabpanels flex aspect-video min-h-[${
            selectedItem?.clientHeight || 0
          }px] relative`}
        >
          {tabs.map(({ id, element }) => {
            return (
              <MyTabPanel
                key={`tabpanel-${id}`}
                id={id}
                className={`tabpanel-${id}`}
              >
                {element}
              </MyTabPanel>
            );
          })}
        </div>
      </AriaTabs>
    </div>
  );
};

function MyTab(props: TabProps) {
  return (
    <Tab
      {...props}
      className={({ isSelected }) => `
        tabs__item w-full max-w-[300px] py-2.5 text-center outline-none transition-colors font-bold cursor-pointer
        ${
          isSelected
            ? 'rounded-tl-[6px] rounded-tr-[6px] text-white bg-[var(--color-red)] border-[1px] border-transparent'
            : 'rounded-tl-[6px] rounded-tr-[6px] text-white border-[1px] border-[var(--color-red)]'
        }
      `}
    />
  );
}

function MyTabPanel({ className, ...props }: TabPanelProps) {
  return (
    <TabPanel
      shouldForceMount={true}
      {...props}
      className={`mt-2 text-gray-700 rounded-2x tabpanel ${className}`}
    />
  );
}

import React from 'react';
import { useState } from 'react/cjs/react.development';
import Features from '../features/features';
import './tabs.scss';

const Tab = {
  FEATURE: 'feature',
  REVIEW: 'review',
  CONTACT: 'contact',
}

const DEFAULT_TAB_VALUE = Tab.FEATURE;

const getActiveTabClassName = (activeTab, tab) => {
  return activeTab === tab ?
    'tabs__link--active' :
    '';
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB_VALUE)

  const handleTabsFocus = (evt) => {
    console.log(evt)
    evt.preventDefault();
    const currentTab = evt.target;
    if (activeTab !== currentTab.dataset.value) {
      setActiveTab(currentTab.dataset.value);
    }
  }

  const handleTabsClick = (evt) => {
    evt.preventDefault();
  }

  return (
    <div className='tabs'>
      <ul className='tabs__link-list' onFocus={handleTabsFocus} onClick={handleTabsClick}>
        <li className='tabs__item'>
          <a className={`tabs__link ${getActiveTabClassName(activeTab, Tab.FEATURE)}`} data-value='feature' href='/'>Характеристики</a>
        </li>
        <li className='tabs__item'>
          <a className={`tabs__link ${getActiveTabClassName(activeTab, Tab.REVIEW)}`} data-value='review' href='/'>Отзывы</a>
        </li>
        <li className='tabs__item'>
          <a className={`tabs__link ${getActiveTabClassName(activeTab, Tab.CONTACT)}`} data-value='contact' href='/'>Контакты</a>
        </li>
      </ul>
      {Tab.FEATURE === activeTab ? <Features className='tabs__features' /> : null}
      <section>
        <h2 className='visually-hidden'>Контакты</h2>
      </section>
    </div>
  );
}

export default Tabs;
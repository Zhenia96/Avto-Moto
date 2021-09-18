import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Features from '../features/features';
import Contacts from '../contacts/contacts';
import Reviews from '../reviews/reviews';
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

function Tabs(props) {
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
    <div className={`${props.className ?? ''} tabs`}>
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
      {Tab.CONTACT === activeTab ? <Contacts className='tabs__contacts' /> : null}
      {Tab.REVIEW === activeTab ? <Reviews className='tabs__reviews' /> : null}
    </div>
  );
}

Contacts.propTypes = {
  className: PropTypes.string,
}

export default Tabs;
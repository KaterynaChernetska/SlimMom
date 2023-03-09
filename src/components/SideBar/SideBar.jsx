import React from 'react';
import s from './Sidebar.module.css';
import { Summary } from './Summary';
import { Diet } from './Diet';

export const SideBar = () => {
    return (
        <div className={s.Back}>
            <div className={s.SidebarSection}>
                <div className={s.SidebarWrap}>
                    <Summary dailyCalorie={0} />
                    <Diet diet={[]} />
                </div>
            </div>
        </div>
    );
};


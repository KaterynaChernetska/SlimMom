import React from 'react';
import { Summary } from '../../components/SideBar/Summary';
import { Diet } from '../../components/SideBar/Diet';
import s from '../../components/SideBar/Sidebar.module.css';
import { Outlet } from 'react-router-dom';


export const SidePage = () => {
    return (
        <>
            <Outlet />
            <section className={s.SidebarSection}>
                <div className={s.SidebarWrap}>
                    <Summary dailyCalorie={0} />
                    <Diet diet={[]} />
                </div>
            </section>
        </>
    );
};

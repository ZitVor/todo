import React from "react";
import '../aside-panel/aside-panel.css'
import {Link} from 'react-router-dom'
const AsidePanel=()=>{
    
    return(
        <aside className="aside-menu">
            <div className="aside-menu__header">
            </div>
            <div className="aside-menu__list">
                <div className="aside-menu__item">
                    <div className="aside-menu__item-icon">
                        <i class="bi bi-calendar"></i>
                    </div>
                    <div className="aside-menu__item-label">
                        <Link to="/calendar">Calendar</Link>
                        
                    </div>         
                </div>
                <div className="aside-menu__item">
                    <div className="aside-menu__item-icon">
                    <i class="bi bi-calendar-event"></i>
                    </div>
                    <div className="aside-menu__item-label">
                        <Link to="/today">Today</Link>
                    </div>         
                </div>
                <div className="aside-menu__item">
                    <div className="aside-menu__item-icon">
                    <i class="bi bi-calendar2-week"></i>
                    </div>
                    <div className="aside-menu__item-label">
                        <Link to="/nextsevendays">Next 7 days</Link>
                    </div>         
                </div>
                <div className="aside-menu__item">
                    <div className="aside-menu__item-icon">
                    <i class="bi bi-calendar3"></i>
                    </div>
                    <div className="aside-menu__item-label">
                        <Link to="/nextmonth">Next month</Link>
                    </div>         
                </div>
            </div>
            <div className="aside-menu__list list__list">
                <div className="aside-menu__header">
                    <div className="aside-menu__list-label">
                        Lists
                    </div>
                    <div className="aside-menu__list-button">
                    <i class="bi bi-plus"></i>
                    </div>
                </div>
                <div className="aside-menu-elements">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>                
            </div>
            <div className="aside-menu__list list__list">
                <div className="aside-menu__header">
                    <div className="aside-menu__list-label">
                        Tags
                    </div>
                    <div className="aside-menu__list-button">
                    <i class="bi bi-plus"></i>
                    </div>
                </div>
                <div className="aside-menu-elements">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>                
            </div>
            <div className="aside-menu__list list__list">
                <div className="aside-menu__header">
                    <div className="aside-menu__list-label">
                        Filters
                    </div>
                    <div className="aside-menu__list-button">
                    <i class="bi bi-plus"></i>
                    </div>
                </div>
                <div className="aside-menu-elements">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>                
            </div>
            <div className="aside-menu__list">
                <div className="aside-menu__item">
                <div className="aside-menu__item-icon">
                <i class="bi bi-check-square"></i>
                    </div>
                    <div className="aside-menu__item-label">
                        <Link to="/completed">Completed</Link>                     
                    </div>         
                </div>
                <div className="aside-menu__item">
                <div className="aside-menu__item-icon">
                <i class="bi bi-dash-square"></i>
                    </div>
                    <div className="aside-menu__item-label">
                    <Link to="/wontdo">Won't do</Link>
                    </div>         
                </div>
                <div className="aside-menu__item">
                <div className="aside-menu__item-icon">
                <i class="bi bi-trash-fill"></i>
                    </div>
                    <div className="aside-menu__item-label">
                    <Link to="/trash">Trash</Link>
                    </div>         
                </div>
                <div className="aside-menu__item">
                    <div className="aside-menu__item-icon">
                    <i class="bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="aside-menu__item-label">
                    <Link to="/analitica">Analitica</Link>
                    </div>                
                </div>
                <div className="aside-menu__item">
                    <div className="aside-menu__item-icon">
                    <i class="bi bi-search-heart"></i>
                    </div>
                    <div className="aside-menu__item-label">
                    <Link to="/search">Search</Link>
                    </div>                
                </div>
            </div>
        </aside>
    )
}
export default AsidePanel
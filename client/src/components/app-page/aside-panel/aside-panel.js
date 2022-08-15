import React, { useContext, useState } from "react";
import '../aside-panel/aside-panel.css'
import {Link} from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext";
import { useAuth } from "../../../hooks/auth.hook";
import Modal from "../../modal/modal"
import CreateList from "../../create-list/create-list";
const AsidePanel=()=>{
    const auth = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const { login, logout } = useAuth()
    const logoutHandler = async (req,res) => {
        auth.logout()
    }
    const modalHandler = async(req,res) => {
        if (isOpen==false){
            setIsOpen(true)
        }
        else{
            setIsOpen(false)
        }
    }
    return(
        <aside className="aside-menu">
            <div className="aside-menu__header">
                <div className="user">                               
                    <AuthContext.Consumer>
                    {value => <div className="user__avatar">User:{value.userId}</div>}
                    </AuthContext.Consumer>
                    
                    <div className="user__name"></div>
                </div>
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
                <div className="aside-menu__header lists-list">
                    <div className="aside-menu__list-label">
                        Lists
                    </div>
                    <div className="aside-menu__list-button">
                        <button onClick={() => setIsOpen(true)}>
                        <i class="bi bi-plus"></i>
                        </button>
                        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                            <CreateList/>
                        </Modal>
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
                <div className="aside-menu__item ">
                    <div className="aside-menu__item-icon">
                    <i class="bi bi-box-arrow-in-left"></i>
                    </div>
                    <div className="aside-menu__item-label ">
                    <Link to="/login" onClick={logoutHandler}>Logout</Link>
                    </div>                
                </div>
            </div>     
        </aside>
    )
}
export default AsidePanel
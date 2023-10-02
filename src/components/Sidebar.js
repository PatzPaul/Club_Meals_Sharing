import { Fragment, UseState, useState } from 'react';
import '../../src/styles.css';

const Sidebar = () => {

    const [show, setShow] = useState(false);

    const toggleSidebar = () => setShow(!show);

    return (
        <Fragment>

            <div className={`sidebar-backdrop ${show && "show"}`}
                onClick={toggleSidebar}></div>

            <nav id='sidebar' className={`sidebar ${show && "show"}`}>
                <h2 className='title'>
                    <i className='bi bi-view-list'></i>
                    ClubMealz
                </h2>

                <ul>
                    <li onClick={toggleSidebar} className='active'>
                        <i className='bi bi-graph-up'></i>
                        Dashboard
                    </li>
                    <li onClick={toggleSidebar}>
                        <i className='bi bi-cart'></i>
                        Orders
                    </li>
                    <li onClick={toggleSidebar}>
                        <i className='bi bi-star'></i>
                        Reviews
                    </li>
                    <li onClick={toggleSidebar}>
                        <i className='bi bi-bookmark'></i>
                        Address
                    </li>
                    <li onClick={toggleSidebar}>
                        <i className='bi bi-people'></i>
                        Account
                    </li>
                </ul>
            </nav>

            <main id="main">
                <button onClick={toggleSidebar}>Expand</button>
            </main>
        </Fragment>
    );
};

export default Sidebar;
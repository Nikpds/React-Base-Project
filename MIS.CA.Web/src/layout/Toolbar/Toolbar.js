import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import { Menu, Icon, Layout } from 'antd';
import classes from './Toolbar.module.sass';
const { Header } = Layout;
const Toolbar = props => {
    const auth = useContext(AuthContext);
    return (
        <Header className={classes.Header}>
            <Menu mode="horizontal" className={classes.Menu}>
                <Menu.Item key="1" className={classes.Menu_Item_hover}>
                    <NavLink to="/" className={classes.Menu_Item}><Icon type="home" />Αρχική</NavLink>
                </Menu.Item>
                <Menu.Item key="2" className={classes.Menu_Item_hover}>
                    <NavLink to="/cert/certificates" className={classes.Menu_Item}><Icon type="safety-certificate" />Πιστοποιητικά</NavLink>
                </Menu.Item>
                <Menu.Item key="3" className={classes.Menu_Item_hover}>
                    <NavLink to="/cert/files" className={classes.Menu_Item}><Icon type="folder" />Φάκελοι-Αρχεία</NavLink>
                </Menu.Item>
                <Menu.Item key="4" className={classes.Menu_Item_hover}>
                    <NavLink to="/certificate/new" className={classes.Menu_Item}>
                        <Icon type="plus" />Νέο Πιστοποιητικό</NavLink>
                </Menu.Item>
                <Menu.Item key="5" className={[classes.Right, classes.Menu_Item].join(' ')} onClick={auth.signOut}>
                    <Icon type="logout" />Αποσύνδεση
                </Menu.Item>
            </Menu>
        </Header>

    );
};

export default Toolbar;
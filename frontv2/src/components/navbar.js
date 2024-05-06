import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, LoginOutlined, UserAddOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = React.useState('home');

    const handleMenuClick = (e) => {
        setCurrent(e.key);
        switch (e.key) {
            case 'home':
                navigate('/');
                break;
            case 'login':
                navigate('/login');
                break;
            case 'register':
                navigate('/register');
                break;
            case 'about':
                navigate('/about');
                break;
            default:
                break;
        }
    };

    return (
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#001529',
                padding: '0 20px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
            >
                <HomeOutlined style={{ fontSize: '24px', color: '#fff', marginRight: '8px' }} />
                <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>AirFlight Travels</span>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[current]}
                onClick={handleMenuClick}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Menu.Item key="login">
                    <LoginOutlined />
                    Login
                </Menu.Item>
                <Menu.Item key="register">
                    <UserAddOutlined />
                    Register
                </Menu.Item>
                <Menu.Item key="about">
                    <InfoCircleOutlined />
                    About
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navbar;

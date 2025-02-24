import './LogoutPage.scss';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import cat from '../../../assets/images/cat.png';

function LogoutPage() {
    return (
        <section className='logout'>
            <PageHeader title='Logout' />
            <main className='logout__main'>
                <img className='logout__cat' src={cat} alt='Cat' />
                <div className='logout__right-container'>
                    <h3 className='logout__header'>The Logout Page is still under construction!</h3>
                    <p className='logout__content'>
                        Right now, logging out simply ends your session, but soon, this page will support **multi-user access**, allowing **students, coaches, and gym administrators** to manage their accounts seamlessly.  
                    </p>
                    <p className='logout__content'>
                        Future updates will introduce **user authentication, role-based access, and interactive features**, enabling **coaches to provide feedback**, **students to engage with each other**, and **gyms to manage memberships more efficiently**.
                    </p>
                    <Link to='/jitsujournal' className='logout__link'> Click here to see the MVP, Jitsu Journal!</Link>
                </div>
            </main>
        </section>
    );
}

export default LogoutPage;

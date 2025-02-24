import './ProfilePage.scss';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import cat from '../../../assets/images/cat.png';

function ProfilePage() {
    return (
        <section className='profile'>
            <PageHeader title='Profile' />
            <main className='profile__main'>
                <img className='profile__cat' src={cat} alt='Cat' />
                <div className='profile__right-container'>
                    <h3 className='profile__header'>The Profile Page is still under construction!</h3>
                    <p className='profile__content'>Here you will soon see a personal training hub where users can track their attendance history, membership status, and belt rank progression. It may also include an overview of past notes and training insights, helping users track their development over time.</p>
                    <Link to='/jitsujournal' className='profile__link'> Click here to see the MVP, Jitsu Journal!</Link>
                </div>
            </main>
        </section>
    );
}

export default ProfilePage;

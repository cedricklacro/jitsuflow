import './HomePage.scss'
import { Link } from 'react-router-dom'
import PageHeader from '../../../components/PageHeader/PageHeader'
import cat from '../../../assets/images/cat.png';

function HomePage() {
    return (
        <section className='homepage'>
            <PageHeader title='Home' />
            <main className='homepage__main'>
                <img className='homepage__cat' src={cat} />
                <div className='homepage__right-container'>
                    <h3 className='homepage__header'>The Home Page is still under construction!</h3>
                    <p className='homepage__content'>Here you will soon see the dashboard where users land upon logging in. It will display important announcements, such as upcoming events, promotions, or competitions. Users will also find educational content like blog posts, training tips, or curated Jiu-Jitsu resources.</p>
                    <Link to='/jitsujournal' className='homepage__link'> Click here to see the MVP, Jitsu Journal!</Link>
                </div>
            </main>
        </section>
    )
}

export default HomePage

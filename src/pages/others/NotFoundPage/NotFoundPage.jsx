import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import cat from '../../../assets/images/cat.png';

function NotFoundPage() {
  return (
    <section className='not-found'>
    <PageHeader title='Error 404: Page Not Found' />
    <main className='not-found__main'>
        <img className='not-found__cat' src={cat} alt='Cat' />
        <div className='not-found__right-container'>
            <h3 className='not-found__header'>Sorry, Page not Found</h3>
            <Link to='/jitsujournal' className='not-found__link'> Click here to see the MVP, Jitsu Journal!</Link>
        </div>
    </main>
</section>

  )
}

export default NotFoundPage

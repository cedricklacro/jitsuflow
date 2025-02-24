import './BillingPage.scss';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import cat from '../../../assets/images/cat.png';

function BillingPage() {
    return (
        <section className='billing'>
            <PageHeader title='Billing' />
            <main className='billing__main'>
                <img className='billing__cat' src={cat} alt='Cat' />
                <div className='billing__right-container'>
                    <h3 className='billing__header'>The Billing Page is still under construction!</h3>
                    <p className='billing__content'>Here you will soon see a payment management section where users can view their membership status, upcoming payments, and transaction history. It will also provide subscription details and an option to update payment methods or renew memberships.</p>
                    <Link to='/jitsujournal' className='billing__link'> Click here to see the MVP, Jitsu Journal!</Link>
                </div>
            </main>
        </section>
    );
}

export default BillingPage;

import './FlowBuilderPage.scss';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import cat from '../../../assets/images/cat.png';

function FlowBuilder() {
    return (
        <section className='flow-builder'>
            <PageHeader title='Flow Builder' />
            <main className='flow-builder__main'>
                <img className='flow-builder__cat' src={cat} alt='Cat' />
                <div className='flow-builder__right-container'>
                    <h3 className='flow-builder__header'>The Flow Builder Page is still under construction!</h3>
                    <p className='flow-builder__content'>Here you will soon be able to create customized technique flowcharts from takedowns to submissions. Users can store and manage past flows for review, and even interactively navigate through flowchart elements to access related notes.</p>
                    <Link to='/jitsujournal' className='flow-builder__link'> Click here to see the MVP, Jitsu Journal!</Link>
                </div>
            </main>
        </section>
    );
}

export default FlowBuilder;

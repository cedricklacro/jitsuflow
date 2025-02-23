import './UnderConstructionPage.scss';
import cat from '../../../assets/images/cat.png';
function UnderConstructionPage() {
  return (
    <section className='under-construction'>
      <h1 className='under-construction__header'>Page Under Construction</h1>
      <main className='under-construction__main-container'>
        <div className='under-construction__categories'>
          <img className='under-construction__cat' src={cat}/>
        </div>
      </main>
    </section>

  )
}

export default UnderConstructionPage

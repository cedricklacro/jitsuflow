import './PageHeader.scss'
import backicon from '../../assets/icons/arrow_back-24px.svg'
import addicon from '../../assets/icons/add-icon.svg'
import editicon from '../../assets/icons/edit-icon.svg'
import { Link, useNavigate } from 'react-router-dom'

function PageHeader({ title, type, id }) {
  const navigate = useNavigate();
  return (
    <div className='page-header'>
      <div className='page-header__left-container'>
        {type === 'notedetails' || 'withback'
          ? <img className='page-header__icon' src={backicon} onClick={() => navigate(-1)} />
          : null}
        <h1 className='page-header__title'>{title}</h1>
      </div>
      {type === 'notemenu'
        ? (<Link className='page-header__add-container' to='/jitsujournal/add'>
          <img className='page-header__icon' src={addicon} alt='add icon' />
          <p className='page-header__add-title'> Add New Note</p>
        </Link>)
        : null}
      {type === 'notedetails'
        ? (<Link className='page-header__add-container' to={`/jitsujournal/${id}/edit`}>
          <img className='page-header__icon' src={editicon} alt='edit icon' />
          <p className='page-header__add-title'> Edit Note</p>
        </Link>)
        : null}
    </div>
  )
}

export default PageHeader

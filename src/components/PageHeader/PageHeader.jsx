import './PageHeader.scss'
import backicon from '../../assets/icons/arrow_back-24px.svg'
import { useNavigate } from 'react-router-dom'

function PageHeader({ title, type }) {
  const navigate = useNavigate();
  return (
    <div className='page-header'>
      {type === 'withback'
        ? <img className='page-header__back' src={backicon} onClick={() => navigate(-1)} />
        : null}
      <h1 className='page-header__title'>{title}</h1>
    </div>
  )
}

export default PageHeader

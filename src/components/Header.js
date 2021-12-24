import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => (
    <header className='header'>
        <h1>
            {title}</h1>
        <Button 
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Go Back': 'Add'}
        onClick={onAdd}></Button>

    </header>)

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

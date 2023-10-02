import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <div className='mb-5'>
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn btn-success p-2'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
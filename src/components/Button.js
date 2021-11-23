import PropTypes from "prop-types"

const Button = ({ color, text, borderRadius, onClick }) => {

    return (
        <button 
            onClick={onClick} 
            style={{ 
                backgroundColor: color,
                borderRadius: borderRadius }} 
            className="btn"
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "gray",
    text: "",
    borderRadius: "5px"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

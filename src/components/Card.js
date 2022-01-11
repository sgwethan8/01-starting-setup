import './Card.css';

function Card(props) {
    // anything received as a classname is added to this string
    const classes = 'card' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;
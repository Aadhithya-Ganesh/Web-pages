import classes from './Footer.module.css'

const Footer = ({state, page, onPageChange, children}) => {

    let colorScheme = state == 'sun' ? classes.colorDark : classes.colorLight;
    let buttomColor = state == 'sun' ? classes.footerDark : classes.footerLight;

    return <>
        <div className={ `${classes.footer} ${colorScheme} ${children == "Mobile" ? classes.show : children == "Desktop" ? classes.hide : classes.nothing}`}>
            <p className={ `${buttomColor} ${page == "All" ? classes.colorBlue : null} `} onClick={onPageChange}>All</p>
            <p className={ `${buttomColor} ${page == "Active" ? classes.colorBlue : null} `} onClick={onPageChange}>Active</p>
            <p className={ `${buttomColor} ${page == "Completed" ? classes.colorBlue : null} `} onClick={onPageChange}>Completed</p>
        </div>
    </>
};

export default Footer;
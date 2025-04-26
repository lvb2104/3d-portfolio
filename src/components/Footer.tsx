const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-primary py-4 text-center text-secondary text-sm'>
            <p>&copy; {currentYear} Moda. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

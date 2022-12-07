const Footer = () => {
    return (
        <>
            <div className="p-3 invisible">fundorodape</div>
            <footer className="fixed-bottom p-3 bg-dark text-light text-center">
                <p>Copyright &copy; {new Date().getFullYear()} :: Todos os direitos reservados</p>
            </footer>
        </>
    );
};

export default Footer;

const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Carregando...</span>
            </div>
        </div>
    );
};

export default Loading;
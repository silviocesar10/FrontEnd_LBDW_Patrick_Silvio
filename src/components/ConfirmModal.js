const ConfirmModal = ({ question, action }) => {
    return (
        <div className="modal fade" id="confirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Confirmação
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">{question}</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Não
                        </button>
                        <button type="button" className="btn btn-primary" onClick={action}>
                            Sim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
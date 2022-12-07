import parse from "html-react-parser";
import purify from "dompurify";

const InformModal = ({ info, action }) => {
    return (
        <div className="modal fade" id="informModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            <i className="info-lg rounded-circle border"></i>
                            Informação
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">{purify.sanitize(parse(info))}</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={action}>
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformModal;
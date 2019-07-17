import React from 'react';
import { connect } from 'react-redux';
import { toggleModalWindow } from '../../actions';
import './modal-window.scss';

const ModalWindow = (props) => {
    const {
        openModal,
        children,
        toggleModalWindow,
    } = props;

    if (!openModal) {
        document.body.classList.remove('modal-open');
        return null;
    } else {
        document.body.classList.add('modal-open');
    }

    const clickModalWindow = (e) => {
        if (e.target.className === 'modal-window') {
            toggleModalWindow();
        }
    }

    return (
        <div className="modal-window" onClick={(e) => clickModalWindow(e)}>
            <div className="modal-window__content container">
                <div className="modal-window__toolbar">
                    <button
                        className="modal-window__hide btn btn-outline-primary"
                        onClick={() => toggleModalWindow()} >
                        <i className="fa fa-minus-circle"></i>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

const mapStateToProps = ({ openModal }) => {
    return { openModal };
};

const mapDispatchToProps = {
    toggleModalWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

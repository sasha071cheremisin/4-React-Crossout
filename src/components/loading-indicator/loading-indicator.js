import React from 'react';
import './loading-indicator.scss';

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="lds-css ng-scope">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingIndicator;

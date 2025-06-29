import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    const getAlertIcon = (type) => {
        switch(type) {
            case 'success':
                return 'fas fa-check-circle';
            case 'danger':
                return 'fas fa-exclamation-triangle';
            case 'warning':
                return 'fas fa-exclamation-circle';
            case 'info':
                return 'fas fa-info-circle';
            case 'primary':
                return 'fas fa-star';
            default:
                return 'fas fa-bell';
        }
    };

    return (
        <div style={{ height: '50px' }}>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <i className={`${getAlertIcon(props.alert.type)} me-2`}></i>
                    <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
                </div>
            )}
        </div>
    );
}

export default Alert;

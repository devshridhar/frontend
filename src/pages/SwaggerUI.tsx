import React from 'react';
import SwaggerUIComponent from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import Config from '../utils/config';

const SwaggerUI = () => {
    return (
        <SwaggerUIComponent url={`${Config.apiUrl}/api-docs-json`}  />
    );
};

export default SwaggerUI;



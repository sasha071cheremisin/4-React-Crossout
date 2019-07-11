import React from 'react';
import { CrossoutServiceConsumer } from '../crossout-service-context';

const withCrossoutService = () => (Wrapper) => {
    return (props) => {
        return (
            <CrossoutServiceConsumer>
                {
                    (crossoutService) => {
                        return (
                            <Wrapper {...props} crossoutService={crossoutService}/>
                        );
                    }
                }
            </CrossoutServiceConsumer>
        );
    };
};

export default withCrossoutService;

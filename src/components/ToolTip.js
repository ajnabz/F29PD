import React from 'react';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

function ToolTip(props) {

    return (
        <div>
            {props.suggestion.map(suggestion => {
                function renderTooltip(props) {
                    return (
                        <Tooltip id="button-tooltip" {...props}>
                            suggestionToolTip
                        </Tooltip>
                    );
                }
                let suggestionToolTip = suggestion.id;


                return (


                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
                        <Badge variant="success">{suggestionToolTip}</Badge>
                    </OverlayTrigger>
                );


            })}
        </div>

    );
}


export default ToolTip;

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TileMedia = props => {
    const { children, className, productTile, ...rest } = props;

    const tileMediaClasses = classnames(
        'fd-tile__media',
        className
    );

    return (
        <div {...rest} className={tileMediaClasses}>{children}</div>);
};

TileMedia.displayName = 'Tile.Media';

TileMedia.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    productTile: PropTypes.bool
};

export default TileMedia;

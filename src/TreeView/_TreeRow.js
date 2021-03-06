import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TreeRow extends Component {
    render() {
        const {
            children,
            isExpanded,
            isParent,
            onExpandClick,
            rowId,
            ...rest
        } = this.props;

        // Render child TreeCols
        const cells = React.Children.toArray(children).map((child, index) => {
            const isTreeCol = child.type && child.type.displayName === 'TreeView.Col';
            const isFirstTreeCol = index === 0 && isTreeCol;

            // Add control class to first TreeCol element
            const className = classnames({
                'fd-tree__col--control': isFirstTreeCol
            });

            const buttonClassName = classnames(
                'fd-tree__control',
                { 'is-pressed': !!isExpanded }
            );

            // Add expand button to first TableCell if parent list
            const newChildren = isFirstTreeCol && isParent ? (
                <div>
                    <button
                        aria-controls={rowId}
                        aria-label={isExpanded ? 'collapse' : 'expand'}
                        aria-pressed={isExpanded}
                        className={buttonClassName}
                        onClick={onExpandClick} />
                    {child.props && child.props.children}
                </div>
            ) : child.props && child.props.children;

            return isTreeCol ?
                React.cloneElement(child, { className, children: newChildren }) :
                null;
        });

        return (
            <div {...rest} className='fd-tree__row'>
                {cells}
            </div>
        );
    }
}

TreeRow.displayName = 'TreeView.Row';

TreeRow.propTypes = {
    /** Node(s) to render within the component. Expecting `TreeCol` components as children */
    children: PropTypes.node,
    /** Internal use only */
    isExpanded: PropTypes.bool,
    /** Internal use only */
    isParent: PropTypes.bool,
    /** Internal use only */
    rowId: PropTypes.string,
    /** Internal use only */
    onExpandClick: PropTypes.func
};

export default TreeRow;

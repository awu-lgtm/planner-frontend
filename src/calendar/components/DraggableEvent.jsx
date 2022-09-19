import React from 'react';
import PropTypes from 'prop-types';
import './DraggableEvent.css';

// const DraggableEvent = React.forwardRef(({ title, color, id }, ref) => {
//   DraggableEvent.propTypes = {
//     title: PropTypes.string,
//     color: PropTypes.string,
//     id: PropTypes.string.isRequired,
//   };

//   DraggableEvent.defaultProps = {
//     title: '',
//     color: '#1E90FF',
//   };

//   const style = {
//     backgroundColor: color,
//   };

//   return (
//     <div ref={ref}
// data-color={color} data-id={id} title={title} className="draggable event" style={style}>
//       <span className="drabble text">
//         hello
//       </span>
//     </div>
//   );
// });

function DraggableEvent({
  title, color, description, id,
}) {
  DraggableEvent.propTypes = {
    title: PropTypes.string,
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  DraggableEvent.defaultProps = {
    title: '',
    color: { hex: '#1E90FF' },
  };

  const style = {
    backgroundColor: color,
  };

  return (
    <div data-custom={description} data-color={color} data-id={id} title={title} className="draggable event" style={style}>
      <span className="draggable text">
        {title}
      </span>
    </div>
  );
}

export default DraggableEvent;

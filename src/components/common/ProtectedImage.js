import React, { useEffect, useRef } from 'react';

const ProtectedImage = ({ src, alt = 'Portfolio image', className = '', onError, loading = 'lazy', ...props }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Disable right-click context menu on image
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag and drop
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable mouse down to prevent selection
    const handleMouseDown = (e) => {
      if (e.detail > 1) {
        e.preventDefault();
      }
    };

    img.addEventListener('contextmenu', handleContextMenu);
    img.addEventListener('dragstart', handleDragStart);
    img.addEventListener('mousedown', handleMouseDown);

    return () => {
      img.removeEventListener('contextmenu', handleContextMenu);
      img.removeEventListener('dragstart', handleDragStart);
      img.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Disable keyboard shortcuts for saving/opening image
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent Ctrl+S, Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
      }
      // Prevent Ctrl+A (Select All) when focused on image
      if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        if (document.activeElement === imgRef.current) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      title={alt}
      className={className}
      draggable={false}
      loading={loading}
      onDragStart={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        userSelect: 'none',
        WebkitUserDrag: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none',
        pointerEvents: 'auto',
        ...props.style,
      }}
      onError={onError}
      {...props}
    />
  );
};

export default ProtectedImage;

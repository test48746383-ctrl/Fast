import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

/**
 * 🚪 Modal Component
 * 
 * Uses React Portal to render outside the DOM hierarchy.
 */
const Modal = ({ isOpen, onClose, title, children, actions }) => {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-modal flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-cosmic-800 rounded-3xl border border-white/10 shadow-glow-lg overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            {title && (
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-xl font-display font-semibold text-white">{title}</h3>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white">
                  ✕
                </button>
              </div>
            )}

            {/* Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {children}
            </div>

            {/* Actions */}
            {actions && (
              <div className="p-6 pt-0 flex gap-4">
                {actions}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;

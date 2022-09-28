import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@app/components';
import { fontSizes } from '@app/theme';

import { ModalStyled, ModalBody, ModalClose, ModalBackground, ModalContainer } from './styled';

export const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const animationVariants = {
    hidden: {
      opacity: 0,
      zIndex: -10,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      zIndex: 100,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div animate="visible" initial="hidden" exit="hidden" variants={animationVariants}>
          <ModalStyled>
            <ModalContainer>
              <ModalBody>{children}</ModalBody>
              <ModalClose onClick={handleClose}>
                <Button variant="danger" size="small">
                  <span className="material-icons" style={{ fontSize: fontSizes.large }}>
                    close
                  </span>
                </Button>
              </ModalClose>
            </ModalContainer>
            <ModalBackground onClick={handleClose} />
          </ModalStyled>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

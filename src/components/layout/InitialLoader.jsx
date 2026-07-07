import { AnimatePresence, motion } from 'framer-motion';
import Loader from './Loader';

export default function InitialLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

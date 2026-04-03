import { Card } from '../Card/Card';
import { QrCode, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import QrSvg from '../../../assets/qr.svg';

interface DownloadAppModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DownloadAppModal = ({ isOpen, onClose }: DownloadAppModalProps) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"
                />

                {/* Modal Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                    className="relative w-full max-w-[340px] z-10"
                >
                    <button 
                        onClick={onClose}
                        className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all z-20 shadow-xl"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <Card className="border-white/5 bg-gray-900/95 backdrop-blur-2xl overflow-hidden shadow-2xl rounded-[2rem] p-4 text-center">
                        <div className="p-2 sm:p-4 flex flex-col items-center">
                            {/* QR Code Area */}
                            <div className="relative group mb-6 sm:mb-8 w-full flex justify-center">
                                <div className="absolute -inset-8 bg-brand-500/10 blur-[40px] rounded-full opacity-60"></div>
                                
                                <div className="bg-white p-4 sm:p-5 rounded-[1.5rem] shadow-xl relative z-10 border border-white/5 w-fit">
                                    <img 
                                        src={(typeof QrSvg === 'string' ? QrSvg : (QrSvg as any).src)} 
                                        alt="QR Code" 
                                        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <div className="bg-brand-500 text-white p-2 sm:p-3 rounded-2xl shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                            <QrCode className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <h3 className="text-white font-black tracking-[0.25em] uppercase text-[10px] sm:text-xs">Scan to Download App</h3>
                                <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest pt-2 border-t border-white/5">
                                    <span>iOS</span>
                                    <div className="w-1 h-1 rounded-full bg-brand-500" />
                                    <span>Android</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default DownloadAppModal;

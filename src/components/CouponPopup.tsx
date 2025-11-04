import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const coupons = [
  { code: 'ROYAL10', discount: '10% OFF', description: 'on your next purchase' },
  { code: 'GOLD15', discount: '15% OFF', description: 'on orders over $200' },
  { code: 'FREESHIP', discount: 'Free Shipping', description: 'on all orders' },
  { code: 'LUXURY20', discount: '20% OFF', description: 'on premium items' },
];

const CouponPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCoupon, setCurrentCoupon] = useState(coupons[0]);

  useEffect(() => {
    const showPopup = () => {
      const randomCoupon = coupons[Math.floor(Math.random() * coupons.length)];
      setCurrentCoupon(randomCoupon);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 10000); // Auto hide after 10 seconds
    };

    // Show first popup after 10 seconds
    const initialTimer = setTimeout(showPopup, 10000);

    // Then show every 5 minutes
    const interval = setInterval(showPopup, 5 * 60 * 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCoupon.code);
    toast.success('Coupon code copied!');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Card className="gold-border gold-glow w-80 relative overflow-hidden">
            <div className="absolute inset-0 shimmer pointer-events-none" />
            <CardContent className="p-6 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => setIsVisible(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Gift className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">
                    Special Offer!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Limited time only
                  </p>
                </div>
              </div>
              <div className="text-center mb-4">
                <p className="text-3xl font-display font-bold text-gold-gradient mb-1">
                  {currentCoupon.discount}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentCoupon.description}
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3 mb-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Use code:
                </p>
                <p className="text-xl font-display font-bold text-accent">
                  {currentCoupon.code}
                </p>
              </div>
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={handleCopy}
              >
                Copy Code
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CouponPopup;

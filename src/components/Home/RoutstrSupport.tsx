'use client';

import {motion} from 'framer-motion';
import {ExternalLink, Network, Shield, Zap} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '../ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '../ui/card';

export const RoutstrSupport = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1}}>
            <Card className="h-full border-purple-200/20 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/20">
              <CardHeader>
                <Network className="w-8 h-8 text-purple-600 mb-3" />
                <CardTitle className="text-xl">Decentralized Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Route your AI payments through{' '}
                  <span className="inline-flex items-center gap-1">
                    <Image
                      src="/routstr.png"
                      alt="Routstr"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 inline-block rounded-sm"
                    />
                    Routstr&apos;s
                  </span>{' '}
                  distributed proxy network, eliminating single points of failure and improving global accessibility.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}>
            <Card className="h-full border-purple-200/20 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/20">
              <CardHeader>
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <CardTitle className="text-xl">Enhanced Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Layer additional privacy protection with{' '}
                  <span className="inline-flex items-center gap-1">
                    <Image
                      src="/routstr.png"
                      alt="Routstr"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 inline-block rounded-sm"
                    />
                    Routstr&apos;s
                  </span>{' '}
                  proxy infrastructure, making your AI requests even more anonymous and untraceable.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3}}>
            <Card className="h-full border-purple-200/20 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/20">
              <CardHeader>
                <Zap className="w-8 h-8 text-purple-600 mb-3" />
                <CardTitle className="text-xl">Optimized Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Benefit from{' '}
                  <span className="inline-flex items-center gap-1">
                    <Image
                      src="/routstr.png"
                      alt="Routstr"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 inline-block rounded-sm"
                    />
                    Routstr&apos;s
                  </span>{' '}
                  intelligent routing algorithms that optimize latency and ensure reliable delivery of your e-cash
                  payments.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          className="text-center">
          <Button variant="outline" size="lg" asChild className="group">
            <Link
              href="https://www.routstr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2">
              <Image src="/routstr.png" alt="Routstr" width={20} height={20} className="w-5 h-5 rounded-md" />
              Learn More About Routstr
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

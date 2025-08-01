import React from 'react';
import Image from 'next/image';
import {NavigationLinks} from './NavigationLinks';
import {SectionHeading, SectionLinkCopy} from './SectionLinkCopy';

export function GettingStarted() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <div id="overview">
        <SectionHeading level={1} id="overview" className="mb-6">
          Client Interface Overview
        </SectionHeading>
      </div>

      <div className="space-y-12">
        <section id="interface-demo">
          <div className="w-full mb-8">
            <Image
              src="/app.gif"
              alt="Routstr-Client Interface Demo"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg border shadow-md"
            />
          </div>
          <div className="space-y-6">
            <section id="features-overview">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Routstr Client is a cutting-edge e-cash payment system that enables secure, private, and instant
                  digital transactions. Built on the Cashu protocol and seamlessly integrated with the Routstr
                  Marketplace and Roustr AI ecosystem.
                </p>
                <p>
                  Our system combines the privacy benefits of e-cash with the precision of millisatoshi payments,
                  creating a truly private and efficient way to pay for AI services. The client features both API access
                  and an intuitive chat interface for direct AI interactions.
                </p>
                <p>
                  Unlike traditional payment methods that require accounts, personal information, and leave digital
                  footprints, our gateway allows you to pay exactly what you consume without revealing your identity or
                  usage patterns.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Privacy-focused transactions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Routstr Marketplace integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Interactive chat interface
                  </li>
                </ul>
              </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2" id="dashboard">
                  🏠 Dashboard
                </h4>
                <p className="text-muted-foreground">
                  View wallet balance, redeem eCash tokens, collect cashback, and manage your current provider—all with
                  real-time updates.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2" id="providers">
                  🔗 Providers
                </h4>
                <p className="text-muted-foreground">
                  Browse, add, and manage Nostr marketplace providers. Set defaults, add custom providers, and refresh
                  the list in real time.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2" id="models">
                  🤖 Models
                </h4>
                <p className="text-muted-foreground">
                  Explore and test AI models, view pricing, and switch between proxy and OpenAI models.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2" id="transactions">
                  📊 Transactions
                </h4>
                <p className="text-muted-foreground">
                  Monitor completed and pending transactions with real-time auto-refresh and detailed status indicators.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2" id="settings">
                  ⚙️ Settings
                </h4>
                <p className="text-muted-foreground">
                  Configure Nostr authentication, manage wallets, multiple mints, and relays, and monitor connection
                  status securely.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2" id="authentication">
                  🔐 Authentication
                </h4>
                <p className="text-muted-foreground">
                  Secure login and registration with Nostr key support and extension integration.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2" id="chat-interface">
                  💬 Chat Interface
                </h4>
                <p className="text-muted-foreground">
                  Interactive chat interface for direct AI conversations with real-time token cost tracking and seamless
                  e-cash payments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="key-benefits">
          <SectionHeading level={2} id="key-benefits" className="mb-4">
            Key Benefits
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600" id="complete-privacy">
                🔒 Complete Privacy
              </h3>
              <p className="text-muted-foreground">
                No accounts, no tracking, no personal data required. Your AI usage remains completely anonymous.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600" id="microsatoshi-precision">
                ⚡ Microsatoshi Precision
              </h3>
              <p className="text-muted-foreground">
                Pay exactly for what you use with millisatoshi precision. No more overpayment or subscription waste.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-600" id="automatic-change">
                🔄 Automatic Change
              </h3>
              <p className="text-muted-foreground">
                Unused funds are automatically returned as Cashu notes for future use via X-Cashu headers.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600" id="api-compatible">
                🔌 API Compatible
              </h3>
              <p className="text-muted-foreground">
                Drop-in replacement for OpenAI API endpoints. Works with existing tools and integrations.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600" id="multi-mint-support">
                🏦 Multi-Mint Support
              </h3>
              <p className="text-muted-foreground">
                Connect to multiple Cashu mints simultaneously for enhanced redundancy, liquidity, and privacy
                diversification.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works">
          <SectionHeading level={2} id="how-it-works" className="mb-4">
            How It Works
          </SectionHeading>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-2" id="obtain-ecash-tokens">
                  Obtain E-Cash Tokens
                </h4>
                <p className="text-muted-foreground">
                  Get Cashu e-cash tokens from one or multiple supported mints. These tokens represent your payment
                  without revealing your identity, and multi-mint support provides enhanced redundancy and privacy.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-2" id="make-api-requests">
                  Make API Requests
                </h4>
                <p className="text-muted-foreground">
                  Send your AI requests to our gateway endpoint with your e-cash token in the X-Cashu header.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-2" id="automatic-payment">
                  Automatic Payment
                </h4>
                <p className="text-muted-foreground">
                  Our system automatically deducts the exact cost and returns any unused funds as new Cashu notes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-2" id="receive-response">
                  Receive Response
                </h4>
                <p className="text-muted-foreground">
                  Get your AI response along with updated e-cash tokens for future requests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="multi-mint-architecture">
          <SectionHeading level={2} id="multi-mint-architecture" className="mb-4">
            Multi-Mint Architecture
          </SectionHeading>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Routstr Client supports connecting to multiple Cashu mints simultaneously, providing enhanced security,
              liquidity, and privacy benefits for your e-cash transactions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-600" id="automatic-failover">
                  🔄 Automatic Failover
                </h3>
                <p className="text-muted-foreground">
                  If one mint becomes unavailable, the client automatically switches to alternative mints to ensure
                  uninterrupted service.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-600" id="enhanced-liquidity">
                  💰 Enhanced Liquidity
                </h3>
                <p className="text-muted-foreground">
                  Distribute your e-cash across multiple mints to access larger liquidity pools and reduce
                  single-point-of-failure risks.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-purple-600" id="privacy-diversification">
                  🔒 Privacy Diversification
                </h3>
                <p className="text-muted-foreground">
                  Spread your transactions across different mints to enhance privacy and reduce correlation risks.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-orange-600" id="easy-management">
                  ⚙️ Easy Management
                </h3>
                <p className="text-muted-foreground">
                  Add, remove, and configure multiple mints through the intuitive settings interface with real-time
                  status monitoring.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-6">
              <h3 className="font-semibold mb-3" id="security-benefits">
                🛡️ Security Benefits
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Reduces dependency on any single mint operator</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Provides backup options if a mint experiences issues</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Enables load balancing across different mint infrastructures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Allows for geographic distribution of mint services</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <NavigationLinks currentSection="getting-started" variant="compact" showTitle={false} />
    </div>
  );
}

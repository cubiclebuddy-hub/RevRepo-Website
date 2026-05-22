import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-muted-foreground mb-6">
        Last updated: May 2026
      </p>

      <div className="space-y-6 text-sm leading-6 text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            1. Introduction
          </h2>
          <p>
            Welcome to RevRepo. We respect your privacy and are committed to
            protecting any personal data you share with us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            2. Information We Collect
          </h2>
          <p>
            We may collect basic information such as name, email address,
            usage data, and any information you provide through forms or
            support requests.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            3. How We Use Information
          </h2>
          <p>
            We use collected data to improve our services, respond to queries,
            and enhance user experience.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            4. Data Protection
          </h2>
          <p>
            We implement security measures to protect your data but cannot
            guarantee 100% security over the internet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            5. Third-Party Services
          </h2>
          <p>
            We may use third-party services (like analytics or authentication)
            which have their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            6. Contact Us
          </h2>
          <p>
            If you have any questions, contact us at{" "}
            <Link
              href="mailto:support@revrepo.com"
              className="text-blue-500 hover:underline"
            >
              info@revrepo.com
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

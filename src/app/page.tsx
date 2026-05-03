"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="S.F. Security & Service"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Securing Your Peace of Mind"
      description="Professional, reliable security solutions tailored to your business. Protect what matters most with S.F. Security & Service."
      testimonials={[
        {
          name: "James Anderson",
          handle: "@janderson",
          testimonial: "Exceptional service, highly responsive team and very professional officers.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blue-light-lines-dots-from-fiber-optic-wires-dark-background-computer-communications-idea-selective-focus-blur-dark-background_166373-1651.jpg?_wi=1",
          imageAlt: "security professional portrait corporate",
        },
        {
          name: "Lisa Montgomery",
          handle: "@lmontgomery",
          testimonial: "Trustworthy security partners for our corporate campus for 5 years.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/empty-national-secret-service-operation-room-used-follow-safety-alerts_482257-90051.jpg?_wi=1",
          imageAlt: "security professional portrait corporate",
        },
        {
          name: "Robert Chen",
          handle: "@rchen",
          testimonial: "They streamlined our site security and significantly improved our response times.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-car-salesman-showcasing-dealership-vehicles-clients_482257-112788.jpg",
          imageAlt: "security professional portrait corporate",
        },
        {
          name: "Sarah Jenkins",
          handle: "@sjenkins",
          testimonial: "Professional, discrete, and incredibly effective at loss prevention.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-white-shirt_23-2148095748.jpg?_wi=1",
          imageAlt: "security professional portrait corporate",
        },
        {
          name: "David Thorne",
          handle: "@dthorne",
          testimonial: "Best security team we've ever engaged for event logistics.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2843.jpg?_wi=1",
          imageAlt: "security professional portrait corporate",
        },
      ]}
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
        {
          text: "Our Services",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/blue-light-lines-dots-from-fiber-optic-wires-dark-background-computer-communications-idea-selective-focus-blur-dark-background_166373-1651.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-cute-girl-looking-away_23-2148436134.jpg",
          alt: "Client One",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-wearing-pajamas-while-sitting-bed_273609-13213.jpg",
          alt: "Client Two",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",
          alt: "Client Three",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153828.jpg",
          alt: "Client Four",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-work_23-2149097959.jpg",
          alt: "Client Five",
        },
      ]}
      avatarText="Trusted by 500+ professionals"
      marqueeItems={[
        {
          type: "text",
          text: "24/7 Monitoring",
        },
        {
          type: "text",
          text: "Rapid Response",
        },
        {
          type: "text",
          text: "Elite Security Personnel",
        },
        {
          type: "text",
          text: "Risk Management",
        },
        {
          type: "text",
          text: "Compliance Experts",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Excellence in Security Operations"
      description="S.F. Security & Service delivers top-tier protection services through advanced monitoring, trained professional personnel, and comprehensive risk assessments. We are dedicated to providing safety with precision."
      metrics={[
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "200+",
          title: "Contracts Managed",
        },
        {
          value: "100%",
          title: "Client Retention",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-national-secret-service-operation-room-used-follow-safety-alerts_482257-90051.jpg?_wi=2"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          label: "01",
          title: "Physical Security",
          items: [
            "On-site guarding",
            "Access control",
            "Patrol services",
          ],
        },
        {
          id: "2",
          label: "02",
          title: "Surveillance",
          items: [
            "Remote CCTV monitoring",
            "Alarm response",
            "System audits",
          ],
        },
        {
          id: "3",
          label: "03",
          title: "Risk Consulting",
          items: [
            "Vulnerability assessment",
            "Security planning",
            "Training programs",
          ],
        },
      ]}
      title="Comprehensive Protection Services"
      description="From commercial premises to large-scale events, our services are designed to secure your environment."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "24/7",
          title: "Support Availability",
          items: [
            "Emergency response",
            "Technical support",
            "On-site backup",
          ],
        },
        {
          id: "m2",
          value: "<5min",
          title: "Average Response",
          items: [
            "Rapid deployment",
            "Alarm validation",
            "Swift dispatch",
          ],
        },
        {
          id: "m3",
          value: "99.9%",
          title: "System Uptime",
          items: [
            "High-tech integration",
            "Regular maintenance",
            "Reliable connectivity",
          ],
        },
      ]}
      title="Reliability You Can Measure"
      description="Data-backed security operational performance."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "John Doe",
          role: "CEO",
          description: "20 years of military leadership in site security and crisis management.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-white-shirt_23-2148095748.jpg?_wi=2",
        },
        {
          id: "t2",
          name: "Jane Smith",
          role: "Director of Operations",
          description: "Expert in operational efficiency and site surveillance technology.",
          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2843.jpg?_wi=2",
        },
        {
          id: "t3",
          name: "Michael Brown",
          role: "Head of Training",
          description: "Former instructor focusing on advanced security standards and ethics.",
          imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",
        },
      ]}
      title="Meet Our Leadership"
      description="Led by experts with decades of military and corporate security background."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Jenkins",
          imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-sad-expression_1194-3905.jpg",
        },
        {
          id: "t2",
          name: "David Thorne",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",
        },
        {
          id: "t3",
          name: "Robert Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",
        },
        {
          id: "t4",
          name: "Lisa Montgomery",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg",
        },
        {
          id: "t5",
          name: "James Anderson",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-groom-classy-black-suit-stands-dark-room_8353-7083.jpg",
        },
      ]}
      cardTitle="Client Success Stories"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What areas do you serve?",
          content: "We provide nationwide coverage for commercial and industrial clients.",
        },
        {
          id: "f2",
          title: "Are your guards licensed?",
          content: "Yes, every single member of our team is fully licensed and vetted.",
        },
        {
          id: "f3",
          title: "How quickly can we start?",
          content: "We can deploy site security solutions within 48 hours for urgent requirements.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/clothing-store-with-blurred-effect_23-2148164721.jpg"
      title="Frequently Asked Questions"
      description="Answers to common questions regarding our security services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to secure your business? Get in touch with our expert team for a consultation."
      buttons={[
        {
          text: "Contact Us Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="S.F. Security & Service"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Security Guards",
              href: "#",
            },
            {
              label: "Surveillance",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

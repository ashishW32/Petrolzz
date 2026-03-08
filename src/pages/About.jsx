import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const sectionFlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.16,
    },
  },
};

const features = [
  {
    title: 'Predictive Congestion Intelligence',
    description:
      'Anticipate jams before they form with signal + demand modeling that learns every corridor in real time.',
  },
  {
    title: 'Incident-Aware Routing Logic',
    description:
      'Automatically reroute around accidents and roadblocks while preserving ETA confidence and fuel efficiency.',
  },
  {
    title: 'Adaptive Signal Coordination',
    description:
      'Connect traffic light behavior to current flow data to reduce idle time and smooth peak-hour throughput.',
  },
];

const roads = [
  'City traffic cameras and sensors',
  'Public transit and mobility feeds',
  'Emergency and roadworks alerts',
  'Fleet telemetry and speed patterns',
];

const timeline = [
  {
    stage: 'Phase 1',
    title: 'Data Foundation',
    text: 'Unified fragmented transportation feeds into one high-fidelity mobility graph.',
  },
  {
    stage: 'Phase 2',
    title: 'Intelligence Layer',
    text: 'Built traffic prediction and anomaly detection models with explainable decision support.',
  },
  {
    stage: 'Phase 3',
    title: 'Connected Operations',
    text: 'Enabled cross-agency collaboration and city-wide orchestration from one interface.',
  },
  {
    stage: 'Phase 4',
    title: 'Scaled Deployment',
    text: 'Expanded to additional regions with configurable workflows and resilient infrastructure.',
  },
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const layerBack = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const layerMid = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const layerFront = useTransform(scrollYProgress, [0, 1], [0, -95]);

  return (
    <main className="bg-slate-50 text-slate-900">
      {/* 1. Hero */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFlow}
      >
        <motion.div
          style={{ y: layerBack }}
          className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl"
        />
        <motion.div
          style={{ y: layerMid }}
          className="pointer-events-none absolute right-6 top-24 h-64 w-64 rounded-full bg-violet-300/20 blur-3xl"
        />
        <motion.div
          style={{ y: layerFront }}
          className="pointer-events-none absolute -left-12 top-40 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <motion.p variants={fadeUp} className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            About Petrolzz
          </motion.p>
          <motion.h1 variants={fadeUp} className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Building the intelligence layer for safer, cleaner, and continuously moving roads.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            We blend real-time mobility data with AI-native planning to help cities make traffic decisions that are
            proactive, coordinated, and human-centered.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Problem */}
      <motion.section
        className="px-6 py-20 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionFlow}
      >
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <motion.div variants={slideInLeft}>
            <h2 className="text-3xl font-semibold sm:text-4xl">The problem we are solving</h2>
            <p className="mt-5 text-slate-600">
              Urban roads are still managed with delayed signals, disconnected systems, and reactive operations. That
              means higher emissions, missed response windows, and unnecessary commuter stress.
            </p>
          </motion.div>
          <motion.div variants={slideInRight} className="rounded-2xl bg-slate-900 p-7 text-slate-100">
            <p className="text-lg leading-relaxed text-slate-200">
              Petrolzz transforms fragmented road data into coordinated intelligence so authorities can act early,
              move faster, and optimize every lane mile with confidence.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Intelligence features */}
      <motion.section
        className="px-6 py-20 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFlow}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Intelligence features that drive outcomes
          </motion.h2>
          <motion.div variants={stagger} className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-slate-600">{feature.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Connected roads */}
      <motion.section
        className="px-6 py-20 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionFlow}
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold sm:text-4xl">Connected roads, connected decisions</h2>
            <p className="mt-5 text-slate-600">
              Our platform unifies the ecosystem of street-level and operational intelligence into a living network of
              context.
            </p>
          </motion.div>
          <motion.ul variants={stagger} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            {roads.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* 5. Journey timeline */}
      <motion.section
        className="px-6 py-20 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionFlow}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Our journey timeline
          </motion.h2>
          <motion.div variants={stagger} className="mt-10 grid gap-5 md:grid-cols-2">
            {timeline.map((milestone) => (
              <motion.article key={milestone.title} variants={fadeUp} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">{milestone.stage}</p>
                <h3 className="mt-2 text-xl font-semibold">{milestone.title}</h3>
                <p className="mt-3 text-slate-600">{milestone.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 6. Future vision dark band */}
      <motion.section
        className="bg-slate-950 px-6 py-24 text-slate-100 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={sectionFlow}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeUp} className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Future vision: autonomous coordination at city scale
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-slate-300">
            We are advancing toward self-adjusting urban road systems where infrastructure continuously learns,
            predicts, and adapts to flow dynamics while keeping equity, safety, and sustainability at the center.
          </motion.p>
        </div>
      </motion.section>

      {/* 7. Final CTA */}
      <motion.section
        className="px-6 py-20 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={sectionFlow}
      >
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-600 p-10 text-white sm:p-12">
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Let us reimagine mobility together.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-sky-100">
            Partner with Petrolzz to design a smarter, more resilient transportation future for your communities.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 transition hover:bg-sky-50">
              Schedule a demo
            </button>
            <button className="rounded-xl border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Contact our team
            </button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

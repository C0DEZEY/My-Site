"use client"

import React from 'react';
import Title from '../components/title';
import Bubbles from '../components/bubbles';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      const fragment = getFragmentForElement(targetId);
      if (fragment) {
        // Update the URL with the fragment ID as a hash
        window.location.hash = fragment;
      }
    }
  });
}

function getFragmentForElement(targetId) {
  // Define the mapping of target IDs to URL fragments
  const fragmentMap = {
    Box: 'Main',
    Box1: 'Projects',
    Box2: 'AboutMe',
  };

  return fragmentMap[targetId] || null;
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Adjust the threshold as needed
    });

    // Specify the IDs of the elements you want to observe
    const targetIds = ['Box', 'Box1', 'Box2'];

    targetIds.forEach((targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        observer.observe(targetElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className={styles.main} id="Main">
        <Bubbles invert={false} />
        <div>
          <div className={` ${styles.start}`} id='Box'></div>
          <Title HeaderText="Hey i'm.." MainText="Codezey" SubText="Full Stack developer" />
        </div>
      </section>
      <section className={styles.projects} id="Projects">
        <Bubbles invert={true} />
        <div>
          <div className={` ${styles.start}`} id='Box1'></div>
          <Title HeaderText="Some of my" MainText="Projects" SubText="" />
        </div>
      </section>
      <section className={styles.aboutme} id="AboutMe">
        <div className={` ${styles.start}`} id='Box2'></div>
      </section>
    </>
  );
}
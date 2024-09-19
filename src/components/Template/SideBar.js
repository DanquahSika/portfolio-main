import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Abigail Danquah</h2>
        <p>
          <a href="mailto:adanquah11@gmail.com">adanquah11@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Abigail. I am a{' '}
        <a href="https://meltwater.org/">MEST</a> graduate, GROW Program
        alumnus, and Web Developer Trainee at{' '}<a href="https://codetraingh.com/">Codetrain</a>. Previously, I
        was a Social Media & Content Lead at Earth Studios, and
        Procurement Assistant at <a href="https://yea.gov.gh/">Youth Employment Agency</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Abigail Danquah <Link to="/">abidanqs.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
import React, { useEffect } from "react";
import "./app.css";

export default function App() {
  // keep it simple; no observers or state
  useEffect(() => {
    document.title = "Digital Matter — Scroll Story"; // why: tiny UX touch; easy to spot tab
    window.scrollTo(0, 0); // why: ensure start at top on hot reloads
  }, []);

  return (
    <main className="page">
      <section className="line">
        <p>“It was suddenly empty. Too empty.”</p>
      </section>

      {/* (Scroll reveals a wide, blank space. Subtle ambient hum.) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>
          “Where do people actually go? It still feels wrong seeing my friends, my family, even my pet… trapped on a screen. Everywhere, flattened into this glass-smooth digital world.”
        </p>
      </section>

      {/* (As you scroll, faint silhouettes flicker inside the “surface,” like reflections that don’t belong to you.) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>“Until I am...”</p>
      </section>

      {/* (flash out human (the persona)) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>2050 - A project got approved, deployed and everything restarted. A new revolution.</p>
      </section>

      <section className="line">
        <p>“It solved the problem everyone was whispering about like a curse: overpopulation.”</p>
      </section>

      {/* (human walking out of screen) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>
          Human stepping out of a physical body and into a fully interactive interface form, has become an everyday reality. Physical matter start to convert into digital matter.
        </p>
      </section>

      {/* (maybe video of object scatter and become code) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>Movement stopped being about streets, cars, and distance. Now it’s screens and connections.</p>
      </section>

      {/* (video animation of flash) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>
          “People design the shape of their digital selves the way older generations chose outfits or built houses.”
        </p>
      </section>

      {/* (human show up again from right walking through a white screen and change clothes) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>
          But the biggest change wasn’t aesthetic. It was power. This shift rewired what it means to govern and organize life. Because digital matter is copyable, editable, programmable… humanity suddenly had more to control than ever.
        </p>
      </section>

      <section className="line">
        <p>“Identities. Environments. Memories. Even laws, adjusted through code.”</p>
      </section>

      <section className="line">
        <p>
          “The everyday question is no longer just where you live,<br />
          but on which server, under which rules, and with which version of yourself”
        </p>
      </section>

      {/* (many white silhouette of human) */}
      <div className="spacer" aria-hidden="true" />

      <section className="line">
        <p>In this world, the boundary between “online” and “offline” has disappeared</p>
      </section>

      {/* (Black flash to white) */}
      <div className="spacer" aria-hidden="true" />
    </main>
  );
}

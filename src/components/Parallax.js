import React, { useState, useEffect } from "react";
import "../styles/Parallax.css";

function Parallax() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles0 = {
    transform: `translateY(${scrollPosition * 0.6}px)`,
  };
  const styles1 = {
    transform: `translateY(${scrollPosition * 0.5}px)`,
  };
  const styles2 = {
    transform: `translateY(${scrollPosition * 0.4}px)`,
  };
  const styles3 = {
    transform: `translateY(${scrollPosition * 0.3}px)`,
  };
  const styles4 = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };
  const styles5 = {
    transform: `translateY(${scrollPosition * 0.1}px)`,
  };
  const styles6 = {
    transform: `translateY(${scrollPosition * 0}px)`,
  };

  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer__0" style={styles0}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" />
      </div>
      <div className="parallax__layer parallax__layer__1" style={styles1}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" />
      </div>
      <div className="parallax__layer parallax__layer__2" style={styles2}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" />
      </div>
      <div className="parallax__layer parallax__layer__3" style={styles3}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" />
      </div>
      <div className="parallax__layer parallax__layer__4" style={styles4}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" />
      </div>
      <div className="parallax__layer parallax__layer__5" style={styles5}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
      </div>
      <div className="parallax__layer parallax__layer__6" style={styles6}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
      </div>
      <div className="parallax__cover">
        <span>Sup bish!</span>
      </div>
    </div>
  );
}

export default Parallax;

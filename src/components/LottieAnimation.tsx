import React from "react";
import lottie from "lottie-web";
import "style/lottie-animation.css";
const LottieAnimation: React.FC<{ path: string; className?: string; loop?: boolean}> = ({
  path,
  className,
  loop
}) => {
  const container = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let instance : any ;
    if (path) {
       instance = lottie.loadAnimation({
        container: container.current!,
        renderer: "svg",
        loop: loop ?? true,
        autoplay: true,
        path,
      });
    }

    return () => {
      if (instance) instance.destroy();
    };
  }, [path, loop]);
  return (
    <div ref={container} className={`lottie-animation ${className}`}></div>
  );
};

export default LottieAnimation;

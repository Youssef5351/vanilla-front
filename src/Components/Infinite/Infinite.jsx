import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Picture1 from '../../assets/ice1.jpeg';
import Picture2 from '../../assets/ice1.jpeg';
import Picture3 from '../../assets/ice1.jpeg';

const Phrase = ({ src }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw] text-[#48497c]">High Quality Ice</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img src={src} alt="image" className="object-cover w-full h-full" />
      </span>
    </div>
  );
};

const Slide = (props) => {
  const direction = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  return (
    <main className="overflow-hidden">
      <div className="mt-24" />
      <div ref={container}>
        <Slide src={Picture1} direction="left" left="-40%" progress={scrollYProgress} />
        <Slide src={Picture2} direction="right" left="-25%" progress={scrollYProgress} />
        <Slide src={Picture3} direction="left" left="-75%" progress={scrollYProgress} />
      </div>
      <div className="mb-24" />
    </main>
  );
}

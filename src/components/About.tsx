import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({
    title,
    index,
    icon,
}: {
    title: string;
    index: number;
    icon: string;
}) => {
    const options = {
        max: 20,
        scale: 1.1,
        speed: 250,
    };
    return (
        <Tilt
            className='xs:w-[250px] w-full'
            tiltMaxAngleX={options.max} // max tilt on X-axis
            tiltMaxAngleY={options.max} // max tilt on Y-axis
            scale={options.scale} // zoom
            transitionSpeed={options.speed} // animation speed
        >
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img
                        src={icon}
                        alt={title}
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm an aspiring backend software engineer with experience in
                TypeScript and C#, and expertise in frameworks like Node.js,
                ASP.NET Core, and React.js. I'm focusing on scalable, efficient
                systems, and also learning about cloud computing, DevOps, and
                best practices in software development, striving to "do the
                right thing and do things right."
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');

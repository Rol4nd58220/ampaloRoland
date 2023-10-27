// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import {HiArrowRight} from 'react-icons/hi2';

import '/styles/ProjectsBtn.module.css';

const ProjectsBtn = () => {
  return <div className='mx-auto xl:mx-0 z-10'>
    <Link href={'./about'} className="w-40 px-5 py-2 uppercase rounded-md text-sm font-semibold text-white text-opacity-80 bg-transparent border border-white border-opacity-80 transition-transform duration-500 ease-in-out select-none hover:text-opacity-100 hover:bg-red-500 hover:border-red-500 hover:text-shadow-lg z-10 ${styles.uiBtn}"
              id="btn"
          >
              About Me
    </Link>
  </div>
};

export default ProjectsBtn;

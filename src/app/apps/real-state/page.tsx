import AboutKanban from "@/components/AboutProject";
import Technologies from "@/components/Technology";
const RealState = () => {
    return (
        <div className="grid grid-cols-1 gap-4 h-full">
            <AboutKanban project={'Real State'} description={`
            This project is a feature-rich real estate management platform developed using React Redux
             and Tailwind CSS It is designed to provide a seamless and
             responsive user experience for buying, selling, and renting propertie`}

                imageproject={'/real-estate.png'} />


            <Technologies item={[{ name: 'JavaScript', image: '/js-logo.webp' }, { name: 'HTML5', image: '/html5-logo.webp' }, { name: 'CSS3', image: '/css-logo.png' },
            { name: 'ReactJS', image: '/react-logo.webp' }, { name: 'Git', image: '/git-logo.webp' }
                , { name: 'Github', image: '/github-logo.webp' }, { name: 'TailwindCSS', image: '/tailwindcss-logo.webp' }]} />
        </div>
    )

}

export default RealState;
"use client";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import Image from "next/image";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelopeCircleCheck,
  faGripLines,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const skills = [
    "Angular",
    "React",
    "React Native",
    "Next.js",
    "JavaScript",
    "Flutter",
    "PHP",
    "Ionic Angular",
  ];

  return (
    <main className="flex min-h-screen">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, left: "50%" }}
        transition={{ duration: 2 }}
        animate={{ opacity: 1, left: 0 }}
        className="h-screen bg-green-800 text-white sticky top-0 px-2"
      >
        {/* Social Links */}
        <motion.div
          className="flex flex-col justify-evenly h-screen"
          initial={{ opacity: 0, marginTop: 80 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, marginTop: 0 }}
        >
          <a
            href="https://twitter.com/real_latif83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcons icon={faTwitter} label="Twitter" />
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-latif-mohammed-0a7671236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcons icon={faLinkedin} label="LinkedIn" />
          </a>

          <a
            href="https://github.com/latif83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcons icon={faGithub} label="GitHub" />
          </a>

          <a href="tel:+0593787724">
            <SocialIcons icon={faPhoneVolume} label="Call me" />
          </a>

          <a href="mailto:latifm830@gmail.com">
            <SocialIcons icon={faEnvelopeCircleCheck} label="Email me" />
          </a>
        </motion.div>
      </motion.div>

      <div className="flex flex-col">
        <nav
          className="flex justify-end border-b border-green-800"
          style={{ height: "10vh" }}
        >
          <a
          target="_blank"
          rel="noopener noreferrer"
            href="/pdf/Abdul-Latif%20CV.pdf"
            className="bg-green-800 text-white flex items-center px-4 py-2 hover:text-black hover:bg-gray-100 hover:border-gray-600 transition duration-300"
          >
            My Resume
          </a>
        </nav>

        <div className={`${styles.com} flex items-center mt-5`}>
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Image */}
            <div>
              <motion.div
                initial={{ opacity: 0, marginTop: 50 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, marginTop: 0 }}
                className={`${styles.imgContainer} relative rounded-full overflow-hidden m-auto border-4 border-white shadow-md`}
              >
                <Image
                  src="/images/latif.jpg"
                  alt="My Picture"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>

            {/* Content About You */}
            <motion.div
              initial={{ opacity: 0, marginLeft: 80 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, marginLeft: 0 }}
              className="flex flex-col justify-center"
            >
              <h1
                className="text-6xl font-bold mb-4"
                style={{ lineHeight: "80px" }}
              >
                Hey, <br /> I'm Latif.
              </h1>
              <h3 className="text-2xl">I'm a Full Stack Developer</h3>
              <p className="text-gray-500 mt-3">
                I've spent the last 3 years building 💻 and scaling 📱 software
                for some pretty cool companies. I also teach people to build
                websites and applications 🚀. Let's connect! 🌐
              </p>
              <button
                className="bg-green-800 mt-3 rounded-lg text-white px-4 py-2 hover:text-black hover:bg-gray-100 hover:border-gray-600 transition duration-300"
                style={{ width: "max-content" }}
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>

        <div className={`${styles.container} pt-5`}>
          <motion.div
            initial={{ opacity: 0, marginTop: 50 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, marginTop: 0 }}
          >
            <h2 className="text-2xl text-green-800">My Skills</h2>
            <div
              className="flex justify-between gap-4"
              style={{ flexWrap: "wrap" }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  className="flex items-center"
                  key={index}
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    width={30}
                    className="m-2 text-green-800"
                  />{" "}
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, marginTop: 80 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, marginTop: 20 }}
          >
            <h1 className="text-2xl font-bold text-green-800">About Me.</h1>
            <p
              className="text-1xl mt-3 font-bold text-gray-500"
              style={{ lineHeight: "30px" }}
            >
              Hi there! I'm a fullstack developer with a passion for exploring
              the latest technologies and pushing the boundaries of what's
              possible. With experience in both frontend and backend
              development, I'm able to bring a comprehensive understanding to
              any project I work on. From designing intuitive user interfaces to
              crafting robust server-side solutions, I enjoy the challenge of
              building elegant, scalable applications that meet the needs of
              users and businesses alike. Let's connect and see how we can work
              together to bring your ideas to life!
            </p>
          </motion.div>

          <div className="mt-5">
            <h1 className="text-2xl font-bold text-green-800">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
              {/* Image */}
              <div>
                <motion.div
                  initial={{ opacity: 0, marginTop: 80 }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, marginTop: 0 }}
                  className={`relative m-auto rounded mt-2 shadow-md`}
                >
                  <Image
                    src="/images/niilano_desktop.png"
                    alt="My Picture"
                    width={1000}
                    height={1000}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Image
                    className={`${styles.projectAbsImg} border-4 border-red-500 rounded shadow-md`}
                    src="/images/niilano_mobile.png"
                    alt="My Picture"
                    width={200}
                    height={200}
                  />
                </motion.div>
              </div>

              {/* Content About You */}
              <motion.div
                initial={{ opacity: 0, marginTop: 80 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, marginTop: 0 }}
              >
                <h1 className="text-2xl font-bold text-green-800">
                  Niilano Marketplace <br /> <small> www.niilano.com</small>
                </h1>
                <motion.p
                  initial={{ opacity: 0, marginTop: 80 }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, marginTop: 0 }}
                >
                  Niilano is an online marketplace that I developed as a part of
                  my works done, using a combination of cutting-edge
                  technologies such as Ionic Angular, Node.js, Express.js, and
                  PostgreSQL. Niilano is designed to connect buyers and sellers
                  from all over the world, providing a secure, fast, and
                  easy-to-use platform for buying and selling goods and services
                  also including renting and hiring of services. One of the key
                  features of Niilano is its advanced search functionality,
                  which allows users to quickly and easily find the products or
                  services they're looking for.
                </motion.p>
                <motion.p
                  className="mt-3"
                  initial={{ opacity: 0, marginTop: 80 }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, marginTop: 30 }}
                >
                  To build Niilano, I used Ionic Angular for the frontend, which
                  provided a robust and responsive user interface that could
                  handle a large volume of data. For the backend, I relied on
                  Node.js and Express.js, which offered a fast and scalable
                  framework for building web applications. Finally, PostgreSQL
                  served as the database, providing a powerful and flexible
                  platform for managing large amounts of data. One of the
                  biggest challenges I faced during the development process was
                  ensuring that the platform was secure and reliable. To address
                  this, I implemented a range of robust security measures,
                  including advanced encryption technologies and user
                  authentication protocols. Looking to the future, I have plans
                  to expand Niilano's features and functionality, providing even
                  more advanced tools and resources for buyers and sellers.
                  Overall, Niilano is a valuable addition to my portfolio,
                  showcasing my expertise in building secure, fast, and
                  user-friendly applications.
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-center pb-5">
              &copy; 2023 <br />
              Abdul-Latif Mohammed
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

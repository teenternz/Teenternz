import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Teenternz</title>
        <meta name="description" content="Platform to find Volunteer Opportunities and Remote Internships by NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" md:p-16 p-8 sm:my-24 my-16 align-middle justify-items-center">
        <h1 className="font-bold md:text-5xl dark:hidden block text-center text-3xl sm:text-4xl">
          Platform to find <span className={styles.gredientAnimation}>Volunteer Opportunities and Remote Internships</span> by NGOs
        </h1>
        <h1 className="font-bold md:text-5xl dark:block hidden text-center text-3xl sm:text-4xl">
          Platform to find <span className={styles.gredientAnimation}>Volunteer Opportunities and Remote Internships</span> by NGOs
        </h1>
        <p className="font-normal text-center mt-4 mb-8 sm:text-lg">Teenternz helps Students find Volunteer Opportunites and Remote Internships from around the globe. Apart from that Students can find various resources such as articles, books.</p>
        <div className="flex flex-1 justify-center">
          <Link href="/opportunities" passHref><div className="bg-gradient-to-br from-pink-400 to-yellow-400 text-black font-medium rounded-lg hover:scale-110 hover:shadow-xl hover:font-medium transition-transform cursor-pointer shadow-md text-base p-2.5 my-0.5">Find</div></Link>
        </div>

      </div>
      <h1 className="md:text-3xl text-2xl text-center mb-12 font-medium pt-6" id="#explore">What we Offer?</h1>

      <div className="md:mx-16 mx-4 grid sm:grid-cols-2 space-x-8 grid-cols-1">

        <div className="my-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:mx-16 mx-6"
            data-name="Layer 1"
            viewBox="0 0 726.423 705.12"
          >
            <path
              className="fill-current text-gray-200 dark:text-gray-700"
              d="M745.618 799.922c-.76.8-1.55 1.59-2.35 2.38h-91.22c-.75-.77-1.49-1.56-2.23-2.38-.03-.03-.06-.07-.09-.1-9.91-10.98-16.15-26.94-20.04-43.77a99.95 99.95 0 01-.69-3.09c-1.02-4.73-1.85-9.51-2.53-14.25-.12-.82-.24-1.64-.34-2.46-.92-6.81-1.54-13.51-1.94-19.8l-.15-2.39a324.83 324.83 0 01-.02-37.6s.12 0 .35.01c.67.03 2.28.1 4.65.24 6.53.4 18.85 1.4 33.34 3.76.79.13 1.59.27 2.39.41a252.149 252.149 0 0136.17 8.76c.74.25 1.47.5 2.21.75l.01.05 9.07 45.51 3.76-40.51c2.99 1.35 5.9 2.79 8.69 4.33.78.43 1.54.86 2.29 1.3a72.11 72.11 0 0117.17 13.54c29.75 32.97 23.38 62.44 1.5 85.31z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M707.497 742.215l1.581 1.751c18.28 20.459 29.189 39.448 32.55 56.72.053.25.09.5.143.752l-1.17.221-1.126.199c-3.43-18.83-16.201-38.296-32.14-56.144a77.726 77.726 0 00-1.558-1.743c-6.814-7.496-14.14-14.687-21.548-21.41a175.4 175.4 0 00-1.739-1.579c-9.824-8.824-19.707-16.808-28.52-23.538-.622-.478-1.251-.949-1.873-1.411-14.965-11.33-26.577-18.839-29.165-20.485-.312-.206-.488-.315-.528-.342l.612-.978.001-.016.621-.986c.04.027.634.388 1.707 1.088 4.028 2.597 14.856 9.744 28.326 19.905.605.461 1.235.932 1.855 1.41 7.159 5.454 14.988 11.703 22.894 18.543q2.984 2.573 5.818 5.137c.594.519 1.18 1.045 1.748 1.57q12.014 10.902 21.51 21.336z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M663.218 678.532c-.27.65-.56 1.3-.86 1.94a62.382 62.382 0 01-8.69 13.75c-.51.6-1.03 1.21-1.57 1.81q-2.19 2.415-4.66 4.67a62.595 62.595 0 01-23.4 13.36c-.28.09-.55.18-.83.26.05.79.1 1.57.15 2.38.28-.08.55-.16.83-.25a64.85 64.85 0 0024.81-14.02 66.938 66.938 0 004.97-4.99c.54-.59 1.06-1.2 1.56-1.81a64.419 64.419 0 009.22-14.75c.28-.64.56-1.28.83-1.93-.8-.14-1.59-.28-2.36-.42zM701.328 687.872c-.12.59-.26 1.18-.41 1.77a62.564 62.564 0 01-16.68 29.67c-.57.57-1.15 1.13-1.75 1.67-.17.17-.36.35-.54.51a63.024 63.024 0 01-55.82 14.76c-.23-.04-.47-.1-.7-.15.12.82.23 1.65.36 2.47.23.05.45.1.68.14a65.36 65.36 0 0057.04-15.49c.24-.22.49-.43.72-.66.6-.56 1.18-1.12 1.76-1.68a65.028 65.028 0 0017.15-30.44q.224-.9.42-1.8c-.74-.26-1.48-.52-2.23-.77z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M724.658 698.082c.01.56.01 1.13 0 1.69a62.703 62.703 0 01-17.16 42.44c-.56.6-1.14 1.18-1.72 1.76-.63.61-1.26 1.22-1.91 1.8a63.162 63.162 0 01-74.87 7.19 6.713 6.713 0 01-.58-.34c.24 1.06.48 2.1.74 3.14.18.1.35.2.53.29a65.505 65.505 0 0075.74-8.54c.65-.59 1.3-1.18 1.91-1.8.6-.57 1.17-1.15 1.74-1.75a65.251 65.251 0 0017.87-42.89q.03-.81.03-1.62c-.76-.47-1.54-.92-2.32-1.37zM522.492 262.76H346.707a5.524 5.524 0 01-5.518-5.517V123.768a5.524 5.524 0 015.518-5.518h215.768a5.524 5.524 0 015.517 5.518v93.492a45.551 45.551 0 01-45.5 45.5z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M522.492 263.26H346.707a6.025 6.025 0 01-6.018-6.017V123.768a6.025 6.025 0 016.018-6.018h215.768a6.024 6.024 0 016.017 6.018v93.492a46.052 46.052 0 01-46 46zM346.707 119.75a4.023 4.023 0 00-4.018 4.018v133.475a4.022 4.022 0 004.018 4.017h175.785a44.05 44.05 0 0044-44v-93.492a4.023 4.023 0 00-4.017-4.018z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M519.823 163.327H389.358a4.516 4.516 0 010-9.033h130.465a4.516 4.516 0 010 9.033zM519.823 194.437H389.358a4.516 4.516 0 010-9.032h130.465a4.516 4.516 0 110 9.032zM519.823 226.437H389.358a4.516 4.516 0 010-9.032h130.465a4.516 4.516 0 110 9.032z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <circle cx="325.03" cy="26.968" r="26.969" fill="#3b82f6"></circle>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M557.176 138.186a2.999 2.999 0 01-2.4-1.2l-7.357-9.81a3 3 0 114.8-3.6l4.813 6.418 12.363-18.544a3 3 0 114.992 3.328l-14.715 22.073a3.001 3.001 0 01-2.413 1.335h-.083zM457.61 378.69H281.825a45.551 45.551 0 01-45.5-45.5v-93.494a5.525 5.525 0 015.518-5.518H457.61a5.525 5.525 0 015.518 5.518v133.475a5.525 5.525 0 01-5.518 5.518z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M457.61 379.19H281.825a46.052 46.052 0 01-46-46v-93.494a6.025 6.025 0 016.018-6.018H457.61a6.025 6.025 0 016.018 6.018v133.475a6.025 6.025 0 01-6.018 6.018zM241.843 235.677a4.023 4.023 0 00-4.018 4.018v93.493a44.05 44.05 0 0044 44H457.61a4.023 4.023 0 004.018-4.018V239.696a4.023 4.023 0 00-4.018-4.018z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M414.959 279.255H284.494a4.516 4.516 0 110-9.032H414.96a4.516 4.516 0 110 9.032zM414.959 310.366H284.494a4.516 4.516 0 010-9.032H414.96a4.516 4.516 0 110 9.032zM414.959 342.366H284.494a4.516 4.516 0 010-9.032H414.96a4.516 4.516 0 110 9.032z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <circle cx="222.03" cy="143.969" r="26.969" fill="#3b82f6"></circle>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M454.176 255.186a2.999 2.999 0 01-2.4-1.2l-7.357-9.81a3 3 0 114.8-3.6l4.813 6.418 12.363-18.544a3 3 0 014.992 3.328l-14.715 22.073a3.001 3.001 0 01-2.413 1.335h-.083zM676.635 503.103H430.67a45.551 45.551 0 01-45.5-45.5V320.089a7.121 7.121 0 017.113-7.113h284.35a7.12 7.12 0 017.113 7.113v175.9a7.121 7.121 0 01-7.112 7.114z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M676.635 503.603H430.67a46.052 46.052 0 01-46-46V320.089a7.621 7.621 0 017.613-7.613h284.35a7.621 7.621 0 017.613 7.613v175.9a7.621 7.621 0 01-7.612 7.614zM392.284 314.476a5.62 5.62 0 00-5.613 5.613v137.514a44.05 44.05 0 0044 44h245.964a5.62 5.62 0 005.612-5.614v-175.9a5.619 5.619 0 00-5.612-5.613z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M620.426 372.222H448.492a5.952 5.952 0 110-11.903h171.934a5.952 5.952 0 110 11.903zM620.426 413.221H448.492a5.952 5.952 0 110-11.903h171.934a5.952 5.952 0 110 11.903zM620.426 455.393H448.492a5.952 5.952 0 110-11.903h171.934a5.952 5.952 0 110 11.903z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <circle cx="441.703" cy="226.559" r="34.139" fill="#3b82f6"></circle>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M672.87 341.509a3.796 3.796 0 01-3.037-1.52l-9.313-12.418a3.797 3.797 0 116.076-4.556l6.093 8.123 15.65-23.474a3.798 3.798 0 016.319 4.213l-18.627 27.94a3.8 3.8 0 01-3.055 1.69l-.105.002z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M530.145 677.866L516.256 682.511 491.729 631.148 512.229 624.292 530.145 677.866z"
            ></path>
            <path
              fill="#2f2e41"
              d="M774.015 787.327l-44.785 11.977-.19-.566c-1.557-4.656-1.208-6.64.984-11.034a18.26 18.26 0 0110.617-9.228h.002l6.104-8.943 17.34 1.103 3.909-1.308z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M564.461 690.925L549.816 690.925 542.848 634.435 564.464 634.436 564.461 690.925z"
            ></path>
            <path
              fill="#2f2e41"
              d="M804.02 799.304l-47.223-.002v-.597c0-4.91 1.913-6.526 5.385-9.997a18.26 18.26 0 0112.996-5.383h.001l8.626-6.544 16.094 6.545h4.123z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M688.824 335.498a10.696 10.696 0 0014.37 7.907l16.907 17.652 13.233-7.658-24.227-24.593a10.754 10.754 0 00-20.283 6.692z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              fill="#e4e4e4"
              d="M562.421 327.072L570.043 319.186 525.965 278.363 481.602 238.751 469.315 256.113 515.804 299.507 562.421 327.072z"
            ></path>
            <path
              fill="#2f2e41"
              d="M771.163 692.156c0-9.91.196-16.98.353-22.66.461-16.623.585-21.092-5.776-49.719l-1.634-7.352-9.635 28.904a90.54 90.54 0 00-4.657 28.596l14.856 89.132h-30.363l-22.237-96.36-.01-29.476a10.873 10.873 0 010-15.112l7.388-44.159 7.477-59.513h81.908s14.455 29.962.09 59.682l-.002 118.074-7.422 81.64h-22.913z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              fill="#e4e4e4"
              d="M803.825 521.64l-76.613-6.384-.398-.032 6.114-110.054a34.611 34.611 0 0123.459-30.986v-7.702a7.198 7.198 0 017.19-7.19h11.194a7.151 7.151 0 016.43 3.975l5.475 10.947 20.698 16.56c10.223 8.178 1.995 90.176 1.553 94.502l5.006 25.031a9.505 9.505 0 01-9.297 11.368q-.403-.001-.811-.034z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M722.692 550.699a10.696 10.696 0 00.203-16.4l7.601-23.231-12.99-8.063-10.274 32.958a10.754 10.754 0 0015.46 14.736z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              fill="#e4e4e4"
              d="M513.585 295.588L503.038 292.072 487.804 360.04 473.773 427.634 494.876 430.739 511.241 358.868 513.585 295.588z"
            ></path>
            <circle cx="525.103" cy="229.914" r="25.162" fill="#ffb6b6"></circle>
            <path
              fill="#2f2e41"
              d="M727.072 314.773a18.894 18.894 0 012.014-6.832c1.176 2.557 4.845 3.001 7.356 1.728 2.512-1.273 4.194-3.69 5.989-5.86 4.736-5.724 11.248-10.368 18.629-11.213 7.38-.846 15.516 2.88 18.305 9.766 1.251-1.738 3.921-1.931 5.81-.922a10.45 10.45 0 014.076 4.83 30.766 30.766 0 011.023 24.616c-3.108 7.864-10.782 18.46-18.701 21.429-4.807 1.802-9.663-.504-14.776 0 .268-5.58 1.35-12.465 1.618-18.044.146-3.056.168-6.475-1.92-8.712a6.025 6.025 0 00-9.191 1.073 13.842 13.842 0 00-1.726-4.92 4.708 4.708 0 00-4.42-2.265c-2.135.35-3.454 2.541-5.413 3.459a5.882 5.882 0 01-6.537-1.5 8.894 8.894 0 01-2.136-6.633z"
              transform="translate(-235.825 -97.182)"
            ></path>
            <path
              d="M528.36 358.563L498.809 417.665 520.973 417.665 528.36 358.563z"
              opacity="0.1"
            ></path>
            <path
              fill="#cacaca"
              d="M962.247 801.112a1.186 1.186 0 01-1.19 1.19h-564.29a1.19 1.19 0 010-2.38h564.29a1.186 1.186 0 011.19 1.19z"
              transform="translate(-235.825 -97.182)"
            ></path>
          </svg>
        </div>
        <div><p className="md:text-xl my-14 md:py-8 sm:py-6 lg:py-28 text-lg text-center">Teenternz provides internships for students, young professionals and young entrepreneurs. We have a large network of NGOs and Non-profit organisations who are willing to offer internships to our students.</p></div>

        <div><p className="md:text-xl my-14 md:py-8 sm:py-6 lg:py-20 text-lg text-center">We bring young achievers in our events, where you can watch them and ask your questions. These events are open to all, and we are always looking for new events to add.</p></div>
        <div className="row-start-3 my-14 sm:col-start-2 sm:row-start-2">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 801.197 614.273"
            className="mx-6"
          >
            <path
              d="M543.773 612.31a79.637 79.637 0 01-2.402 1.958H442.5a99.26 99.26 0 01-1.694-1.957 109.348 109.348 0 01-12-17.641c-8.117-14.623-10.913-33.794-10.913-53.318 0-1.192.008-2.385.033-3.577.09-5.478.395-10.963.847-16.358.082-.938.165-1.867.255-2.797.732-7.739 1.76-15.272 2.928-22.312.148-.896.296-1.785.452-2.665a365.995 365.995 0 019.557-41.425l.386.099c.732.205 2.484.69 5.058 1.455 7.09 2.106 20.404 6.35 35.76 12.657.838.338 1.685.691 2.54 1.053a283.267 283.267 0 0137.618 18.891c.748.453 1.488.913 2.228 1.374v.066l-1.62 52.445 14.475-43.662q4.429 3.368 8.463 6.982c.74.658 1.48 1.333 2.196 2.032a81.027 81.027 0 0115.461 19.286c21.655 39.04 12.567 67.742-10.757 87.415z"
              className="fill-current text-gray-200 dark:text-gray-700"
            />
            <path
              d="M529.833 614.268h-2.632c-.016-.65-.041-1.3-.082-1.957-1.06-19.73-9.524-41.516-21.046-62.545-.411-.765-.83-1.547-1.275-2.311-5.592-10.001-11.826-19.788-18.266-29.09a173.411 173.411 0 00-1.513-2.179c-8.57-12.23-17.419-23.546-25.413-33.21-.56-.69-1.135-1.365-1.702-2.03-11.851-14.212-21.63-24.567-25.553-28.63-.584-.6-1.036-1.06-1.349-1.381-.287-.313-.46-.477-.493-.51l.921-.921.008-.025.938-.92c.033.04.6.583 1.603 1.628.848.863 2.007 2.072 3.43 3.585 4.968 5.264 13.183 14.22 22.69 25.578.552.658 1.119 1.34 1.686 2.023 6.49 7.838 13.521 16.72 20.487 26.268q2.628 3.602 5.1 7.147c.517.724 1.027 1.447 1.52 2.171q10.45 15.075 18.25 28.999l1.3 2.327c13.257 24.18 20.396 45.595 21.317 64.026.033.658.057 1.307.074 1.957z"
              className="fill-current text-gray-50 dark:text-gray-300"
            />
            <path
              d="M474.615 464.505a53.37 53.37 0 01-1.447 1.925 70.242 70.242 0 01-13.068 12.92c-.716.526-1.448 1.069-2.196 1.595a72.04 72.04 0 01-6.333 3.948 70.825 70.825 0 01-29.163 8.75c-.329.033-.666.058-.995.074-.148.88-.288 1.76-.444 2.657.329-.017.658-.033.987-.066a73.306 73.306 0 0030.898-9.104 75.178 75.178 0 006.752-4.227c.74-.519 1.464-1.061 2.18-1.604a73.267 73.267 0 0013.923-13.89c.477-.634.946-1.276 1.407-1.917-.856-.362-1.686-.716-2.5-1.061zM514.223 484.515a77.204 77.204 0 01-.896 1.858 70.842 70.842 0 01-25.956 28.415 52.16 52.16 0 01-2.352 1.398c-.239.14-.493.288-.732.42a71.278 71.278 0 01-65.259 2.014c-.247-.115-.486-.23-.724-.345-.09.938-.173 1.875-.238 2.82.23.108.468.223.707.322a73.88 73.88 0 0066.789-2.5c.329-.181.65-.362.97-.552.798-.46 1.588-.929 2.36-1.406a73.401 73.401 0 0026.663-29.147c.321-.616.626-1.241.922-1.875a207.47 207.47 0 00-2.254-1.422z"
              className="fill-current text-gray-50 dark:text-gray-300"
            />
            <path
              d="M537.309 501.711c-.14.625-.28 1.25-.436 1.867a71.08 71.08 0 01-29.73 42.38 62.962 62.962 0 01-2.345 1.497c-.847.51-1.694 1.02-2.566 1.496a71.459 71.459 0 01-84.306-11.176c-.19-.173-.37-.354-.551-.535 0 1.225-.008 2.434.008 3.652.164.156.337.312.51.46a74.083 74.083 0 0085.622 9.91c.872-.477 1.728-.97 2.558-1.496.806-.477 1.587-.97 2.368-1.48a73.808 73.808 0 0030.628-42.676c.156-.592.312-1.185.452-1.785-.715-.724-1.464-1.406-2.212-2.114zM468.356 367.788H0V16.4h468.356z"
              className="fill-current text-gray-50 dark:text-gray-300"
            />
            <circle cx={113.491} cy={71.094} r={18.643} fill="#e6e6e6" />
            <path
              d="M156.548 58.665a3.107 3.107 0 000 6.214h226.858a3.107 3.107 0 000-6.214zM156.548 77.308a3.107 3.107 0 10-.013 6.214h143.422a3.107 3.107 0 100-6.214z"
              fill="#e6e6e6"
            />
            <path
              d="M468.356 367.788H0V16.4h468.356zM5.242 362.546h457.871V21.641H5.243z"
              fill="#e6e6e6"
            />
            <path
              d="M26.178 123.558v209h416v-209zm414 51.75h-101.5v-49.75h101.5zm-205 0v-49.75h101.5v49.75zm101.5 2v49.75h-101.5v-49.75zm-103.5-2h-101.5v-49.75h101.5zm0 2v49.75h-101.5v-49.75zm-103.5 49.75h-101.5v-49.75h101.5zm0 2v49.75h-101.5v-49.75zm2 0h101.5v49.75h-101.5zm101.5 51.75v49.75h-101.5v-49.75zm2 0h101.5v49.75h-101.5zm0-2v-49.75h101.5v49.75zm103.5-49.75h101.5v49.75h-101.5zm0-2v-49.75h101.5v49.75zm-209-101.5v49.75h-101.5v-49.75zm-101.5 155.25h101.5v49.75h-101.5zm310.5 49.75v-49.75h101.5v49.75z"
              fill="#e4e4e4"
            />
            <path
              d="M196.95 179.786l-41.393-.938c-4.14-16.038-2.277-31.31 1.027-45.382l41.393.937a90.63 90.63 0 00-1.028 45.383z"
              fill="#3b82f6"
            />
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M163.676 143.496l.022-1.575 21.445.766-.023 1.575-21.444-.766zM163.586 149.796l.022-1.575 21.444.767-.022 1.575-21.444-.767zM163.495 156.096l.023-1.575 21.444.767-.022 1.575-21.445-.767zM163.405 162.396l.022-1.575 21.445.767-.023 1.575-21.444-.767zM163.315 168.696l.022-1.575 21.445.767-.023 1.575-21.444-.767z"
            />
            <path
              d="M106.95 295.786l-41.393-.938c-4.14-16.038-2.277-31.31 1.027-45.382l41.393.937a90.63 90.63 0 00-1.028 45.383z"
              className="fill-current text-gray-300 dark:text-gray-600"
            />
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M73.676 259.496l.022-1.575 21.445.766-.023 1.575-21.444-.766zM73.586 265.796l.022-1.575 21.444.767-.022 1.575-21.444-.767zM73.495 272.096l.023-1.575 21.444.767-.022 1.575-21.445-.767zM73.405 278.396l.022-1.575 21.445.767-.023 1.575-21.444-.767zM73.315 284.696l.022-1.575 21.445.767-.023 1.575-21.444-.767z"
            />
            <path
              d="M322.95 242.786l-41.393-.938c-4.14-16.038-2.277-31.31 1.027-45.382l41.393.937a90.63 90.63 0 00-1.028 45.383z"
              className="fill-current text-gray-300 dark:text-gray-600"
            />
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M289.676 206.496l.022-1.575 21.445.766-.023 1.575-21.444-.766zM289.586 212.796l.022-1.575 21.444.767-.022 1.575-21.444-.767zM289.495 219.096l.023-1.575 21.444.767-.022 1.575-21.445-.767zM289.405 225.396l.022-1.575 21.445.767-.023 1.575-21.444-.767zM289.315 231.696l.022-1.575 21.445.767-.023 1.575-21.444-.767z"
            />
            <path
              d="M304.95 232.786l-41.393-.938c-4.14-16.038-2.277-31.31 1.027-45.382l41.393.937a90.63 90.63 0 00-1.028 45.383z"
              fill="#3b82f6"
            />
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M271.676 196.496l.022-1.575 21.445.766-.023 1.575-21.444-.766zM271.586 202.796l.022-1.575 21.444.767-.022 1.575-21.444-.767zM271.495 209.096l.023-1.575 21.444.767-.022 1.575-21.445-.767zM271.405 215.396l.022-1.575 21.445.767-.023 1.575-21.444-.767zM271.315 221.696l.022-1.575 21.445.767-.023 1.575-21.444-.767z"
            />
            <path
              d="M457.616 324.135l-41.393-.937c-4.14-16.039-2.276-31.31 1.028-45.382l41.392.937a90.63 90.63 0 00-1.027 45.382z"
              fill="#3b82f6"
            />
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M424.342 287.845l.023-1.575 21.444.767-.023 1.575-21.444-.767zM424.252 294.145l.022-1.575 21.445.767-.023 1.575-21.444-.767zM424.161 300.446l.023-1.575 21.444.766-.022 1.575-21.445-.766zM424.071 306.746l.023-1.575 21.444.766-.023 1.575-21.444-.766zM423.981 313.046l.022-1.575 21.445.767-.023 1.575-21.444-.767z"
            />
            <path
              d="M412.95 187.786l-41.393-.938c-4.14-16.038-2.277-31.31 1.027-45.382l41.393.937a90.63 90.63 0 00-1.028 45.383z"
              className="fill-current text-gray-300 dark:text-gray-600"
            />
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M379.676 151.496l.022-1.575 21.445.766-.023 1.575-21.444-.766zM379.586 157.796l.022-1.575 21.444.767-.022 1.575-21.444-.767zM379.495 164.096l.023-1.575 21.444.767-.022 1.575-21.445-.767zM379.405 170.396l.022-1.575 21.445.767-.023 1.575-21.444-.767zM379.315 176.696l.022-1.575 21.445.767-.023 1.575-21.444-.767z"
            />
            <path
              d="M455.383 290.69a10.056 10.056 0 006.786-13.846l26.1-24.409-18.056-4.34-22.016 23.846a10.11 10.11 0 007.186 18.75z"
              fill="#ffb6b6"
            />
            <path
              d="M468.866 271.028l-12.172-17.161 45.719-47.287 10.615-74.535a25.353 25.353 0 0133.197-20.45 25.38 25.38 0 0115.926 32.122l-27.084 80.358z"
              fill="#e4e4e4"
            />
            <path
              fill="#ffb6b6"
              d="M554.708 588.617l-13.512-.001-6.428-52.117 19.943.001-.003 52.117z"
            />
            <path
              d="M561.977 614.273h-9.588l-1.711-9.052-4.383 9.052h-25.43a5.716 5.716 0 01-3.247-10.42l20.306-14.025v-9.151l21.36 1.274z"
              fill="#2f2e41"
            />
            <path
              fill="#ffb6b6"
              d="M638.069 574.867l-11.869 6.458-30.557-42.706 17.517-9.531 24.909 45.779z"
            />
            <path
              d="M656.716 593.928l-8.422 4.583-5.83-7.133.477 10.046-22.336 12.154a5.716 5.716 0 01-7.834-7.6l11.134-22.025-4.374-8.038 19.37-9.09zM560.4 570.058h-27.923v-99.434l-17.287-64.827a371.106 371.106 0 01-9.71-142.3l.025-.196.15-.126c.444-.373 44.689-36.957 72.675-8.97 18.864 18.864 1.139 86.695.147 90.419v116.934z"
              fill="#2f2e41"
            />
            <path
              d="M496.977 281.558l9-90c-1.17-2.454-18-18-.402-45.332l19.008-44.618 35.598-.553.15.15a71.703 71.703 0 0119.648 64.894l-10.49 52.447 9.089 36.354z"
              fill="#e4e4e4"
            />
            <path
              fill="#2f2e41"
              d="M543.742 471.137l57.364 80.687 22.005-15.645-47.909-98.451-31.46 33.409z"
            />
            <circle cx={539.056} cy={59.668} r={32.87} fill="#ffb6b6" />
            <path
              opacity={0.1}
              d="M530.977 178.558l9 54-9 45h-18l8.182-45 9.818-54z"
            />
            <path
              d="M539.564 323.923a10.056 10.056 0 00-.533-15.41l11.533-33.823-17.973 4.673-8.196 31.403a10.11 10.11 0 0015.169 13.157z"
              fill="#ffb6b6"
            />
            <path
              d="M542.2 300.23l-18.818-9.41 18.07-63.243-25.73-70.755a25.353 25.353 0 0119.659-33.672 25.38 25.38 0 0129.175 20.84l13.941 83.646z"
              fill="#e4e4e4"
            />
            <path
              d="M801.197 613.078a1.187 1.187 0 01-1.19 1.19h-647.29a1.19 1.19 0 110-2.38h647.29a1.193 1.193 0 011.19 1.19z"
              fill="#cacaca"
            />
            <path
              d="M666.894 58.061c-4.147 6.732-12.93 9.7-20.722 8.352-7.791-1.348-14.561-6.376-19.562-12.501-5-6.125-8.459-13.335-11.863-20.472-3.404-7.136-6.847-14.351-11.822-20.497-4.975-6.145-11.71-11.212-19.49-12.624-4.234-.768-9.03-.26-12.119 2.735a11.802 11.802 0 00-3.238 8.331 8.703 8.703 0 00-11.582 8.637c-.115-.002-.23-.01-.344-.01-14.497-8.241-36.5-3.454-36.5 5.546-7.953 0-17.675 7.856-17.675 19.784 16.448 0 26.128 21.075 16.526 36.186a103.288 103.288 0 01-8.18 11.03h20.569a17.137 17.137 0 003.018-8.371 38.504 38.504 0 011.346 8.371s56.185 7.24 41.684-48.763a5.868 5.868 0 002.717-.823c2.19-1.32 3.383-4.111 3.592-6.944l1.62.434c3.866 1.043 7.882 2.396 10.535 5.394 4.484 5.069 3.54 12.761 5.17 19.33 1.963 7.92 7.837 14.327 14.363 19.228 7.01 5.265 15.201 9.265 23.93 10.095 8.728.83 18.016-1.824 24.064-8.172s8.155-16.574 3.963-24.276z"
              fill="#2f2e41"
            />
          </svg></div>


        <div className="my-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-6"
            data-name="Layer 1"
            viewBox="0 0 808.841 681.894"
          >
            <path
              className="fill-current text-gray-200 dark:text-gray-700"
              d="M866.246 659.314L597.9 536.809l138.175-302.67 268.345 122.505z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M907.123 483.478l-203.144-92.74a1.586 1.586 0 011.317-2.885l203.145 92.74a1.586 1.586 0 01-1.318 2.885zM918.42 458.734l-203.145-92.74a1.586 1.586 0 111.317-2.885l203.145 92.74a1.586 1.586 0 11-1.317 2.885zM929.716 433.99L726.57 341.25a1.586 1.586 0 111.317-2.885l203.145 92.74a1.586 1.586 0 01-1.317 2.885zM941.012 409.246l-203.145-92.74a1.586 1.586 0 111.318-2.885l203.144 92.74a1.586 1.586 0 01-1.317 2.885zM896.915 505.84L693.77 413.101a1.586 1.586 0 111.317-2.885l203.145 92.739a1.586 1.586 0 01-1.317 2.885zM930.837 372.948l-158.681-72.44a3.965 3.965 0 01-2.23-4.78 3.816 3.816 0 015.2-2.252l158.634 72.419a4 4 0 012.26 4.85 3.816 3.816 0 01-5.183 2.203z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-200 dark:text-gray-700"
              d="M320.27 356.644l268.346-122.505 138.175 302.67-268.346 122.505z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M417.568 483.478l203.144-92.74a1.586 1.586 0 10-1.317-2.885l-203.145 92.74a1.586 1.586 0 101.318 2.885zM406.271 458.734l203.145-92.74a1.586 1.586 0 00-1.317-2.885l-203.145 92.74a1.586 1.586 0 101.317 2.885zM394.975 433.99l203.145-92.74a1.586 1.586 0 00-1.317-2.885l-203.145 92.74a1.586 1.586 0 001.317 2.885zM383.679 409.246l203.145-92.74a1.586 1.586 0 10-1.318-2.885l-203.144 92.74a1.586 1.586 0 001.317 2.885zM427.776 505.84l203.145-92.739a1.586 1.586 0 00-1.317-2.885l-203.145 92.739a1.586 1.586 0 101.317 2.885zM393.854 372.948l158.681-72.44a3.965 3.965 0 002.23-4.78 3.816 3.816 0 00-5.2-2.252L390.93 365.895a4 4 0 00-2.26 4.85 3.816 3.816 0 005.183 2.203z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M222.405 714.031c1.694-26.244 16.317-52.87 40.66-62.823a121.17 121.17 0 004.933 83.045c4.43 10.1 10.41 20.873 7.436 31.494-1.85 6.61-7.022 11.888-12.949 15.35-5.926 3.46-12.62 5.339-19.23 7.183L242 789.448c-12.054-23.373-21.29-49.172-19.596-75.417z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M263.34 651.686a103.567 103.567 0 00-22.249 59.71 44.6 44.6 0 001.333 13.91 25.58 25.58 0 007.054 11.467c3.049 2.975 6.512 5.665 8.785 9.33a15.663 15.663 0 011.521 12.719c-1.5 5.293-4.814 9.732-8.204 13.96-3.765 4.695-7.75 9.512-9.113 15.52-.165.728-1.285.43-1.12-.297 2.37-10.454 12-16.884 16.209-26.422 1.964-4.451 2.598-9.521.246-13.957-2.056-3.879-5.625-6.656-8.739-9.642a27.296 27.296 0 01-7.314-10.955 41.231 41.231 0 01-1.864-13.808 100.479 100.479 0 015.517-30.915 105.403 105.403 0 0117.121-31.442c.462-.584 1.276.243.817.822z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M240.987 704.376a15.538 15.538 0 01-12.771-15.548.58.58 0 011.16-.011 14.388 14.388 0 0011.909 14.438c.734.13.432 1.249-.298 1.12zM247.733 735.468a29.949 29.949 0 0012.33-18.01c.167-.727 1.287-.429 1.12.298a31.151 31.151 0 01-12.868 18.715c-.619.418-1.197-.586-.582-1.003zM250.413 671.958a8.795 8.795 0 008.296-.916c.613-.426 1.19.579.581 1.003a9.856 9.856 0 01-9.174 1.033.599.599 0 01-.412-.709.582.582 0 01.71-.411z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-300 dark:text-gray-600"
              d="M341.559 693.247c-.376.277-.751.554-1.126.841a115.831 115.831 0 00-14.1 12.42c-.342.344-.684.697-1.016 1.05a122.112 122.112 0 00-24.323 37.81 118.587 118.587 0 00-5.49 17.161c-1.921 8.081-3.362 16.996-7.713 23.771a20.346 20.346 0 01-1.466 2.047l-42.801 2.54c-.1-.043-.2-.077-.301-.12l-1.705.18c.051-.307.11-.624.16-.93.03-.179.068-.358.096-.536.023-.119.045-.238.058-.346.008-.04.015-.08.023-.11.013-.108.037-.207.05-.306q.49-2.66 1.018-5.323c0-.01 0-.01.008-.02 2.716-13.518 6.585-26.928 12.367-39.325.174-.373.347-.756.54-1.13a113.158 113.158 0 019.233-15.992 100.037 100.037 0 016.2-8.001 83.187 83.187 0 0119.856-16.8c14.87-9.015 32.46-13.175 49.159-9.197.427.102.845.204 1.273.316z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M341.495 693.796a103.567 103.567 0 00-53.715 34.28 44.6 44.6 0 00-7.31 11.909 25.58 25.58 0 00-1.272 13.402c.643 4.211 1.79 8.445 1.397 12.739a15.663 15.663 0 01-6.443 11.07c-4.385 3.324-9.703 4.873-14.956 6.208-5.832 1.482-11.914 2.928-16.62 6.905-.57.482-1.284-.43-.715-.912 8.187-6.92 19.747-6.255 28.85-11.337 4.248-2.372 7.806-6.038 8.6-10.996.693-4.335-.485-8.701-1.173-12.96a27.296 27.296 0 01.755-13.15 41.231 41.231 0 016.826-12.147 100.479 100.479 0 0123.018-21.363 105.404 105.404 0 0132.6-14.796c.72-.188.873.962.158 1.148z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M291.924 722.407a15.538 15.538 0 01-.836-20.103c.461-.586 1.394.102.932.69a14.388 14.388 0 00.816 18.698c.509.546-.406 1.258-.912.715zM278.59 751.295a29.949 29.949 0 0020.688-6.957c.572-.48 1.287.432.715.912a31.151 31.151 0 01-21.541 7.196c-.747-.039-.603-1.19.139-1.151zM318.968 702.199a8.795 8.795 0 007.175 4.263c.746.029.602 1.18-.14 1.15a9.856 9.856 0 01-7.947-4.698.599.599 0 01.098-.813.582.582 0 01.814.098zM861.997 661.858H460.741V209.276h401.256z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#cacaca"
              d="M861.997 661.858H460.741V209.276h401.256zm-399.099-2.157H859.84V211.433H462.898z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#e4e4e4"
              d="M813.25 421.185H509.488a2.157 2.157 0 110-4.314H813.25a2.157 2.157 0 010 4.314zM813.25 384.185H509.488a2.157 2.157 0 110-4.314H813.25a2.157 2.157 0 010 4.314zM813.25 347.185H509.488a2.157 2.157 0 110-4.314H813.25a2.157 2.157 0 010 4.314zM813.25 310.185H509.488a2.157 2.157 0 110-4.314H813.25a2.157 2.157 0 010 4.314zM813.25 454.623H509.488a2.157 2.157 0 110-4.314H813.25a2.157 2.157 0 010 4.314zM813.25 620.623H509.488a2.157 2.157 0 110-4.314H813.25a2.157 2.157 0 010 4.314z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              className="fill-current text-gray-50 dark:text-gray-300"
              d="M740.484 585.994h-158.23a3.993 3.993 0 01-3.99-3.99v-93.076a3.993 3.993 0 013.99-3.99h158.23a3.993 3.993 0 013.99 3.99v93.077a3.993 3.993 0 01-3.99 3.989z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#3b82f6"
              d="M687.643 532.82a8.801 8.801 0 00-12.645-.226l-44.53 44.531a6.288 6.288 0 01-8.87.013l-6.595-6.582a8.78 8.78 0 00-12.42 0l-12.764 12.779h143.1v-1.822z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#3f3d56"
              d="M740.484 585.994h-158.23a3.993 3.993 0 01-3.99-3.99v-93.076a3.993 3.993 0 013.99-3.99h158.23a3.993 3.993 0 013.99 3.99v93.077a3.993 3.993 0 01-3.99 3.989zm-158.23-98.396a1.331 1.331 0 00-1.33 1.33v93.077a1.331 1.331 0 001.33 1.33h158.23a1.331 1.331 0 001.33-1.33v-93.077a1.331 1.331 0 00-1.33-1.33z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M359.017 570.436a10.056 10.056 0 00-8.671-12.75l-8.291-34.76-12.708 13.54 9.822 30.933a10.11 10.11 0 0019.848 3.037z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#e4e4e4"
              d="M336.856 557.828a4.505 4.505 0 01-2.708-2.476l-17.579-42.998a46.373 46.373 0 01-1.648-32.602l11.264-35.283a14.497 14.497 0 1128.872 2.642l-14.938 56.816 10.005 44.621a4.515 4.515 0 01-2.2 4.68l-7.416 4.237a4.506 4.506 0 01-2.623.576 4.455 4.455 0 01-1.03-.213z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M203.799 669.082L216.058 669.082 221.891 621.794 203.796 621.794 203.799 669.082z"
            ></path>
            <path
              fill="#2f2e41"
              d="M396.25 774.133l24.145-.001a15.387 15.387 0 0115.387 15.386v.5l-39.53.001z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M134.799 669.082L147.058 669.082 152.891 621.794 134.796 621.794 134.799 669.082z"
            ></path>
            <path
              fill="#2f2e41"
              d="M327.25 774.133l24.145-.001a15.387 15.387 0 0115.387 15.386v.5l-39.53.001zM406.76 539.618l-71.896-6.326s-7.103 45.326-6.103 63.326 2 46 2 46l-8 122 31-4 4-101 13-55 15 70 10 90 27-3-9-109s8-98-7-113z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <circle cx="182.181" cy="277.565" r="20" fill="#ffb8b8"></circle>
            <path
              fill="#e4e4e4"
              d="M399.662 431.276l-14.284-11.371s-15.47-11.936-24.543-3.112l-4.074 5.825s-23.099 8.658-23.099 19.658l1.099 60.342s-8 31 4 33l69.901 5.658-.901-57.658z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#2f2e41"
              d="M362.26 404.118s-21-15-10-33c7.632-12.487 23.445-11.499 32.415-9.722a15.154 15.154 0 0111.086 8.722c1.5 3.5 1.5 7-4.5 7-12 0-6 9-6 9s-8 2-6 9-17 9-17 9z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#ffb6b6"
              d="M471.819 536.663a10.056 10.056 0 00-13.945-6.58l-24.792-25.737-4.072 18.118 24.167 21.662a10.11 10.11 0 0018.642-7.463z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#e4e4e4"
              d="M446.325 537.054a4.505 4.505 0 01-3.59-.758l-36.977-28.117a46.373 46.373 0 01-17.974-27.25l-8.211-36.115a14.497 14.497 0 1126.215-12.385l15.98 56.532 31.276 33.362a4.515 4.515 0 01.48 5.148l-4.237 7.416a4.506 4.506 0 01-1.968 1.828 4.455 4.455 0 01-.994.34z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#cacaca"
              d="M954.236 139.23H376.68a.838.838 0 010-1.676h577.556a.838.838 0 010 1.676z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <circle cx="199.967" cy="9.221" r="9.221" fill="#3f3d56"></circle>
            <circle cx="231.821" cy="9.221" r="9.221" fill="#3f3d56"></circle>
            <circle cx="263.675" cy="9.221" r="9.221" fill="#3f3d56"></circle>
            <path
              fill="#3f3d56"
              d="M935.15 114.693h-22.632a1.677 1.677 0 010-3.353h22.632a1.677 1.677 0 010 3.353zM935.15 120.98h-22.632a1.677 1.677 0 010-3.353h22.632a1.677 1.677 0 010 3.353zM935.15 127.267h-22.632a1.677 1.677 0 010-3.353h22.632a1.677 1.677 0 010 3.353z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#cacaca"
              d="M577.58 790.276h-381a1 1 0 110-2h381a1 1 0 010 2z"
              transform="translate(-195.58 -109.053)"
            ></path>
            <path
              fill="#3b82f6"
              d="M780.155 271.019H542.88a5.393 5.393 0 01-5.459-4.654 5.19 5.19 0 015.162-5.725h237.205a5.442 5.442 0 015.537 4.724 5.19 5.19 0 01-5.169 5.655z"
              transform="translate(-195.58 -109.053)"
            ></path>
          </svg></div>
        <div><p className="md:text-xl md:py-8 sm:py-6 my-14 lg:py-20 text-lg text-center">Our articles are written by our students and professionals. Our team of writers are always ready givr you the best content, tips and tricks to help you in your study and career.</p></div>

      </div>
      {/* Extra space */}
      <div className="h-16"></div>
    </>
  )
}

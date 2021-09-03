import VJS_NavBar from '../../../components/vanilla-js/vjs-navbar'
import Link from 'next/link'

const Content_Writing = () => {
  return (
    <>
    <VJS_NavBar />
    <h1 className="text-center text-4xl m-8">FIND CONTENT WRITING INTERNSHIPS HERE!</h1><br /><br />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full overflow-hidden">
           <Link href="/internships/simply-neuroscience"><a><img src="/org/simply-neuroscience.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium">Simply neuroscience</h1>
            <p className="text-sm">Hiring 
                Volunteers
            </p>
        </div>
    </div>

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/empowering-med"><a><img src="/org/empowering-med.png" alt="logo" width="90px" height="90px"/></a></Link> 
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium">Empowering med</h1>
            <p className="text-sm">Hiring 
                Interns, Members, Volunteers
            </p>
        </div>
    </div>


      <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
          <Link href="/internships/bloody-donuts"><a><img src="/org/bloody-donuts.png" alt="logo"/></a></Link>
        </div>
        <div className="m-2">
          <h1 className="text-lg font-medium">Bloody Donuts</h1>
          <p className="text-sm">Hiring
            Interns, Volunteers
          </p>
        </div>
      </div>

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/jaat"><a><img src="/org/jaat.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >JAAT</h1>
            <p className="text-sm">Hiring 
                Interns, Members
            </p>
        </div>
    </div>
    
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
        <Link href="/internships/mind-boggle"><a><img src="/org/mind-boggle.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >MINDBOGGLE</h1>
            <p className="">Hiring 
                Volunteers, Members
            </p>
        </div>
    </div>
    
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
        <Link href="/internships/my-for-me"><a><img src="/org/my-for-me.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >MY FOR ME</h1>
            <p className="text-sm">Hiring 
                Interns, Volunteers, Members
            </p>
        </div>
    </div>
    
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-3">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
        <Link href="/internships/magnify-you"><a><img src="/org/magnify-you.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >MAGNIFY YOU </h1>
            <p className="text-sm">Hiring Volunteers, Members
            </p>
        </div>
    </div>
        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/scalar-news"><a><img src="/org/scalar-news.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="internship-type-temp-card-h1" >SCALAR NEWS</h1>
                <p className="text-sm">Hiring Interns
                </p>
            </div>
        </div>

           
        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/youth-medicine-today"><a><img src="/org/youth-medicine-today.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="internship-type-temp-card-h1" >YOUTHMEDICINE TODAY</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/innov-xplorers"><a><img src="/org/innov-xplorers.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >INNOVXPLORERS</h1>
                <p className="text-sm">Hiring Volunteers, members, Interns
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/the-graveyard-zine"><a><img src="/org/the-graveyard-zine.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >THE <br />GRAVEYARD ZINE</h1>
                <p className="text-sm">Hiring 
                 Volunteers
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-5">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/amers"><a><img src="/org/amers.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >AMERS</h1>
                <p className="text-sm">Hiring 
                    Volunteers
                </p>
            </div>

        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-1">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/touche"><a><img src="/org/touche.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1>TOUCHE</h1>
                <p>Hiring 
                    Interns
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/bright-her-future"><a><img src="/org/bright-her-future.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >BRIGHTHER FUTURE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/the-communitys-truth"><a><img src="/org/the-communitys-truth.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >THE COMMUNITY&apos;S TRUTH</h1>
                <p className="text-sm">Hiring 
                    Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/voice-4-teens"><a><img src="/org/voice-4-teens.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >VOICE4TEENS</h1>
                <p className="text-sm">Hiring Volunteers
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-3">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/queer-youth-rises"><a><img src="/org/queer-youth-rises.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="" >QUEER YOUTH RISES</h1>
                <p className="">Hiring Volunteers, Members
                </p>
            </div>
        </div>


        <div className="m-4 shadow-lg rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/we-are-the-change"><a><img src="/org/we-are-the-change.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >WE ARE THE CHANGE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content_Writing
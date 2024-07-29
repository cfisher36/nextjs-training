import Image from "next/image";

import ProfilePicture from "../../public/pfp.png"
import ContactMeForm from "@/components/ContactMeForm";

export default function AboutMe() {
  return (
    <main className="min-h-screen p-12 px-24">
      <h1 className="text-xl">About Me</h1>
      <div className="grid grid-cols-3 gap-8 pt-4">
        <div>
            <Image alt="Profile Picture" src={ProfilePicture}></Image>
        </div>
        <div>
            <label htmlFor="name" className="font-bold">Name:</label>
            <div id="name" className="pb-1">Caleb Fisher</div>
            <label htmlFor="name" className="font-bold">College:</label>
            <div className="pb-1">University of Tennessee - Knoxville</div>
            <label htmlFor="name" className="font-bold">Interesting Fact:</label>
            <div className="pb-1">I enjoy mountain biking around Enterprise South in my free time.</div>
            <label htmlFor="name" className="font-bold">How long I've been at CGI:</label>
            <div className="pb-1">2 months</div>
        </div>
        <div>
          <ContactMeForm />
        </div>
      </div>
    </main>
  );
}

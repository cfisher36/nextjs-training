import Image from "next/image";

import ProfilePicture from "../../public/pfp.png"
import ContactMeForm from "@/components/ContactMeForm";

export default function AboutMe() {
  return (
    <main className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-24">
      <h1 className="flex justify-center md:justify-start text-2xl sm:text-xl font-bold mb-4">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="flex justify-center md:justify-start">
          <Image
            alt="Profile Picture"
            src={ProfilePicture}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full md:rounded-none object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div>
            <span className="font-bold">Name:</span>
            <div>Caleb Fisher</div>
          </div>
          <div>
            <span className="font-bold">College:</span>
            <div>University of Tennessee - Knoxville</div>
          </div>
          <div>
            <span className="font-bold">Interesting Fact:</span>
            <div>I enjoy mountain biking around Enterprise South in my free time.</div>
          </div>
          <div>
            <span className="font-bold">How long I've been at CGI:</span>
            <div>2 months</div>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <ContactMeForm />
        </div>
      </div>
    </main>
  );
}

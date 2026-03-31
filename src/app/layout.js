import "../styles/globals.css";

const title = "ATSResume | Get hired with an ATS-optimized resume";
const description =
  "ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems. Say goodbye to frustration and wasted time spent on manual resume formatting. Create your winning resume with ATSResume today and get noticed by employers.";
const keywords = [
  "ATS-friendly",
  "Resume optimization",
  "Keyword-rich resume",
  "Applicant Tracking System",
  "ATS resume builder",
  "ATS resume templates",
  "ATS-compliant resume",
  "ATS-optimized CV",
  "ATS-friendly format",
  "ATS resume tips",
  "Resume writing services",
  "Career guidance",
  "Job search in India",
  "Resume tips for India",
  "Professional resume builder",
  "Cover letter writing",
  "Interview preparation",
  "Job interview tips",
  "Career growth",
  "Online job applications",
  "resume builder",
  "free resume builder",
  "resume ats",
  "best free resume builder",
  "resume creator",
  "resume cv",
  "resume design",
  "resume editor",
  "resume maker",
];

export const metadata = {
  metadataBase: new URL("https://atsresume.vercel.app"),
  title,
  description,
  keywords,
  authors: [{name: "Saurav Hathi"}],
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://atsresume.vercel.app",
    title,
    description,
    images: ["/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <div className={'content'}>
      {children}
    </div>
    </body>
    </html>
  );
}

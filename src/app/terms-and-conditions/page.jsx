import Navbar from "@/Components/UI/Navbar";
import { ScrollAreaAutosize } from "@mantine/core";
import React from "react";

export const metadata = {
  title: "Sheetsway - Terms and Conditions",
};

function about() {
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 my-24 w-full mx-auto">
        <div className="container flex flex-col gap-4 mx-auto">
          <p className="text-3xl font-bold mb-4">Terms of Use (TOU)</p>
          <p className="mb-6">Last Updated: 08/07/2024</p>

          <h4 className="text-2xl font-semibold mb-2">Introduction</h4>
          <p className="mb-4">
            Welcome to Sheetsway! These Terms of Service (“Terms”) govern your
            use of our website located at
            <a href="http://www.sheetsway.com" className="text-blue-500">
              {" "}
              www.sheetsway.com
            </a>{" "}
            (the “Site”) and our software solutions provided through the Site
            (collectively the “Services”). By accessing or using our Services
            you agree to be bound by these Terms. If you do not agree to these
            Terms do not use our Services.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Definitions</h4>
          <p className="mb-2">
            “We” “us” “our” refers to Sheetsway a company registered in Malta.
          </p>
          <p className="mb-2">
            “You” “your” refers to the user or subscriber of our Services.
          </p>
          <p className="mb-4">
            “Services” refers to the Sheetsway software solutions and any
            related services provided by us.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Eligibility</h4>
          <p className="mb-4">
            You must be at least 18 years old to use our Services. By using our
            Services you represent and warrant that you meet this requirement.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Account Registration</h4>
          <p className="mb-4">
            To access certain features of our Services you may need to register
            for an account. When registering you agree to provide accurate
            current and complete information. You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Use of Services</h4>
          <p className="mb-4">
            You agree to use the Services only for lawful purposes and in
            accordance with these Terms. You shall not:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Use the Services in any manner that could disable overburden or
              impair the Services or interfere with any other party’s use of the
              Services.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the
              Services.
            </li>
            <li>Use any automated means to access the Services.</li>
            <li>
              Use the Services to infringe on the intellectual property rights
              of others.
            </li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">User Content</h4>
          <p className="mb-4">
            You retain ownership of any content you upload submit or post to the
            Services (“User Content”). However by providing User Content you
            grant us a non-exclusive worldwide royalty-free transferable license
            to use reproduce distribute prepare derivative works of display and
            perform the User Content in connection with the Services.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Intellectual Property</h4>
          <p className="mb-4">
            All intellectual property rights in the Services and the content
            provided through the Services other than User Content are owned by
            us or our licensors. You may not use our intellectual property
            without our prior written consent.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Fees and Payment</h4>
          <p className="mb-4">
            Certain features of the Services may require payment. You agree to
            pay all fees and charges associated with your use of the Services.
            All fees are non-refundable except as required by law.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Termination</h4>
          <p className="mb-4">
            We may terminate or suspend your access to the Services at any time
            with or without notice for any reason including if we believe you
            have violated these Terms. Upon termination your right to use the
            Services will immediately cease.
          </p>

          <h4 className="text-2xl font-semibold mb-2">
            Limitation of Liability
          </h4>
          <p className="mb-4">
            To the maximum extent permitted by law we shall not be liable for
            any indirect incidental special consequential or punitive damages or
            any loss of profits or revenues whether incurred directly or
            indirectly or any loss of data use goodwill or other intangible
            losses resulting from:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Your use or inability to use the Services.</li>
            <li>
              Any unauthorized access to or use of our servers and/or any
              personal information stored therein.
            </li>
            <li>
              Any interruption or cessation of transmission to or from the
              Services.
            </li>
            <li>
              Any bugs viruses trojan horses or the like that may be transmitted
              to or through our Services by any third party.
            </li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Indemnification</h4>
          <p className="mb-4">
            You agree to indemnify defend and hold harmless Sheetsway its
            affiliates officers directors employees and agents from and against
            any and all claims damages obligations losses liabilities costs or
            debt and expenses (including but not limited to attorney’s fees)
            arising from:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Your use of and access to the Services.</li>
            <li>Your violation of any term of these Terms.</li>
            <li>
              Your violation of any third-party right including without
              limitation any intellectual property property or privacy right.
            </li>
            <li>
              Any claim that your User Content caused damage to a third party.
            </li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Governing Law</h4>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of Malta without regard to its conflict of law principles.
            You agree to submit to the personal jurisdiction of the courts
            located in Malta for the purpose of litigating all such claims or
            disputes.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Changes to Terms</h4>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. If we make
            changes we will notify you by revising the date at the top of these
            Terms and in some cases we may provide additional notice. Your
            continued use of the Services following the posting of changes
            constitutes your acceptance of such changes.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Contact Information</h4>
          <p>
            If you have any questions about these Terms please contact us at{" "}
            <a href="mailto:info@sheetsway.com" className="text-blue-500">
              info@sheetsway.com
            </a>
          </p>
        </div>
      </div>
    </ScrollAreaAutosize>
  );
}

export default about;

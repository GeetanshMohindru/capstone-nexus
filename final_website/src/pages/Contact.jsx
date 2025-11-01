import React from 'react';
import PageHeader from '../components/PageHeader';

function InfoCard({ title, children }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div style={{ color: 'var(--muted)' }}>{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="Get in touch with TIET - We're here to help with all your queries" />

      <div className="grid-2">
        <div style={{ display: 'grid', gap: 16 }}>
          <InfoCard title="Campus Address">
            Thapar Institute of Engineering & Technology<br />
            P.O. Box 32, Patiala - 147004<br />
            Punjab, India
          </InfoCard>
          <InfoCard title="Phone Numbers">
            <div><b>Main Office</b><br />+91-175-2393021</div>
            <div style={{ height: 8 }} />
            <div><b>Admissions</b><br />+91-175-2393022</div>
            <div style={{ height: 8 }} />
            <div><b>Hostel Office</b><br />+91-175-2393023</div>
          </InfoCard>
          <InfoCard title="Email Addresses">
            <div><b>General Inquiries</b> — info@thapar.edu</div>
            <div><b>Admissions</b> — admissions@thapar.edu</div>
            <div><b>Technical Support</b> — support@thapar.edu</div>
          </InfoCard>
          <InfoCard title="Office Hours">
            Monday - Friday: 9:00 AM - 5:00 PM<br />
            Saturday: 9:00 AM - 1:00 PM<br />
            Sunday: Closed
          </InfoCard>
          <InfoCard title="Online Resources">
            Official Website — www.thapar.edu<br />
            Student Portal — portal.thapar.edu
          </InfoCard>
          <InfoCard title="Emergency Contacts">
            Campus Security — +91-175-2393000<br />
            Medical Emergency — +91-175-2393001<br />
            Hostel Warden — +91-175-2393002
          </InfoCard>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Send us a Message</h3>
          <div className="form">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <input placeholder="Email" />
            <input placeholder="Phone Number" />
            <input placeholder="Subject" />
            <textarea placeholder="Please describe your query in detail..." />
            <button className="button primary">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}


